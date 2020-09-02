import * as React from 'react';
import { ChartService, IChartSettings } from './ChartService';

export type Props = {
  chartId: string;
  chartSettings: IChartSettings;
}

export const C3Chart: React.FC<Props> = ({ chartId, chartSettings }) => {
  React.useEffect(() => {
    const _chartService = new ChartService(chartId, chartSettings);
    _chartService.generateChart();
  });

  return <div id={String(chartId)} />;
};
