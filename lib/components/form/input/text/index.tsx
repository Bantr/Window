import * as React from 'react';
import { Container, LabelContainer, Label, InputContainer, Input, ErrorContainer, Error } from './style';
import { FieldError } from 'react-hook-form';

interface IProps {
  name: string;
  icon?: React.ReactNode;
  register?: () => {};
  readOnly?: boolean;
  labelText: string;
  placeholder: string;
  error?: FieldError;
  loading?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, IProps>(({ labelText, placeholder, name, error, icon, readOnly, loading = false }, ref) => {
  const [showError, setShowError] = React.useState(false);

  if (loading) {
    return (
      <Container>
        <LabelContainer>
          <Label htmlFor={name} showError={error ? true : false}>{labelText}</Label>
        </LabelContainer>
        <InputContainer className="placeholder" />
      </Container>
    );
  }

  return (
    <Container>
      <LabelContainer>
        <Label htmlFor={name} showError={error ? true : false}>{labelText}</Label>
      </LabelContainer>
      <InputContainer>
        {icon ? icon : null}
        <Input
          hasError={error ? true : false}
          hasIcon={icon ? true : false}
          id={name}
          name={name}
          onBlur={(): void => { setShowError(false); }}
          onFocus={(): void => { setShowError(true); }}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
        />
      </InputContainer>
      {
        error ?
          <ErrorContainer showError={showError}>
            <Error>{error.message}</Error>
          </ErrorContainer> : null
      }
    </Container >
  );
});
