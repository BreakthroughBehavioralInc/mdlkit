import styled from 'styled-components';
import {
  space,
  width,
  color,
  flexWrap,
  flexDirection,
  SpaceProps,
  WidthProps,
  ColorProps,
  FlexWrapProps,
  FlexDirectionProps,
} from 'styled-system';

export const wrap = (props): any => (props.wrap ? { flexWrap: 'wrap' } : null);
export const column = (props): any =>
  props.column ? { flexDirection: 'column' } : null;
export const align = props =>
  props.align ? { alignItems: props.align } : null;
export const justify = props =>
  props.justify ? { justifyContent: props.justify } : null;

type FlexProps = {
  wrap?: boolean;
  column?: boolean;
  align?: 'stretch' | 'center' | 'start' | 'end';
  justify?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
} & SpaceProps &
  WidthProps &
  ColorProps &
  FlexWrapProps &
  FlexDirectionProps;

const Flex = styled.div<FlexProps>`
  display: flex;

  ${wrap}
  ${column}
  ${align}
  ${justify}

  ${space} 
  ${width} 
  ${color} 
  ${flexDirection}
  ${flexWrap}
`;

Flex.displayName = 'Flex';

export default Flex;
