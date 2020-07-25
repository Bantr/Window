import * as React from 'react';
import styled from 'styled-components';
import { TextField as TextFieldComponent } from './text';
import { NumberField as NumberFieldComponent } from './number';
import { useForm, SubmitHandler } from 'react-hook-form';
import { WeaponAk47 } from 'lib/icons';

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  h1{
    margin-bottom: 20px;
  }
`;

export default {
  component: [TextFieldComponent, NumberFieldComponent],
  title: 'Field '
};

interface IFormInputs {
  default: string;
  readOnly: string;
  required: string;
}

// TODO: should be worked out.
export const TextInputField = (): React.ReactNode => {
  const { register, handleSubmit, errors, trigger } = useForm<IFormInputs>({ mode: 'all' });
  const onSubmit: SubmitHandler<IFormInputs> = (/*data, event*/) => { };
  // async set https://github.com/react-hook-form/react-hook-form/blob/master/examples/asyncSetFormValues.tsx

  React.useEffect(() => {
    trigger('required');
  }, []);

  return (
    <Container>
      <h1>Example Text Input Field Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldComponent labelText="Default field" name="default-input" placeholder="default field" />
        <TextFieldComponent labelText="Loading field" loading name="loading-default-field" placeholder="loading field" />
        <TextFieldComponent labelText="Read only field" name="read-only-input" placeholder="readonly field" readOnly />
        <TextFieldComponent icon={<WeaponAk47 />} labelText="Field with icon" name="read-only-field" placeholder="field with icon" />
        <TextFieldComponent error={errors.required} labelText="Required field" name="required" placeholder="field with error example" ref={register({ required: ('this is required.') })} />
        <NumberFieldComponent labelText="Number field" name="number-field" placeholder="number field" />
        <input type="submit" />
      </form>
    </Container>
  );
};
