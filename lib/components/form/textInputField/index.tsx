import * as React from 'react';
import { Container, LabelContainer, Label, InputContainer, Input, ErrorContainer, Error } from './style';

interface IProps {
  validation: () => {};
  required: boolean;
  readOnly: boolean;
  labelText: string;
  placeholder?: string;
}

export const TextInputField: React.FC<IProps> = ({ labelText }) => {
  // do some shit here
  const errorMessage = 'I am the error';

  return (
    <Container>
      <LabelContainer>
        <Label>{labelText}</Label>
      </LabelContainer>
      <InputContainer>
        <Input />
      </InputContainer>
      <ErrorContainer>
        <Error>{errorMessage}</Error>
      </ErrorContainer>
    </Container>
  );
};
