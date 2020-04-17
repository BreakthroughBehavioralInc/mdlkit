import React, { FunctionComponent, ReactNode } from 'react';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import Box, { BoxProps } from './Box';
import Icon, { IconName } from './Icon';
import Tooltip from './Tooltip';

interface IconTooltipInterface {
  icon?: IconName;
  size?: number;
  position?: 'center' | 'right' | 'left';
  children: ReactNode;
}

export type IconTooltipProps = IconTooltipInterface & BoxProps;

const StyledTooltip = styled(Tooltip)`
  width: 300px;

  ${themeGet('mediaQueries.md')} {
    width: ${({ width }) => width}px;
  }
`;

const StyledIconTooltip = styled(Box)<any>`
  cursor: pointer;
  display: inline-block;

  ${StyledTooltip} {
    display: none;
    position: absolute;
    top: 20px;
    margin-left: -5px;
  }

  &:hover ${StyledTooltip} {
    display: block;
  }
`;

const IconTooltip: FunctionComponent<IconTooltipProps> = ({
  children,
  width,
  size,
  position,
  icon = 'information',
  ...rest
}: IconTooltipProps) => (
  <StyledIconTooltip {...rest}>
    <Icon name={icon} size={size} data-testid="tooltipIcon" />
    <StyledTooltip
      center={position === 'center'}
      right={position === 'right'}
      left={position === 'left'}
      width={width}
      zIndex={100}
      data-testid="tooltipBox"
    >
      <Box>{children}</Box>
    </StyledTooltip>
  </StyledIconTooltip>
);

IconTooltip.displayName = 'IconTooltip';
IconTooltip.defaultProps = {
  width: 430,
  size: 14,
  position: 'center',
};

export default IconTooltip;
