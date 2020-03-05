import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Box from '../Box/Box';
import { hiddenInput, inputWrapper } from '../../shared/Styles';
import { CheckActive, CheckEmpty } from '../../icons';

export interface CheckboxProps {
  id: string;
  disabled?: boolean;
  checked?: boolean;
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
