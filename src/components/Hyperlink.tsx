import styled from 'styled-components';
import { space, color, SpaceProps, ColorProps } from 'styled-system';
import { bold, align } from './Text';

export type HyperlinkProps = {
  bold?: boolean;
  id?: string;
  align?: 'center' | 'left' | 'right';
  href?: string;
  tabIndex?: number;
  onClick?: (e: any) => any;
} & SpaceProps &
  ColorProps;

export const Hyperlink = styled.a<HyperlinkProps>`
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${bold}
  ${align}
  ${space}
  ${color}
`;

Hyperlink.displayName = 'Hyperlink';
Hyperlink.defaultProps = {
  bold: true,
  color: 'primary',
};

export default Hyperlink;
