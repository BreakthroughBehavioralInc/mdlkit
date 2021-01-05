import styled from 'styled-components';
import {
  space,
  width,
  color,
  textAlign,
  display,
  SpaceProps,
  WidthProps,
  ColorProps,
  TextAlignProps,
  DisplayProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  WidthProps &
  ColorProps &
  TextAlignProps &
  DisplayProps;

const Box = styled.div<BoxProps>`
  ${space} ${width} ${color} ${textAlign} ${display}
`;

Box.displayName = 'Box';

export default Box;
