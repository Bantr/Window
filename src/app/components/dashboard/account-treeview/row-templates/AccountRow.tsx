import * as React from 'react';
import styled from 'styled-components';
import { steamService } from 'lib/services';
import { Steam } from 'lib/icons';
import { ITrackedAccount } from '../AccountTreeview';

const RowContainer = styled.div`
  overflow:hidden;
  height: '80px';
  transition: height .2s ease-out;
`;

const AccountRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 15px 20px;
  border-bottom: 1px solid ${({ theme }): string => theme.sb};
  padding: 10px 0 10px 5px;
  overflow-y: hidden;
`;

const Avatar = styled.div<{ src?: string }>`
  width: 45px;
    .img {
      margin: 0 auto;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-image: url(${({ src }): string => src ? src : 'none'});
      background-size: contain;
    }
`;

const Username = styled.div`
  width: 40%;
  height: 50%;
  &.placeholder {
    height: 25px;
  }
`;
const LastTracked = styled.div`
  width: 20%;
  &.placeholder {
    height: 25px;
  }
`;

const Links = styled.div`
  width: 10%;

  &.placeholder {
    height: 25px;
  }
`;

export const AccountRow: React.FC<ITrackedAccount> = React.forwardRef<HTMLDivElement, ITrackedAccount>(({ steamAvatar = 'not found', steamProfile = 'not found', steamUsername = 'not found', lastCheckedAt }, ref) => {
  function transformIsoStringToDate(lastCheckedAt: string): string {
    const lastCheckedDate = new Date(lastCheckedAt);
    const currentDate = new Date();
    const differenceInDays = (currentDate.getTime() - lastCheckedDate.getTime()) / (1000 * 3600 * 24);

    if (differenceInDays > 0 && differenceInDays < 1) {
      // less than a day.
      const differenceInHours = Math.round(differenceInDays * 24);
      return `${differenceInHours} hour${differenceInHours === 1 ? '' : 's'} ago`;
    } else if (differenceInDays <= 30) {
      return `${differenceInDays} days ago.`;
    }
    // in days
  }

  return (
    <RowContainer ref={ref}>
      <AccountRowContainer>
        <Avatar src={steamAvatar}>
          <div className="img" />
        </Avatar>
        <Username>{steamService.validateUsername(steamUsername)}</Username>
        <LastTracked>{transformIsoStringToDate(lastCheckedAt)}</LastTracked>
        <Links>
          <a href={steamProfile} rel="noopener noreferrer" target="_blank" ><Steam fill="black" /></a>
        </Links>
      </AccountRowContainer>
    </RowContainer>
  );
});

export const AccountRowPlaceholder: React.FC<{}> = () => (
  <AccountRowContainer>
    <Avatar>
      <div className="img placeholder" />
    </Avatar>
    <Username className="placeholder" />
    <LastTracked className="placeholder" />
    <Links className="placeholder" />
  </AccountRowContainer>
);
