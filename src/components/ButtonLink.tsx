import styled from 'styled-components';
import { space, color, SpaceProps, ColorProps } from 'styled-system';
import { bold, align } from './Text';

export type ButtonLinkProps = {
  bold?: boolean;
  id?: string;
  align?: 'center' | 'left' | 'right';
  type?: string;
  onClick?: (e: any) => any;
} & SpaceProps &
  ColorProps;

export const ButtonLink = styled.button<ButtonLinkProps>`
  background-color: ${({ theme }) => theme.colors.transparent};
  border: none;
  font-size: 100%;
  padding: 0;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${bold}
  ${align}

  ${color}
  ${space}
`;

ButtonLink.displayName = 'ButtonLink';
ButtonLink.defaultProps = {
  bold: true,
  color: 'primary',
};

export default ButtonLink;
