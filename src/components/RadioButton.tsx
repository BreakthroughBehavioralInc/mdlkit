import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { hiddenInput } from './forms/Styles';
import Box from './Box';

const RadioButtonStyle = styled(Box)`
  width: 100%;
  height: 100%;
  text-align: center;
  border-width: 1px;
  border-style: solid;
`;

const RadioWrap = styled.div<{ checked?: boolean; disabled?: boolean }>`
  width: 100%;
  height: 100%;
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray};
  > ${RadioButtonStyle} {
    border-color: ${themeGet('colors.borderGray')};
  }

  &:hover {
    ${props =>
      props.checked || props.disabled
        ? null
        : `color: ${props.theme.colors.primary};`};

    > ${RadioButtonStyle} {
      border: 1px solid ${themeGet('colors.primary')};
    }
  }
`;

const RadioInput = styled.input`
  ${hiddenInput}

  &:focus {
    box-shadow: none;

    & ~ ${RadioButtonStyle} {
      border-color: ${themeGet('colors.primary')};
    }
  }
  &:checked ~ ${RadioButtonStyle} {
    color: ${themeGet('colors.white')};
    background: ${themeGet('colors.primary')};
  }
  &:disabled ~ ${RadioButtonStyle} {
    color: ${themeGet('colors.borderGray')};
  }
`;

interface RadioButtonProps {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  children?: any;
}

const RadioButton: FunctionComponent<RadioButtonProps> = ({
  id,
  checked,
  disabled,
  label,
  ...rest
}: RadioButtonProps) => (
  <RadioWrap checked={checked} disabled={disabled}>
    <RadioInput
      id={id}
      type="radio"
      disabled={disabled}
      {...rest}
      checked={checked}
    />
    <RadioButtonStyle py="sm" data-name="radio-button">
      {label}
    </RadioButtonStyle>
  </RadioWrap>
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;
