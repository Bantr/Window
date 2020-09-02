import * as React from 'react';
import styled from 'styled-components';
import { Container, AvatarContainer, Avatar, Message, TimeAgo } from '../style';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TimeAgoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OptionsContainer = styled.div`
  &.placeholder {
    margin-left: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const SkeletonNotification: React.FC = () => (
  <Container className="placeholder-container">
    <AvatarContainer>
      <Avatar className="placeholder" src={undefined}></Avatar>
    </AvatarContainer>
    <MessageContainer>
      <Message className="placeholder" />
      <TimeAgoContainer>
        <TimeAgo className="placeholder" />
        <TimeAgo className="short placeholder" />
        <TimeAgo className="placeholder" />
      </TimeAgoContainer>
    </MessageContainer>
    <OptionsContainer className="placeholder" />
  </Container>
);
