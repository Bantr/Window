import * as React from 'react';
import { useSnackbar } from 'notistack';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { joiResolver } from '@hookform/resolvers';
import { REGEX } from '@bantr/lib/dist/constants';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Joi from 'joi';
import * as Sentry from '@sentry/react';

import { setCustomErrorMessages } from 'lib/helpers';
import { httpService } from 'lib/services';
import { Title, TextField, Paragraph } from 'lib/components';

import { Container, FieldActionContainer } from './style';

const schema = Joi.object({
  lastKnownMatch: Joi
    .string()
    .regex(REGEX.lastKnownMatch)
    .error((errors) => (setCustomErrorMessages('recently completed match token', errors))),
  matchmakingAuthCode: Joi
    .string()
    .regex(REGEX.matchAuthCode)
    .error((errors) => (setCustomErrorMessages('match authentication code', errors)))
});

interface IFormInputs {
  lastKnownMatch: string;
  matchmakingAuthCode: string;
}

const GET_MATCHMAKING_CODES = gql`
  query GET_MATCHMAKING_CODES {
    user {
      settings {
        lastKnownMatch
        matchAuthCode
      }
  }
}
`;

export const MatchMaking: React.FC = () => {
  const { register, handleSubmit, errors, setValue, getValues } = useForm<IFormInputs>({ resolver: joiResolver(schema), mode: 'onChange' });
  const [lastKnownMatchReadOnly, setLastKnownMatchReadOnly] = React.useState<boolean>(false);
  const [matchmakingAuthReadOnly, setmatchmakingAuthReadOnly] = React.useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const { loading, data, error } = useQuery(GET_MATCHMAKING_CODES);

  React.useEffect(() => {
    if (error) {
      // should show an error
    }
    if (data) {
      setValue('lastKnownMatch', data.user[0].settings.lastKnownMatch || '');
      setValue('matchmakingAuthCode', data.user[0].settings.matchAuthCode || '');
      const values = getValues();

      if (values.lastKnownMatch !== '') {
        setLastKnownMatchReadOnly(true);
      }
      if (values.matchmakingAuthCode !== '') {
        setmatchmakingAuthReadOnly(true);
      }
    }
  }, [data, error]);

  const onSubmit: SubmitHandler<IFormInputs> = async ({ lastKnownMatch, matchmakingAuthCode }) => {
    try {
      const matchmakingAuthResponse = await httpService.post('/settings/steam/matchmakingauth', { matchmakingAuthCode, lastKnownMatch });

      if (matchmakingAuthResponse.ok) {
        enqueueSnackbar('Successfully created matchmaking tokens.', { variant: 'success' });
        setTimeout(() => {
          close();
        }, 1500);
        return;
      }

      enqueueSnackbar('Something went wrong.', { variant: 'error' });
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  return (
    <Container>
      <Title size="large" type="h4">Valve Matchmaking</Title>
      <Paragraph>
        In order to have access to your replays, we need your game authentication code and your most recently completed match token. <br />
        These can both be found <a className="highlight" href="https://help.steampowered.com/en/wizard/HelpWithGameIssue/?appid=730&issueid=128" rel="noopener noreferrer" target="_blank">here</a>.
      </Paragraph>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          color="secondary"
          error={errors.matchmakingAuthCode}
          labelText="Game authentication code"
          loading={loading}
          name="matchmakingAuthCode"
          placeholder="7BV9-BD9HN-5RDB"
          readOnly={matchmakingAuthReadOnly}
          ref={register}
        />
        <FieldActionContainer></FieldActionContainer>
        <TextField
          color="secondary"
          error={errors.lastKnownMatch}
          labelText="Recently completed match token"
          loading={loading}
          name="lastKnownMatch"
          placeholder="CSGO-4DA8S-D9AE5-KFAP7-TLZDR-RVMPP"
          readOnly={lastKnownMatchReadOnly}
          ref={register}
        />
        <FieldActionContainer></FieldActionContainer>

      </form>
    </Container>
  );
};
