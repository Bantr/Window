import * as React from 'react';
import { CheckboxContainer, CheckmarkContainer, Container, Label, Ripple } from './style';
import { Checkmark } from 'lib/icons';

interface IProps {
  defaultChecked?: boolean;
  readOnly?: boolean;
  label?: string;
  onChange?: (e: React.MouseEvent<HTMLDivElement | HTMLLabelElement>) => void;
}

export const Checkbox: React.FC<IProps> = ({
  defaultChecked = false,
  readOnly = false,
  label,
  onChange
}) => {
  const [isChecked, setChecked] = React.useState(defaultChecked);

  function onCheck(e: React.MouseEvent<HTMLDivElement | HTMLLabelElement>): void {
    if (readOnly) { return; }
    setChecked(!isChecked);

    // check if parent function is defined
    if (typeof (onChange) === 'function') {
      onChange(e);
    }
  }

  return (
    <Container className={isChecked ? 'checked' : ''}>
      <CheckboxContainer isChecked={isChecked} onClick={onCheck} >
        <CheckmarkContainer isChecked={isChecked}>
          <Checkmark fill="white" scale={0.8} />
        </CheckmarkContainer>
        <Ripple className={isChecked ? 'animate' : ''} />
      </CheckboxContainer>
      {
        label ? <Label onClick={onCheck}>{label}</Label> : ''
      }
    </Container>
  );
};
