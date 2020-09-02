import * as React from 'react';
import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';
import { Title, LiveTag } from 'lib/components';
import {
  Container,
  SettingsContainer,
  Content,
  LiveContainer,
  SummaryContainer,
  SummaryItem,
  ErrorMessage
} from './style';
import { Hamburger } from 'lib/icons';
import * as Sentry from '@sentry/react';

interface IProps {
  title: string;
  children: React.ReactNode;
  error?: ApolloError | GraphQLError;
  loading?: boolean;
  center?: boolean;
  live?: boolean;
  summary?: ISummary[]
  Settings?: any /* TODO: should be defined later on. */
}

interface ISummary {
  title: string;
  value: any;
}

export const Card: React.FC<IProps> = ({ title, children, loading = false, error = null, live = false, Settings, center = false, summary }) => {
  if (loading) {
    return (
      <Container className="placeholder" />
    );
  }

  if (error) {
    Sentry.captureException(error);
    return (
      <Container>
        <SettingsContainer>
          <Title size="medium" type="h4">{title}</Title>
          {/* Currently this is just a placeholder, but a dropdown with actions should be past eventually */}
        </SettingsContainer>
        {
          summary
            ? <SummaryContainer>{summary.map((_) => <SummaryItem key={`summary-${title}-${_.value}`}><div>{_.title}</div><div>{_.value}</div></SummaryItem>)}</SummaryContainer>
            : null
        }
        <Content center={true}><ErrorMessage>Sorry! 🥺. An error occurred while fetching or processing your data. We are aware and are working on a solution!</ErrorMessage></Content>
      </Container>
    );
  }

  return (
    <Container>
      <SettingsContainer>
        <Title size="medium" type="h4">{title}</Title>
        {/* Currently this is just a placeholder, but a dropdown with actions should be past eventually */}
        {
          Settings ? <Hamburger pointer />
            : live
              ? <LiveContainer><LiveTag /></LiveContainer>
              : null
        }
      </SettingsContainer>
      <Content center={center}>
        {children}
      </Content>
    </Container>
  );
};
