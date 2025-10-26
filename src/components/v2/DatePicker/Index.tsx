import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Input } from '../Input/Index';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Flex from '../Flex/Index';
import { formatDateString } from '../../../utils/validating';

const StyledCalendarInputWrapper = styled.div`
  width: calc(100% - 4px);
  margin: 2px;

  input[type='date'] {
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #333333;
    height: unset;
    border: none;
    padding: 0;
  }

  input::-webkit-calendar-picker-indicator {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;

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
  ...props
}: Props) => {
  const [formattedDate, setFormattedDate] = useState(defaultValue);
  const [nativeDate, setNativeDate] = useState(
    formatDateString(defaultValue, 'YYYY-MM-DD')
  );
  const [isFocused, setIsFocused] = useState(false);
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

  const handleFocus = () => {
    if (hiddenDateRef.current) {
      hiddenDateRef.current.showPicker();
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    if (!nativeDate) {
      setIsFocused(false);
      onBlur?.();
      return;
    }
    setFormattedDate(formattedDateValue(nativeDate));
    setIsFocused(false);
    onBlur?.();
  };

  const closePicker = () => {
    if (hiddenDateRef.current) {
      hiddenDateRef.current.style.display = 'none';
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
          onChange={handleVisibleInputChange}
          onBlur={handleBlur}
          iconRight={icon}
          placeholder={placeholder}
          maxLength={10}
          disabled={disabled}
          className={`${className} ${errorMessage ? 'input-error' : ''} `}
          errorMessage={errorMessage}
          {...props}
        />
      </StyledCalendarInputWrapper>

      <input
        type="date"
        ref={hiddenDateRef}
        value={nativeDate}
        onChange={handleDatePickerChange}
        tabIndex={-1}
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

export default Datepicker;
