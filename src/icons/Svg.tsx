import styled from 'styled-components';
import { space, color, SpaceProps, ColorProps } from 'styled-system';

export type SvgProps = SpaceProps & ColorProps;

const Svg = styled.svg<SvgProps>`
  flex: none;

  ${space}
  ${color}
`;

// @ts-ignore
Svg.isIcon = true;
Svg.displayName = 'Svg';

export default Svg;
