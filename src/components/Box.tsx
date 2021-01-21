import styled from 'styled-components';
import {
  space,
  width,
  color,
  textAlign,
  display,
  maxWidth,
  SpaceProps,
  WidthProps,
  ColorProps,
  TextAlignProps,
  DisplayProps,
  MaxWidthProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  WidthProps &
  ColorProps &
  TextAlignProps &
  DisplayProps &
  MaxWidthProps;

const Box = styled.div<BoxProps>`
  ${space} ${width} ${color} ${textAlign} ${display} ${maxWidth}
`;

Box.displayName = 'Box';

export default Box;
