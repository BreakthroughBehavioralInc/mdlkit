import styled, { css } from 'styled-components';
import { themeGet, space, SpaceProps } from 'styled-system';
import { bold, align, small } from './Text';

export const hyperlink = css<{ textColor?: string }>`
  color: ${({ textColor }) => textColor || themeGet('colors.primary')};
  text-decoration: none;
`;

export type HyperlinkProps = {
  bold?: boolean;
  small?: boolean;
  id?: string;
  align?: 'center' | 'left' | 'right';
  textColor?: string;
  href?: string;
  tabIndex?: number;
  onClick?: (e: any) => any;
} & SpaceProps;

export const Hyperlink = styled.a<HyperlinkProps>`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${bold}
  ${align}
  ${small}

  ${hyperlink}

  ${space}
`;

Hyperlink.displayName = 'Hyperlink';
Object.assign(Hyperlink, {
  defaultProps: {
    bold: true,
  },
});

export default Hyperlink;
