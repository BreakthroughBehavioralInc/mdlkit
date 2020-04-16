import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Box from './Box';
import { RadioChecked, RadioEmpty } from '../icons';

interface RadioProps {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  value?: any;
  size?: number;
}

const Radio = ({ checked, disabled, size, ...rest }: RadioProps) => {
  const radioSize = (size || 24) + 4;

  return (
    <RadioWrap checked={checked} disabled={disabled}>
      <RadioInput
        type="radio"
        {...rest}
        checked={checked}
        disabled={disabled}
      />
      <RadioIcon checked={checked} size={radioSize} />
    </RadioWrap>
  );
};

const RadioWrap = styled(Box)<{ disabled?: boolean; checked?: boolean }>`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover > svg {
    path {
      ${({ disabled, checked, theme }) => {
        if (checked && !disabled) {
          return `fill: ${theme.colors.primary} !important;`;
        }
        return disabled ? null : `fill: ${theme.colors.primary};`;
      }};
    }
  }
`;

const RadioInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
  & ~ svg {
    border: 1px solid transparent;
    border-radius: 50%;
    padding: 2px;
  }
  &:focus {
    box-shadow: none;
    & ~ svg {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
  &:checked ~ svg {
    path {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
  &:disabled ~ svg {
    path {
      fill: ${({ theme }) => theme.colors.borderGray};
    }
  }
`;

const RadioCheckedIcon = styled(RadioChecked)<{ size: number }>`
  vertical-align: middle;
`;

const RadioEmptyIcon = styled(RadioEmpty)<{ size: number }>`
  vertical-align: middle;
`;

interface RadioIconProps {
  checked?: boolean;
  size: number;
}

const RadioIcon: FunctionComponent<RadioIconProps> = ({
  checked,
  size,
}: RadioIconProps) => {
  return checked ? (
    <RadioCheckedIcon size={size} />
  ) : (
    <RadioEmptyIcon size={size} />
  );
};

Radio.displayName = 'Radio';

export default Radio;
