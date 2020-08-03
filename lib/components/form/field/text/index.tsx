import * as React from 'react';
import { Container, LabelContainer, Label, InputContainer, Input, ErrorContainer, Error } from '../field/style';
import { IInputDefaultProps } from '../field/defaultProps';
import { EyeContainer } from './style';
import { Eye, EyeOff } from 'lib/icons';

interface IProps extends IInputDefaultProps {
  isSecret?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, IProps>(({ labelText, placeholder, name, color = 'primary', error, icon, readOnly, loading = false, isSecret = false }, ref) => {
  const [showError, setShowError] = React.useState(false);
  const [showInput, setShowInput] = React.useState(!isSecret);

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
          type={isSecret && !showInput ? 'password' : 'text'}
        />
      </InputContainer>
      {isSecret
        ?
        <EyeContainer>
          {showInput ?
            <EyeOff onClick={(): void => { setShowInput(false); }} pointer />
            :
            <Eye onClick={(): void => { setShowInput(true); }} pointer />
          }
        </EyeContainer>
        : null}
      {
        error ?
          <ErrorContainer showError={showError}>
            <Error>{error.message}</Error>
          </ErrorContainer> : null
      }
    </Container >
  );
});
