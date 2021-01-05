import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Box from './Box';
import { hiddenInput, inputWrapper } from './forms/Styles';
import { CheckActive, CheckEmpty } from '../icons';

export interface CheckboxProps {
  /** The id of a checkbox */
  id: string;
  /** Checkbox can be disabled (optional) */
  disabled?: boolean;
  /** Checkbox can be checked (optional) */
  checked?: boolean;
  /** The color of the checkbox, defaults to primary */
  color?: string | null;
}

const Checkbox = ({ id, disabled, color, ...rest }: CheckboxProps) => {
  return (
    <CheckBoxWrapper>
      <HiddenInput type="checkbox" disabled={disabled} id={id} {...rest} />
      <CheckActive
        id={`check-active-${id}`}
        color={color}
        data-name="checked"
      />
      <CheckEmpty id={`check-empty-${id}`} color={color} data-name="empty" />
    </CheckBoxWrapper>
  );
};

const HiddenInput = styled.input`
  ${hiddenInput}
`;

const CheckBoxWrapper = styled(Box)`
  ${inputWrapper}

  svg[data-name='checked'] {
    display: none;
  }

  > ${HiddenInput}:disabled {
    & ~ svg[data-name='empty'] {
      g {
        stroke: ${themeGet('colors.borderGray')};
      }
    }

    & ~ svg[data-name='checked'] {
      g {
        fill: ${themeGet('colors.borderGray')};
      }
    }
  }

  > ${HiddenInput}:focus {
    & ~ svg[data-name='empty'] {
      g {
        stroke: ${themeGet('colors.primary')};
        stroke-width: 2;
      }
    }
  }

  > ${HiddenInput}:checked {
    & ~ svg[data-name='checked'] {
      display: inline-block;
    }

    & ~ svg[data-name='empty'] {
      display: none;
    }
  }
`;

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  size: 20,
};

export default Checkbox;
