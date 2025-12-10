import React, { useRef, useState } from 'react';
import { Input } from '../Input/Index';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Flex from '../Flex/Index';
import { formatDateString } from '../../../utils/validating';
import { StyledCalendarInputWrapper } from './styled';

export const formattedDateValue = (dateValue: string) => {
  if (!dateValue || dateValue === '') {
    return '';
  }

  const [year, month, day] = dateValue.split('-');
  return `${month}/${day}/${year}`;
};

export const formatDateInput = (inputValue: string) => {
  const cleaned = inputValue.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);

  if (!match) return inputValue;

  const part1 = match[1] || '';
  const part2 = match[2] ? `/${match[2]}` : '';
  const part3 = match[3] ? `/${match[3]}` : '';

  return `${part1}${part2}${part3}`;
};

interface Props {
  onChange: (a?: any, any?: any) => any;
  name: string;
  defaultValue?: string;
  errorMessage?: string | React.ReactNode;
  minDate?: string;
  icon?: string;
  placeholder?: string;
  className?: string;
  max?: string;
  onBlur?: () => any;
  disabled?: boolean;
  /** Accessible label for screen readers (e.g., "Date of birth") */
  ariaLabel?: string;
}

const Datepicker = ({
  onChange,
  name,
  defaultValue = '',
  errorMessage,
  minDate,
  icon,
  placeholder = 'mm/dd/yyyy',
  className,
  max,
  onBlur,
  disabled,
  ariaLabel,
  ...props
}: Props) => {
  const [formattedDate, setFormattedDate] = useState(defaultValue);
  const [nativeDate, setNativeDate] = useState(
    formatDateString(defaultValue, 'YYYY-MM-DD')
  );
  const [isFocused, setIsFocused] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const hiddenDateRef = useRef<any>(null);
  const visibleDateRef = useRef<any>(null);

  const handleVisibleInputChange = e => {
    let inputValue = e.target.value;
    inputValue = formatDateInput(inputValue).slice(0, 10);
    setFormattedDate(inputValue);

    const dateValue = formatDateString(inputValue, 'YYYY-MM-DD');
    if (dateValue && !Number.isNaN(Date.parse(dateValue))) {
      setNativeDate(dateValue);

      onChange({ target: { value: inputValue } }, name);
    }
  };

  const handleDatePickerChange = e => {
    const dateValue = e.target.value;
    if (!dateValue) {
      setFormattedDate('');
      setNativeDate('');
      onChange({ target: { value: '' } }, name);
      return;
    }
    setNativeDate(dateValue);

    const formatted = formattedDateValue(dateValue);
    setFormattedDate(formatted);

    onChange({ target: { value: formatted } }, name);
  };

  const openDatePicker = () => {
    if (hiddenDateRef.current && !isPickerOpen) {
      hiddenDateRef.current.showPicker();
      setIsPickerOpen(true);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClick = () => {
    openDatePicker();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Open picker on Enter or Space key
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openDatePicker();
    }
  };

  const handleBlur = () => {
    if (!nativeDate) {
      setIsFocused(false);
      setIsPickerOpen(false);
      onBlur?.();
      return;
    }
    setFormattedDate(formattedDateValue(nativeDate));
    setIsFocused(false);
    setIsPickerOpen(false);
    onBlur?.();
  };

  const closePicker = () => {
    if (hiddenDateRef.current) {
      hiddenDateRef.current.style.display = 'none';
      setIsPickerOpen(false);
      setTimeout(() => {
        if (hiddenDateRef.current) {
          hiddenDateRef.current.style.display = 'inline-block';
        }
      }, 0);
    }
  };

  useOutsideClick({
    ref: hiddenDateRef,
    callback: closePicker,
    active: isFocused,
    triggerRef: visibleDateRef,
  });

  return (
    <Flex direction="column">
      <StyledCalendarInputWrapper>
        <Input
          ref={visibleDateRef}
          value={formattedDate}
          onFocus={handleFocus}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onChange={handleVisibleInputChange}
          onBlur={handleBlur}
          iconLeft={icon}
          placeholder={placeholder}
          maxLength={10}
          disabled={disabled}
          className={`${className} ${errorMessage ? 'input-error' : ''} `}
          errorMessage={errorMessage}
          role="combobox"
          aria-haspopup="dialog"
          aria-expanded={isPickerOpen}
          aria-label={
            ariaLabel
              ? `${ariaLabel}, date picker, format month month slash day day slash year year year year`
              : 'Date picker, format month month slash day day slash year year year year'
          }
          autoComplete="off"
          {...props}
        />
      </StyledCalendarInputWrapper>

      <input
        type="date"
        ref={hiddenDateRef}
        value={nativeDate}
        onChange={handleDatePickerChange}
        tabIndex={-1}
        aria-hidden="true"
        min={minDate}
        max={max}
        disabled={disabled}
        style={{
          display: 'inline-block',
          width: '0px',
          height: '0px',
          border: 'none',
        }}
      />
    </Flex>
  );
};
Datepicker.displayName = 'Datepicker';

export default Datepicker;
