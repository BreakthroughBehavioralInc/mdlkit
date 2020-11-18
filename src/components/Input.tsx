import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { borders, field, disabled } from './forms/Styles';

export type InputProps = {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
} & SpaceProps;

const Input = styled.input<InputProps>`
  ${borders}
  ${field}

  ${space}

  ${disabled}
`;

Input.displayName = 'Input';
// @ts-ignore
Input.isField = true;
Input.defaultProps = {
  type: 'text',
};

export default Input;
