import * as React from 'react';
import { CheckboxContainer, CheckMarkContainer, Container, Label, Ripple, Input } from './style';
import { CheckMark } from 'lib/icons';
import { useSnackbar } from 'notistack';

interface IProps {
  name: string;
  loading?: boolean;
  defaultChecked?: boolean;
  readOnly?: boolean;
  readOnlyMessage?: string;
  labelText?: string;
  labelPosition?: 'left' | 'right';
  onChange?: (e: React.MouseEvent<HTMLDivElement | HTMLLabelElement>) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, IProps>(({
  defaultChecked = false,
  readOnly = false,
  labelText,
  labelPosition = 'right',
  name,
  readOnlyMessage,
  loading = false,
  onChange
}, ref) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isChecked, setChecked] = React.useState<boolean>(defaultChecked);

  React.useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  function onCheck(e: React.MouseEvent<HTMLDivElement | HTMLLabelElement>): void {
    if (readOnly) {
      if (readOnlyMessage) {
        enqueueSnackbar(readOnlyMessage, { variant: 'info' });
      }
      return;
    }

    setChecked(!isChecked);

    // check if parent function is defined
    if (typeof (onChange) === 'function') {
      setTimeout(() => {
        onChange(e);
      }, 100); // timeout because the value change takes a second
    }
  }

  if (loading) {
    return (
      <Container>
        {
          labelPosition === 'left' && labelText ? <Label onClick={onCheck}>{labelText}</Label> : ''
        }
        <CheckboxContainer className="placeholder" isChecked={isChecked} />
        {
          labelPosition === 'right' && labelText ? <Label onClick={onCheck}>{labelText}</Label> : ''
        }
      </Container>
    );
  }

  return (
    <Container>
      {
        labelPosition === 'left' && labelText ? <Label onClick={onCheck}>{labelText}</Label> : ''
      }
      <CheckboxContainer isChecked={isChecked} onClick={onCheck} >
        <CheckMarkContainer isChecked={isChecked}>
          <CheckMark fill="white" scale={.9} />
        </CheckMarkContainer>
        <Ripple className={isChecked ? 'animate' : ''} />
        <Input
          checked={isChecked}
          id={name}
          name={name}
          onChange={(): void => { }} /* required to make it controlled */
          ref={ref}
          type="checkbox"
        />
      </CheckboxContainer>
      {
        labelPosition === 'right' && labelText ? <Label onClick={onCheck}>{labelText}</Label> : ''
      }
    </Container>
  );
});
