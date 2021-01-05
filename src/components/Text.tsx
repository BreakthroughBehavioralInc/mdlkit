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

export const bolder = props =>
  props.bolder ? { fontWeight: props.theme.fontWeights.bolder } : null;

export const caps = (props): any =>
  props.caps
    ? {
        textTransform: 'uppercase',
        letterSpacing: themeGet('letterSpacings.caps'),
      }
    : null;

const fullWidth = props => (props.fullWidth ? { width: '100%' } : undefined);

export type TextProps = {
  bold?: boolean;
  bolder?: boolean;
  caps?: boolean;
  small?: boolean;
  fullWidth?: boolean;
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
  ${bolder}
  ${caps}

  ${({ small, theme }) =>
    small &&
    css`
      font-size: ${theme.fontSizes[0]}px;

      ${theme.mediaQueries.md} {
        font-size: ${theme.fontSizes[1]}px;
      }
    `}

  ${fullWidth}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
`;

Text.defaultProps = {
  bold: false,
  caps: false,
  fullWidth: false,
  lineHeight: 'standard',
};

export default Text;
