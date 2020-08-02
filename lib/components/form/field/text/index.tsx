import * as React from 'react';
import { Container, LabelContainer, Label, InputContainer, Input, ErrorContainer, Error } from '../field/style';
import { IInputDefaultProps } from '../field/defaultProps';

export const TextField = React.forwardRef<HTMLInputElement, IInputDefaultProps>(({ labelText, placeholder, name, color = 'primary', error, icon, readOnly, loading = false }, ref) => {
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
          autoComplete="off"
          color={color}
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
