import styled, { css } from 'styled-components';
import { themeGet, space, SpaceProps } from 'styled-system';

export const hyperlink = css<{ textColor?: string }>`
  color: ${({ textColor }) => textColor || themeGet('colors.primary')};
  text-decoration: none;
`;

export const align = props => (props.align ? { textAlign: props.align } : null);

export const bold = props =>
  props.bold ? { fontWeight: props.theme.fontWeights.bold } : null;

export type HyperlinkProps = {
  bold?: boolean;
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

  ${hyperlink}

  ${space}
`;

Hyperlink.displayName = 'Hyperlink';
Hyperlink.defaultProps = {
  bold: true,
};

export default Hyperlink;
