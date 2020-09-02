import * as React from 'react';
import { useSnackbar } from 'notistack';
import { useQuery } from '@apollo/client';
import { joiResolver } from '@hookform/resolvers';
import { REGEX } from '@bantr/lib/dist/constants';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Joi from 'joi';
import GET_MATCHMAKING_CODES from 'lib/graphql/queries/getMatchMakingCodes.gql';
import * as Sentry from '@sentry/react';

import { setCustomErrorMessages } from 'lib/helpers';
import { httpService } from 'lib/services';
import { Button, Paragraph, Title, TextField } from 'lib/components';

import { Container, Inner, ActionContainer } from './style';

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

export const MatchMaking: React.FC = () => {
  const { register, handleSubmit, errors, setValue, getValues, formState } = useForm<IFormInputs>({ resolver: joiResolver(schema), mode: 'onChange' });
  const [fieldIsEmpty, setFieldIsEmpty] = React.useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const { loading, data, error } = useQuery(GET_MATCHMAKING_CODES);

  React.useEffect(() => {
    if (error) {
      // should show an error
    }
    if (data) {
      setValue('lastKnownMatch', data.user[0].settings.lastKnownMatch || '', { shouldValidate: true });
      setValue('matchmakingAuthCode', data.user[0].settings.matchAuthCode || '', { shouldValidate: true });
      const values = getValues();
      if (values.lastKnownMatch === '' || values.matchmakingAuthCode === '') {
        setFieldIsEmpty(true);
      }
    }
  }, [data, error]);

  const onSubmit: SubmitHandler<IFormInputs> = async ({ lastKnownMatch, matchmakingAuthCode }) => {
    if (!formState.isDirty) {
      return;
    }

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
      <Title size="medium" type="h4">Valve Matchmaking</Title>
      <Paragraph>
        In order to have access to your replays, we need your game authentication code and your most recently completed match token. <br />
        These can both be found <a className="highlight" href="https://help.steampowered.com/en/wizard/HelpWithGameIssue/?appid=730&issueid=128" rel="noopener noreferrer" target="_blank">here</a>.
      </Paragraph>
      <Inner hasError={fieldIsEmpty}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={errors.matchmakingAuthCode}
            isSecret
            labelText="Game authentication code"
            loading={loading}
            name="matchmakingAuthCode"
            placeholder="7BV9-BD9HN-5RDB"
            ref={register}
          />
          <TextField
            error={errors.lastKnownMatch}
            labelText="Recently completed match token"
            loading={loading}
            name="lastKnownMatch"
            placeholder="CSGO-4DA8S-D9AE5-KFAP7-TLZDR-RVMPP"
            ref={register}
          />
          <ActionContainer>
            <Button active={formState.isValid && formState.isDirty} color="primary" >Save</Button>
          </ActionContainer>
        </form>
      </Inner>
    </Container>
  );
};
