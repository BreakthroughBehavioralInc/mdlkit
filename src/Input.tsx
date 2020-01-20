import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { borders, field } from './forms/Styles';

export type InputProps = {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  active?: boolean;
} & SpaceProps;

const Input = styled.input<InputProps>`
  ${borders}
  ${field}

  ${space};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.lightGray};
      cursor: not-allowed;
    `}

  ${({ placeholder, active, theme }) =>
    (placeholder || !active) &&
    css`
      padding-top: 12px;
      padding-bottom: 12px;

      ${theme.mediaQueries.sm} {
        padding-top: 13px;
        padding-bottom: 13px;
      }
    `}
`;

Input.displayName = 'Input';
// @ts-ignore
Input.isField = true;
Input.defaultProps = {
  type: 'text',
};

export default Input;
