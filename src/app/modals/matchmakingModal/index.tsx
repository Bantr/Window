import * as React from 'react';
import { Container, ActionContainer, Header, Description } from './style';
import { TextField, Title, Button, ErrorMessage, IErrorResponse } from 'lib/components';
import Joi from 'joi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers';
import { Plus } from 'lib/icons';
import { httpService } from 'lib/services';
import { useSnackbar } from 'notistack';
import { REGEX } from '@bantr/lib/dist/constants';
import * as Sentry from '@sentry/react';
import { setCustomErrorMessages } from 'lib/helpers';

// TODO: global hook that handles custom error messages

const schema = Joi.object({
  lastKnownMatch: Joi
    .string()
    .regex(REGEX.lastKnownMatch)
    .error((errors) => (setCustomErrorMessages('recently completed match token', errors))),

  matchmakingAuthCode: Joi
    .string()
    .regex(REGEX.matchAuthCode)
    .error((errors): any => (setCustomErrorMessages('match authentication code', errors)))
});

interface IProps {
  close: () => void;
}
interface IFormInputs {
  lastKnownMatch: string;
  matchmakingAuthCode: string;
}

export const MatchmakingModal = React.forwardRef<HTMLDivElement, IProps>(({ close }, ref) => {
  const { register, handleSubmit, errors } = useForm<IFormInputs>({ resolver: joiResolver(schema) });
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [requestError, setError] = React.useState<string>();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit: SubmitHandler<IFormInputs> = async ({ lastKnownMatch, matchmakingAuthCode }) => {
    setLoading(true);

    try {
      const matchmakingAuthResponse = await httpService.post('/settings/steam/matchmakingauth', { matchmakingAuthCode, lastKnownMatch });

      if (matchmakingAuthResponse.ok) {
        enqueueSnackbar('Successfully created matchmaking tokens.', { variant: 'success' });
        setError(null);
        setTimeout(() => {
          close();
        }, 1500);
        return;
      }

      // This will contain specific error messages.
      if (matchmakingAuthResponse.status === 400) {
        const body: IErrorResponse = await matchmakingAuthResponse.json();
        setError(body.message[0]);
      }

      // in case the error was not a 400 or the body of a 400 was empty.
      setLoading(false);
      setError('Failed while authenticating your steam authentication codes. Please verify that the codes are valid.');
    } catch (e) {
      enqueueSnackbar('Oops, something went wrong while sending the data to our servers... Please try again in a few seconds!', { variant: 'error' });
      Sentry.captureException(e);
    }
  };

  return (
    <Container ref={ref}>
      <Header>
        <Title align="left" >Valve matchmaking data</Title>
        <Plus onClick={(): void => { close(); }} pointer rotate={45} />
      </Header>
      {requestError ? <ErrorMessage message={requestError} /> : ''}
      <Description>
        <p>
          In order to have access to your replays, we need your game authentication code and your most recently completed match token.
          These can both be found <a className="highlight" href="https://help.steampowered.com/en/wizard/HelpWithGameIssue/?appid=730&issueid=128" rel="noopener noreferrer" target="_blank">here</a>.
        </p>

        <br />

        <p><strong>Important:</strong> Without this information we will not be able to process your CSGO matchmaking matches.</p>
      </Description >
      <form
        onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={errors.matchmakingAuthCode}
          labelText="Game authentication code"
          loading={isLoading}
          name="matchmakingAuthCode"
          placeholder="7BV9-BD9HN-5RDB"
          ref={register}
        />
        <TextField
          error={errors.lastKnownMatch}
          labelText="Recently completed match token"
          loading={isLoading}
          name="lastKnownMatch"
          placeholder="CSGO-4DA8S-D9AE5-KFAP7-TLZDR-RVMPP"
          ref={register}
        />
        <ActionContainer>
          <Button active={false} onClick={close} variant="text">Skip for now</Button>
          <Button color="primary" isLoading={isLoading}>Confirm codes</Button>
        </ActionContainer>
      </form>
    </Container >
  );
});
