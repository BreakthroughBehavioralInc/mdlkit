import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';
import { themeGet, zIndex, ZIndexProps } from 'styled-system';
import Box, { BoxProps } from './Box';

const arrowShadow = props => {
  return props.top
    ? {
        'box-shadow':
          '-9.66px 9.66px 8px 0 rgba(0,0,0,0.04), -4px 4px 4px 0 rgba(0,0,0,0.08)',
      }
    : {
        'box-shadow':
          '-1.41px 1.41px 1px 0 rgba(0,0,0,0.01), -3.66px 3.66px 8px 0 rgba(0,0,0,0.04)',
      };
};

const arrowAlign = props => {
  if (props.left) {
    return { left: '16px', 'margin-left': props.top ? 0 : '15px' };
  }

  if (props.center) {
    return { left: '50%', 'margin-left': props.top ? '-7px' : '7px' };
  }

  return { right: '16px', 'margin-right': props.top ? '5px' : '-10px' };
};

const arrowPosition = props => {
  return props.top
    ? {
        'transform-origin': '0 0',
        transform: 'rotate(-45deg)',
        bottom: '-10px',
      }
    : {
        'transform-origin': '0 0',
        transform: 'rotate(-225deg)',
        top: '0',
      };
};

const arrow = props => {
  return props.top
    ? {
        'transform-origin': '0 0',
        transform: 'rotate(-45deg)',
      }
    : {
        'transform-origin': '0 0',
        transform: 'rotate(-225deg)',
      };
};

const tooltipPosition = props => {
  return props.top ? { bottom: '-8px' } : { top: 0 };
};

const tooltipAlign = props => {
  const { right, center } = props;
  if (right) {
    return { right: '-12px' };
  }

  if (center) {
    return { left: '50%', width: 'auto', transform: 'translateX(-50%)' };
  }

  return null;
};

const StyledSpan = styled.span<ZIndexProps>`
  position: relative;

  ${zIndex}
`;

const TooltipContent = styled(Box)<any>`
  display: inline;
  box-shadow: ${({ theme }) => theme.boxShadows[1]};
  position: absolute;
  border-radius: ${({ theme }) => theme.radii[1]}px;
  box-sizing: border-box;
  background: ${({ theme, bg }) => theme.colors[bg]};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;

  ${themeGet('mediaQueries.md')} {
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
  }

  ${tooltipPosition}
  ${tooltipAlign}

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent ${({ theme, bg }) => theme.colors[bg]}
      ${({ bg, theme }) => theme.colors[bg]};

    ${arrow}
    ${arrowPosition}
    ${arrowAlign}
    ${arrowShadow}
  }
`;

const Tooltip: FunctionComponent<TooltipProps> = ({
  children,
  zIndex: zIndexProp,
  ...rest
}: TooltipProps) => {
  return (
    <StyledSpan zIndex={zIndexProp}>
      <TooltipContent p={3} mb={3} mt={2} {...rest}>
        {children}
      </TooltipContent>
    </StyledSpan>
  );
};

export type TooltipProps = {
  children?: ReactNode;
  bg?: string;
  top?: boolean;
  center?: boolean;
  right?: boolean;
  left?: boolean;
  color?: string;
} & ZIndexProps &
  BoxProps;

Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  bg: 'white',
  color: 'text',
  zIndex: 'auto',
};

export default Tooltip;
