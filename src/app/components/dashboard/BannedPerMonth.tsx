import * as React from 'react';
import * as c3 from 'c3';
import { Chart } from 'lib/components/dashboard';
import { DBVISUAL } from 'lib/enums';

export const BannedPerMonth: React.FC = () => {
  const axesOptions: c3.AxesOptions = {
    x: {
      type: 'category',
      categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
      height: 50,
      tick: { centered: true }
    },
    y: {
      show: false,
      min: 0
    }
  };

  const mockData = [{ banned: 30 }, { banned: 45 }, { banned: 0 }, { banned: 25 }, { banned: 105 }, { banned: 25 }, { banned: 0 }, { banned: 25 }, { banned: 25 }, { banned: 35 }, { banned: 25 }, { banned: 0 }];

  const [data, setData] = React.useState([]);
  //const _httpService = new HttpService()

  async function fetchData(): Promise<{ [key: string]: any }> {
    //const resp = await _httpService.get('/fetch')
    //const json = await resp.json()
    return {};
  }

  function parseData(data: any): { [key: string]: any }[] {
    // temp fix, data shouldn't been returned
    return data || mockData;
  }

  React.useEffect(() => {
    fetchData().then(data => {
      setData(parseData(data));
    });
  }, []);

  return (
    <Chart
      axesOptions={axesOptions}
      chartId="BannedPerMonth"
      data={data}
      keys={['banned']}
      showTooltip
      title="Bans per Month"
      type={DBVISUAL.SPLINE}
      width={600}
    />
  );
};
