import { DBVISUAL } from 'lib/enums';
import { IChartProps } from './index';
import * as c3 from 'c3';
import { DefaultTheme } from 'styled-components';

class ChartService {
  public chartConfiguration(id: string, { data, type, showLegend = true, keys, axesOptions, showTooltip = false }: IChartProps, theme: DefaultTheme): c3.ChartConfiguration {
    return {
      bindto: `#${id}`,
      data: {
        json: data,
        keys: { value: keys },
        type: this._validateType(type),
        empty: {
          label: {
            text: 'No data :('
          }
        }
      },
      color: {
        pattern: [theme.p, theme.s, theme.chart1, theme.chart2, theme.chart3, theme.chart4]
      },
      legend: {
        show: showLegend,
        position: 'bottom'
      },
      tooltip: {
        show: showTooltip
      },
      axis: axesOptions ? axesOptions : null
    };
  }

  private _validateType(type: DBVISUAL): DBVISUAL {
    switch (type) {
      case DBVISUAL.AREA:
      case DBVISUAL.BAR:
      case DBVISUAL.DONUT:
      case DBVISUAL.LINE:
      case DBVISUAL.PIE:
      case DBVISUAL.SPLINE:
        return type;
      default:
        throw new Error('this is the error');
    }
  }
}

export const chartService = new ChartService();
