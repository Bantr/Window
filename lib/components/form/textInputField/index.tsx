import * as React from 'react';
import { Container, LabelContainer, Label, InputContainer, Input, ErrorContainer, Error } from './style';
import { FieldError } from 'react-hook-form';

interface IProps {
  name: string; // This is the ID React formik uses to identify a component.
  register?: () => {};
  required?: boolean;
  readOnly?: boolean;
  labelText: string;
  placeholder: string;
  error?: FieldError;
}

export const TextInputField = React.forwardRef<HTMLInputElement, IProps>(({ labelText, placeholder, name, error }, ref) => {
  // do some shit here

  console.log('this is the error', error);

  return (
    <Container>
      <LabelContainer>
        <Label htmlFor={name}>{labelText}</Label>
      </LabelContainer>
      <InputContainer>
        <Input id={name} name={name} placeholder={placeholder} ref={ref} />
      </InputContainer>
      {
        error ? <ErrorContainer>
          <Error>{error.message}</Error>
        </ErrorContainer> : null
      }
    </Container>
  );
});
