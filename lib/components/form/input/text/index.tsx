import * as React from 'react';
import { Container, LabelContainer, Label, InputContainer, Input, ErrorContainer, Error } from './style';
import { FieldError } from 'react-hook-form';

interface IProps {
  name: string;
  register?: () => {};
  readOnly?: boolean;
  labelText: string;
  placeholder: string;
  error?: FieldError;
}

export const TextInputField = React.forwardRef<HTMLInputElement, IProps>(({ labelText, placeholder, name, error }, ref) => {
  const [showError, setShowError] = React.useState(false);

  return (
    <Container>
      <LabelContainer>
        <Label htmlFor={name} showError={error ? true : false}>{labelText}</Label>
      </LabelContainer>
      <InputContainer>
        <Input
          id={name}
          name={name}
          onBlur={(): void => { setShowError(false); }}
          onFocus={(): void => { setShowError(true); }}
          placeholder={placeholder}
          ref={ref}
        />
      </InputContainer>
      {
        error ?
          <ErrorContainer showError={showError}>
            <Error>{error.message}</Error>
          </ErrorContainer> : null
      }
    </Container>
  );
});
