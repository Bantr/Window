import * as React from 'react';
import { Container, ActionContainer, Header, Description } from './style';
import { TextField, Title, Button, ErrorMessage } from 'lib/components';
import Joi from 'joi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers';
import { Plus } from 'lib/icons';
import { httpService } from 'lib/services';
import { useSnackbar } from 'notistack';

const schema = Joi.object({
  lastKnownMatch: Joi.string().regex(/^/).required,
  matchAuthCode: Joi.string().regex(/^/).required
});

interface IProps {
  close: () => void;
}
interface IFormInputs {
  lastKnownMatch: string;
  matchAuthCode: string;
}

export const SteamAuthModal = React.forwardRef<HTMLDivElement, IProps>(({ close }, ref) => {
  const { register, handleSubmit, errors } = useForm<IFormInputs>({ resolver: joiResolver(schema) });
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [requestError, setError] = React.useState<string>();
  const { enqueueSnackbar } = useSnackbar();

  //https://help.steampowered.com/en/wizard/HelpWithGameIssue/?appid=730&issueid=128

  const onSubmit: SubmitHandler<IFormInputs> = async ({ lastKnownMatch, matchAuthCode }) => {
    setLoading(true);
    const matchAuthCodeResponse = await httpService.post('settings/steam/matchAuthCode', matchAuthCode);
    const lastKnownMatchResponse = await httpService.post('settings/steam/lastKnownMatch', lastKnownMatch);

    if (matchAuthCodeResponse.ok && lastKnownMatchResponse.ok) {
      enqueueSnackbar('Steam successfully authenticated', { variant: 'success' });
      close();
    }
    setLoading(false);
    setError('Failed while authenticating Steam. Please verify if the keys are valid.');
  };

  return (
    <Container ref={ref}>
      <Header>
        <Title align="left" >Steam authentication</Title>
        <Plus onClick={(): void => { close(); }} pointer rotate={45} />
      </Header>
      {requestError ? <ErrorMessage message={requestError} /> : ''}
      <Description>
        this is the first description
      </Description>
      <form
        onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={errors.lastKnownMatch}
          labelText="Recently completed match token"
          name="lastKnownMatch"
          placeholder=""
          ref={register}
        />
        <TextField
          error={errors.matchAuthCode}
          labelText="Game Authentication code"
          name="matchAuthCode"
          placeholder="auth code"
          ref={register}
        />
        <ActionContainer>
          <Button active={false} onClick={(): void => { close(); }} variant="text">Skip for now</Button>
          <Button color="primary" isLoading={isLoading}>Confirm codes</Button>
        </ActionContainer>
      </form>
    </Container>
  );
});
