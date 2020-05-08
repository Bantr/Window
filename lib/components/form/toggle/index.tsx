import * as React from 'react';
import { Inner, Label, Ripple, Switch, ToggleComponent, ToggleContainer } from './style';

interface IProps {
  name: string;
  text?: string; // TODO: should become required
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export const Toggle: React.FC<IProps> = ({ name, text, defaultChecked = false, onChange, disabled = false }) => {
  const [isChecked, setChecked] = React.useState(defaultChecked);

  function onCheck(): void {
    setChecked(!isChecked);
    if (typeof onChange === 'function') onChange(isChecked);
  }

  return (
    <ToggleContainer>
      <ToggleComponent
        disabled={disabled}
        id={name}
        name={name}
        onChange={onCheck}
        type="checkbox"
      />
      <Label htmlFor={name}>
        <Inner isChecked={isChecked} />
        <Switch isChecked={isChecked}>
          <Ripple className={isChecked ? 'animate' : ''} />
        </Switch>
        {text}
      </Label>
    </ToggleContainer>
  );
};
