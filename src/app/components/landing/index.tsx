import * as React from 'react';
import { routingService } from 'lib/services';
import { bantrSettings } from 'lib/settings';
import appTemp from '../../assets/images/app-temp.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextInputField } from 'lib/components';

import {
  Container,
  HeroTitle,
  HeroLead,
  StyledButton,
  WindowContainer,
  Window
} from './style';

interface IFormInputs {
  default: string;
  readOnly: string;
  required: string;
}

export const Body: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInputs>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<IFormInputs> = (data, event) => {
    console.log('data', data);
    console.log('event', event);
  };
  // async set https://github.com/react-hook-form/react-hook-form/blob/master/examples/asyncSetFormValues.tsx

  return (
    <Container>
      <HeroTitle>
        Extensive
        <span> ban </span>
      notifications.
      </HeroTitle>
      <HeroLead>Bantr tracks all the players you played with and against.</HeroLead>
      <StyledButton
        onClick={(): void => { routingService.navigateExternal(`${bantrSettings.apiRoot}/auth/steam?redirectTo=${window.location.protocol}//${window.location.hostname}/csgo`); }}
        variant="outline">Sign up here -&gt;</StyledButton>
      <WindowContainer>
        <Window>
          <img alt="Preview app temp" src={appTemp} />
        </Window>
      </WindowContainer>

      <div>
        <h1>Example Text Input Field Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInputField labelText="Default field" name="default-input" placeholder="This is the placeholder" />
          <TextInputField labelText="Read only field" name="read-only-input" placeholder="This is the placeholder" readOnly />
          <TextInputField error={errors.required} labelText="Required field" name="required" placeholder="This is the placeholder" ref={register({ required: ('this is required') })} />
          <input type="submit" />
        </form>
      </div>
    </Container >
  );
};
