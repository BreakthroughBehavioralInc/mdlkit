import styled, { css } from 'styled-components';
import {
  space,
  fontSize,
  color,
  themeGet,
  SpaceProps,
  FontSizeProps,
  ColorProps,
} from 'styled-system';

type LabelProps = { smallLabel?: boolean } & SpaceProps &
  FontSizeProps &
  ColorProps;

const Label = styled.label<LabelProps>`
  width: 100%;
  pointer-events: none;
  user-select: none;
  display: block;
  margin: 0;
  line-height: ${themeGet('lineHeights.display')};
  padding-left: ${themeGet('space.sm')}px;

  transition: all ${themeGet('duration.slow')}
    ${themeGet('timingFunctions.easeOut')} 0ms;
  transform: scale(1) translate(0px, 0px);
  transform-origin: left top;
  font-weight: ${themeGet('fontWeights.normal')};

    ${({ smallLabel }) =>
      smallLabel &&
      css`
        padding-top: ${themeGet('space.xs')}px;
        padding-bottom: ${themeGet('space.xs')}px;
        transform: scale(0.75) translate(0px, 0px);
        width: 125%;
        font-weight: ${themeGet('fontWeights.bold')};
      `}
    ${space} ${fontSize} ${color};
`;

Label.displayName = 'Label';
// @ts-ignore
Label.isLabel = true;
Label.defaultProps = {
  fontSize: [1, 2],
  color: 'gray',
  smallLabel: false,
};

export default Label;
