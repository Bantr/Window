import * as React from 'react';
import styled from 'styled-components';
import { C3Chart } from './C3Chart';
import { Hamburger } from 'lib/icons';
import { DBVISUAL } from 'lib/enums';
import { Title } from 'lib/components';
import { Spinner } from 'lib/icons';
import { useTheme } from 'lib/hooks';
import { IChartSettings } from './ChartService';

type StyledProps = {
  width: number;
  height: number;
}

const Container = styled.div<StyledProps>`
  background-color: ${({ theme }): string => theme.pb};
  border-radius: 10px;
  width: ${({ width }): number => width}px;
  height: ${({ height }): number => height}px;
  position: relative;
  box-shadow: 0 19px 38px ${({ theme }): string => theme.shadow}4D, 0 15px 12px ${({ theme }): string => theme.shadow}38;
`;

const SettingsContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  margin: 0 auto;
  border-bottom: 2px solid ${({ theme }): string => theme.sb};
`;
const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;

const C3Container = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 300px;
`;

interface IProps {
  data: Array<{ [key: string]: any }>;
  chartId: string;
  keys: Array<string>;
  showLabelsOnChart?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  type: DBVISUAL;
  title: string;
  width?: number;
  height?: number;
  axesOptions?: c3.AxesOptions;
  gridOptions?: c3.GridOptions;
}

export const ChartContainer: React.FC<IProps> = ({
  data,
  chartId,
  keys,
  showLabelsOnChart = false,
  showLegend = false,
  showTooltip = false,
  type,
  height = 400,
  title,
  width = 300,
  axesOptions,
  gridOptions
}) => {
  const darkMode = useTheme().dark;
  const chartSettings: IChartSettings = {
    data: data,
    type: type,
    keys: keys,
    showLegend: showLegend,
    showLabelsOnChart: showLabelsOnChart,
    colorPattern: darkMode ? ['#3366ff', '#1ee499'] : ['#ff5e62', '#f96'],
    axesOptions: axesOptions,
    gridOptions: gridOptions,
    showTooltip: showTooltip
  };

  return (
    <Container height={height} width={width} >
      <SettingsContainer>
        <Inner>
          <Title size="large" type="h2">
            {title}
          </Title>
          <Hamburger />
        </Inner>
      </SettingsContainer>
      <C3Container>
        {data === undefined ? (
          <Spinner scale={2} />
        ) : (<C3Chart chartId={chartId} chartSettings={chartSettings} />)}
      </C3Container>
    </Container>
  );
};
