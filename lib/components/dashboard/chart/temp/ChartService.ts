import * as c3 from 'c3';
import { DBVISUAL } from 'lib/enums';

export interface IChartSettings {
  data: any;
  keys: Array<string>;
  type: DBVISUAL;
  showLegend: boolean;
  showTooltip: boolean;
  showLabelsOnChart: boolean;
  colorPattern: Array<string>;
  axesOptions?: c3.AxesOptions;
  gridOptions?: c3.GridOptions;
}

export class ChartService {
  private _chartConfiguration: c3.ChartConfiguration
  private _id: string

  constructor(id: string, chartSettings: IChartSettings) {
    this._id = String(id);

    this._chartConfiguration = {
      bindto: `#${this._id}`,
      data: {
        json: this._validateData(chartSettings.data),
        keys: {
          value: chartSettings.keys
        },
        type: this._validateType(chartSettings.type),
        labels: chartSettings.showLabelsOnChart
      },
      legend: {
        show: chartSettings.showLegend,
        position: 'bottom'
      },
      color: {
        pattern: chartSettings.colorPattern
      },
      tooltip: {
        show: chartSettings.showTooltip

      },
      axis: chartSettings.axesOptions ? chartSettings.axesOptions : null,
      grid: chartSettings.gridOptions ? chartSettings.gridOptions : null
    };
  }

  public generateChart(): void {
    c3.generate(this._chartConfiguration);
  }

  private _validateData(data: any): any {
    // validate data structure
    if (!data) {
      throw new Error('The dataset is empty');
    }
    return data;
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
        throw new Error('This type is not recognized');
    }
  }
}
