import * as React from 'react';
import { Container, Error, ErrorContainer, Input, InputContainer, Label, LabelContainer } from '../input/style';
import { ChangeNumberContainer } from './style';
import { IInputDefaultProps } from '../input/defaultProps';
import { Arrow } from 'lib/icons';

export const NumberField = React.forwardRef<HTMLInputElement, IInputDefaultProps>(({ labelText, placeholder, name, color = 'primary', error, icon, loading, readOnly }, ref) => {
  const [showError, setShowError] = React.useState(false);
  const [value, setValue] = React.useState<any>();

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => { if (!error) { setValue(e.currentTarget.value); } }}
          onFocus={(): void => { setShowError(true); }}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          value={value ? value : ''}
        />
        <ChangeNumberContainer>
          <Arrow className="add" onClick={(): void => { if (!error) { setValue(parseInt(value) + 1); } }} pointer rotate={-90} />
          <Arrow className="substract" onClick={(): void => { if (!error) { setValue(parseInt(value) - 1); } }} pointer rotate={90} />
        </ChangeNumberContainer>
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
