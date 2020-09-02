import * as React from 'react';
import { SnackContainer, IDefaultSnackProps } from '../snack';
import { Message, CloseContainer } from './style';
import { UserContext } from 'lib/context';
import { DateTime } from 'luxon';
import { steamService, stringService } from 'lib/services';
import { Plus } from 'lib/icons';
import { useSnackbar } from 'notistack';

export const Greeting = React.forwardRef<HTMLDivElement, IDefaultSnackProps>((props, ref) => {
  const { userData } = React.useContext(UserContext);
  const { closeSnackbar } = useSnackbar();

  const defineMessage = React.useCallback((): React.ReactNode => {
    const hour = DateTime.local().hour;

    switch (true) {
      case (hour >= 6 && hour < 12):
        return <span>Good morning, </span>;
      case (hour >= 12 && hour < 17):
        return <span>Good afternoon, </span>;
      case (hour >= 17 && hour <= 23):
        return <span>Good evening, </span>;
      case (hour >= 0 && hour < 6):
        return <span>Good night, </span>;
    }
  }, [userData]);

  return (
    <SnackContainer ref={ref}>
      <Message>
        {defineMessage()}
        <span className="username" >&nbsp;{stringService.capitalize(steamService.validateUsername(userData.username))}!</span>
      </Message>
      <CloseContainer>
        <Plus highlight onClick={() => { closeSnackbar(props.key); }} pointer rotate={45} scale={1.2} />
      </CloseContainer>
    </SnackContainer>
  );
});
