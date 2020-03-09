import styled, { css } from 'styled-components';
import { themeGet, space, SpaceProps } from 'styled-system';
import { bold, align } from '../Text/Text';

export const hyperlink = css`
  color: ${themeGet('colors.primary')};
  text-decoration: none;
`;

export type HyperlinkProps = {
  bold?: boolean;
  id?: string;
  align?: 'center' | 'left' | 'right';
} & SpaceProps;

const Hyperlink = styled.a<HyperlinkProps>`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${bold}
  ${align}

  ${hyperlink}

  ${space}
`;

Hyperlink.defaultProps = {
  bold: true,
};

export default Hyperlink;
