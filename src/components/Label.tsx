import styled from 'styled-components';
import {
  space,
  fontSize,
  color,
  themeGet,
  SpaceProps,
  FontSizeProps,
  ColorProps,
} from 'styled-system';

type LabelProps = SpaceProps & FontSizeProps & ColorProps;

const Label = styled.label<LabelProps>`
  pointer-events: none;
  user-select: none;
  display: block;
  margin: 0;
  line-height: ${themeGet('lineHeights.display')};
  padding-left: ${themeGet('space.xxs')}px;
  padding-bottom: ${themeGet('space.xxs')}px;
  font-weight: ${themeGet('fontWeights.bold')};

    ${space} ${fontSize} ${color};
`;

Label.displayName = 'Label';
// @ts-ignore
Label.isLabel = true;
Label.defaultProps = {
  fontSize: [1, 2],
  color: 'darkGray',
};

export default Label;
