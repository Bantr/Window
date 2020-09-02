import * as React from 'react';
import { Title, Paragraph } from 'lib/components';
import { Container, NotificationsContainer, Notification, BarChartContainer, ChartContainer } from './style';
// import { useOnScreen } from 'lib/hooks';
import { BarChart } from './BarChart';
import { Chart } from './chart';

export const Notifications: React.FC = () => {
  const ref = React.useRef();
  //const onScreen = useOnScreen(ref, '-200px');

  return (
    <Container>
      <NotificationsContainer ref={ref}>
        <Notification />
        <Notification />
        <Notification />
      </NotificationsContainer>
      <Title size="massive" type="h2">HE&apos;S CHEATING! HE&apos;S CHEATING!!</Title>
      <Paragraph>Ever wondered which players actually got banned? Sign up and receive notifications of every ban status change of all players <strong>YOU</strong> played with!</Paragraph>
      <BarChartContainer>
        <BarChart />
      </BarChartContainer>
      <ChartContainer>
        <Chart />
      </ChartContainer>
    </Container>
  );
};
