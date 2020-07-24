import * as React from 'react';
import styled from 'styled-components';
import { TextInputField as TextInputFieldComponent } from '.';
import { useForm, SubmitHandler } from 'react-hook-form';

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
`;

export default {
  component: TextInputFieldComponent,
  title: 'Field '
};

interface IFormInputs {
  default: string;
  readOnly: string;
  required: string;
}

// TODO: should be worked out.
export const TextInputField = (): JSX.Element => {
  const { register, handleSubmit, errors, trigger } = useForm<IFormInputs>({ mode: 'all' });
  const onSubmit: SubmitHandler<IFormInputs> = (data, event) => { };
  // async set https://github.com/react-hook-form/react-hook-form/blob/master/examples/asyncSetFormValues.tsx

  React.useEffect(() => {
    trigger('required');
  }, []);

  return (
    <Container>
      <h1>Example Text Input Field Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInputFieldComponent labelText="Default field" name="default-input" placeholder="This is the placeholder" />
        <TextInputFieldComponent labelText="Read only field" name="read-only-input" placeholder="This is the placeholder" readOnly />
        <TextInputFieldComponent error={errors.required} labelText="Required field" name="required" placeholder="This is the placeholder" ref={register({ required: ('this is required.') })} />
        <input type="submit" />
      </form>
    </Container>
  );
};
