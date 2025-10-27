import React, { useState } from 'react';
import { CrossOutlineIcon } from '../globals';
import {
  Wrapper,
  InputContainer,
  StyledLabel,
  StyledInput,
  IconImage,
  ClearButton,
  ErrorMessage,
} from './styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  iconLeft?: string;
  iconRight?: string;
  iconSize?: number;
  clearButton?: boolean;
  label?: string | React.ReactNode;
  errorMessage?: string | React.ReactNode;
  required?: boolean;
  showErrorMessage?: boolean;
  initialValue?: string | undefined;
}

const TextLabel = ({
  label,
  required,
  tooltip,
  error,
  className,
}: {
  label?: string | React.ReactNode;
  tooltip?: React.ReactNode;
  required?: boolean;
  error?: boolean;
  className?: string;
}): JSX.Element => (
  <StyledLabel
    style={{ marginBottom: '4px' }}
    className={`no-bold kit-custom-label ${className}`}
  >
    {label as any}
    {required ? <span style={{ color: error ? '#DC3545' : '' }}> *</span> : ''}
    {tooltip as any}
  </StyledLabel>
);

/**
 * A customizable input component with support for icons, clear button, labels, and error messages.
 *
 * @component
 * @param {Object} props - The props for the input component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.iconLeft] - The URL of the icon to display on the left side of the input.
 * @param {string} [props.iconRight] - The URL of the icon to display on the right side of the input.
 * @param {number} [props.iconSize=24] - The size of the icons.
 * @param {boolean} [props.clearButton=false] - Whether to display a clear button.
 * @param {string | React.ReactNode} [props.label] - The label text or element for the input.
 * @param {string | React.ReactNode} [props.errorMessage] - The error message text or element to display.
 * @param {CSSProperties} [props.style] - Additional styles for the wrapper div.
 * @param {boolean} [props.required] - Whether the input is required.
 * @param {function} [props.onChange] - Callback function triggered when the input value changes.
 * @param {boolean} [props.showErrorMessage=true] - Whether to display the error message.
 * @param {string} [props.initialValue=''] - The initial value of the input.
 * @param {React.Ref<HTMLInputElement>} ref - Ref for the input element.
 * @returns {React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>} The input component.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      iconLeft,
      iconRight,
      iconSize = 24,
      clearButton = false,
      label,
      errorMessage,
      style,
      required,
      onChange,
      showErrorMessage = true,
      initialValue = '',
      name,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      capture: _capture,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      children: _children,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(initialValue);

    const handleClear = () => {
      setValue('');
      if (onChange) {
        onChange({
          ...props,
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    const handleKeyOnClearButton = e => {
      if (e.key === 'Enter') {
        const textInput = document.querySelector(
          '.search-text-input'
        ) as HTMLElement;
        if (textInput) {
          e.preventDefault();
          handleClear();
          textInput.focus();
        }
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <Wrapper className={className} style={style}>
        {label &&
          (typeof label === 'string' ? (
            <TextLabel
              error={Boolean(errorMessage)}
              label={label}
              required={required}
            />
          ) : (
            (label as any)
          ))}
        <InputContainer
          className="input-container"
          error={Boolean(errorMessage)}
        >
          {iconLeft && (
            <IconImage src={iconLeft} alt="Left Icon" iconSize={iconSize} />
          )}
          <StyledInput
            type={type}
            ref={ref}
            value={value}
            onChange={handleChange}
            name={name}
            className="search-text-input"
            {...props}
          />
          {clearButton && (
            <ClearButton
              iconSize={iconSize}
              onClick={handleClear}
              visible={Boolean(value)}
              onKeyDown={handleKeyOnClearButton}
            >
              <CrossOutlineIcon />
            </ClearButton>
          )}
          {!clearButton && iconRight && (
            <IconImage src={iconRight} alt="Right Icon" iconSize={iconSize} />
          )}
        </InputContainer>
        {errorMessage &&
          showErrorMessage &&
          (typeof errorMessage === 'string' ? (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          ) : (
            (errorMessage as any)
          ))}
      </Wrapper>
    );
  }
);

export { Input, TextLabel };
