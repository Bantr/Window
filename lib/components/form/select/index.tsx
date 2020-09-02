import * as React from 'react';
import { ReferenceContainer, PopperContainer, Option, ArrowContainer } from './style';
import { usePopper } from 'react-popper';
import { useOutsideAlerter } from 'lib/hooks';
import { stringService } from 'lib/services';
import { ArrowBig as Arrow } from 'lib/icons';

interface IProps {
  name: string;
  placeholder?: string;
  defaultSelectedValue?: string;
  values: string[];
  loading?: boolean;
  readOnly?: boolean
  onChange?: (val: string) => void;
  onHover?: (val: string) => void;
  isPrimary?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, IProps>(({
  readOnly = false,
  onHover,
  loading = false,
  isPrimary = true,
  placeholder = 'Select an option',
  name,
  defaultSelectedValue = null,
  values,
  onChange
}, ref) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [popperElement, setPopperElement] = React.useState(null);
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState<string>(defaultSelectedValue);
  const containerRef = React.useRef<HTMLDivElement>();
  useOutsideAlerter(containerRef, (): void => {
    setOpen(false);
  });

  const { styles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      strategy: 'absolute',
      placement: 'bottom-start'
    }
  );

  const selectValue = React.useCallback((value: string) => {
    if (selectedValue !== value) { // should not fire if the same value is selected as before.
      if (typeof onChange === 'function') { onChange(value); }
      setSelectedValue(value);
    }
    setOpen(false);
  }, [selectedValue]);

  if (loading) {
    return (
      <div className="placeholder" />
    );
  }

  return (
    <div ref={containerRef}>
      <ReferenceContainer isOpen={open} isPrimary={isPrimary} onClick={(): void => setOpen(!open)} ref={setReferenceElement}>
        <span>{selectedValue !== null ? stringService.capitalize(selectedValue) : placeholder}</span>
        <ArrowContainer isOpen={open}>
          <Arrow pointer />
        </ArrowContainer>
      </ReferenceContainer>
      <PopperContainer
        isOpen={open}
        isPrimary={isPrimary}
        minWidth={containerRef?.current?.clientWidth}
        ref={setPopperElement}
        style={styles.popper} {...attributes.popper}>
        { /* Adds support for usage in forms, not tested yet. Probably a race condition with react-hooks-form because of the useState */}
        <select name={name} ref={ref ? ref : null} value={selectedValue}></select>
        {
          values.map((val: string) => (
            <Option
              isPrimary={isPrimary}
              key={`${val}-${name}`}
              onClick={(): void => readOnly ? null : selectValue(val)}
              onMouseEnter={(): void => typeof onHover === 'function' ? onHover(val) : null}
              selected={selectedValue === val ? true : false}
            >
              {stringService.capitalize(val)}
            </Option>
          ))
        }
      </PopperContainer>
    </div>
  );
});
