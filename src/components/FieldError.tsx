import styled, { css } from 'styled-components';
import {
  space,
  color,
  fontSize,
  lineHeight,
  SpaceProps,
  ColorProps,
  FontSizeProps,
  LineHeightProps,
} from 'styled-system';

export const error = (props): any =>
  props.error &&
  css`
    border-color: ${props.theme.colors.red};

    &:focus {
      border-color: ${props.theme.colors.red};
    }
  `;

type FieldErrorProps = SpaceProps &
  ColorProps &
  FontSizeProps &
  LineHeightProps;

const FieldError = styled.span<FieldErrorProps>`
  width: 100%;

  ${space}
  ${color}
  ${fontSize}
  ${lineHeight}
`;

FieldError.displayName = 'FieldError';
// @ts-ignore
FieldError.isError = true;
Object.assign(FieldError, {
  defaultProps: {
    pt: 1,
    pl: 1,
    color: 'red',
    fontSize: [0, 1],
    lineHeight: 'display',
  },
});

export default FieldError;
