import styled, { css } from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  maxWidth,
  themeGet,
  ColorProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
  MaxWidthProps,
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

export const small = props =>
  props.small
    ? css`
        font-size: ${props.theme.fontSizes[0]}px;

        ${props.theme.mediaQueries.md} {
          font-size: ${props.theme.fontSizes[1]}px;
        }
      `
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
  SpaceProps &
  MaxWidthProps;

const Text = styled.p<TextProps>`
  font-family: ${themeGet('textFont')};
  ${align}
  ${bold}
  ${bolder}
  ${caps}
  ${small}

  ${fullWidth}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${maxWidth}
`;

Text.defaultProps = {
  bold: false,
  caps: false,
  fullWidth: false,
  lineHeight: 'standard',
};

export default Text;
