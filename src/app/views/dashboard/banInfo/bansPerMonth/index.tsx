import * as React from 'react';
import { useApolloClient } from '@apollo/client';
import { IPlayerAggregate } from 'lib/types/generated';
import { DBVISUAL } from 'lib/enums';
import { Card, Chart } from 'lib/components/dashboard';
import * as c3 from 'c3';
import GET_BAN_COUNT_OF_MONTH from 'lib/graphql/queries/getBanCountOfMonth.gql';
import { GraphQLError } from 'graphql';
import { DateTime } from 'luxon';

// TODO: Add Dropdown so you can choose between bans about people you played against or of all people we track.
export const BansPerMonth: React.FC = () => {
  const currentDate = DateTime.local();
  const client = useApolloClient();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState<GraphQLError>(null);

  const generateCategories = React.useCallback((): string[] => {
    const categories = [];
    for (let i = 0; i < 7; i++) {
      categories.push(currentDate.minus({ months: i }).monthShort);
    }
    return categories.reverse();
  }, []);

  function calculateDate(index: number, firstOfMonth: boolean): string {
    if (firstOfMonth) {
      return DateTime.fromObject({ year: currentDate.year, month: currentDate.month - index, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }).toISO();
    }
    return DateTime.fromObject({ year: currentDate.year, month: currentDate.month - index, day: currentDate.daysInMonth, hour: 23, minute: 59, second: 59, millisecond: 999 }).toISO();
  }

  React.useEffect(() => {
    for (let i = 0; i < 7; i++) {
      client.query<{ bans: IPlayerAggregate }>({
        query: GET_BAN_COUNT_OF_MONTH, variables: { firstDayOfMonth: calculateDate(i, true), lastDayOfMonth: calculateDate(i, false) }
      })
        .then(({ data, errors }) => {
          if (errors) { setError(errors[0]); }
          if (data) {
            const bans = { banned: data.bans.aggregate.count };
            setData(data => ([bans, ...data]));
          }
        });
    }
    setLoading(false);
  }, []);

  const axesOptions: c3.AxesOptions = {
    x: {
      type: 'category',
      categories: generateCategories(),
      tick: { centered: true }
    },
    y: {
      show: false,
      min: 0
    }
  };

  return (
    <Card center error={error} loading={loading} title="Bans last 6 months" >
      <Chart axesOptions={axesOptions} data={data.length === 6 ? data : null} keys={['banned']} loading={loading} showLegend={false} showTooltip type={DBVISUAL.BAR} />
    </Card>
  );
};
