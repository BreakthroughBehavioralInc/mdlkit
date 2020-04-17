import styled, { css } from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  themeGet,
  ColorProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
} from 'styled-system';

export const align = props => (props.align ? { textAlign: props.align } : null);

export const bold = props =>
  props.bold ? { fontWeight: props.theme.fontWeights.bold } : null;

export const caps = (props): any =>
  props.caps
    ? {
        textTransform: 'uppercase',
        letterSpacing: themeGet('letterSpacings.caps'),
      }
    : null;

export type TextProps = {
  bold?: boolean;
  caps?: boolean;
  small?: boolean;
  align?: 'center' | 'left' | 'right';
  htmlFor?: string;
} & ColorProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  SpaceProps;

const Text = styled.p<TextProps>`
  font-family: ${themeGet('textFont')};
  ${align} 
  ${bold}
  ${caps} 


  ${({ small, theme }) =>
    small &&
    css`
      font-size: ${theme.fontSizes[0]};

      ${theme.mediaQueries.md} {
        font-size: ${theme.fontSizes[1]};
      }
    `}

  ${color}
  ${fontSize}
  ${fontWeight} 
  ${lineHeight}
  ${space}
`;

Text.defaultProps = {
  bold: false,
  caps: false,
  lineHeight: 'standard',
};

export default Text;
