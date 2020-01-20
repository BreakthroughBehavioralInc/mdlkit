import styled from 'styled-components';
import {
  space,
  width,
  color,
  textAlign,
  SpaceProps,
  WidthProps,
  ColorProps,
  TextAlignProps,
} from 'styled-system';

export type BoxProps = SpaceProps & WidthProps & ColorProps & TextAlignProps;

const Box = styled.div<BoxProps>`
  ${space} ${width} ${color} ${textAlign}
`;

Box.displayName = 'Box';

export default Box;
