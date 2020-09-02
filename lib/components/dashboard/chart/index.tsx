import * as React from 'react';
import * as c3 from 'c3';
import { v4 as uuid } from 'uuid';
import { DBVISUAL } from 'lib/enums';
import { chartService } from './ChartService';
import { ThemeContext } from 'styled-components';
import { ChartContainer } from './style';

export interface IChartProps {
  loading: boolean;
  data: Array<{ [key: string]: any }>;
  showLegend?: boolean;
  type: DBVISUAL;
  keys: string[];
  axesOptions?: c3.AxesOptions
  showTooltip?: boolean;
}
export const Chart: React.FC<IChartProps> = (props) => {
  const theme = React.useContext(ThemeContext);
  const id = `chart-${uuid()}`;

  React.useEffect(() => {
    if (!props.loading && props.data) {
      c3.generate(chartService.chartConfiguration(id, props, theme));
    }
  }, [props.loading, props.data]);

  if (props.loading) {
    return (
      <></>
    );
  }

  return (
    <ChartContainer id={id} />
  );
};
