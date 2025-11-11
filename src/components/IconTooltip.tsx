import React, { FunctionComponent, ReactNode, useState } from 'react';
import { themeGet } from 'styled-system';
import styled, { css } from 'styled-components';
import Box, { BoxProps } from './Box';
import Icon, { IconName } from './Icon';
import Tooltip from './Tooltip';

interface IconTooltipInterface {
  icon?: IconName;
  size?: number;
  ariaLabel: string;
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

    ${({ active }) =>
      active &&
      css`
        display: block;
      `}
  }

  &:hover ${StyledTooltip} {
    display: block;
  }
`;

const TransparentButton = styled.button<{ size?: number }>`
  color: ${({ theme }) => theme.colors.transparent};
  background-color: ${({ theme }) => theme.colors.transparent};
  border: none;
  cursor: pointer;
  height: ${({ size }) => size || 24}px;
  width: ${({ size }) => size || 24}px;
  padding: 0;
  margin: auto;
`;

const ClickableIcon = styled(Icon)`
  pointer-events: none;
`;

const IconTooltip: FunctionComponent<IconTooltipProps> = ({
  children,
  width,
  size,
  position,
  ariaLabel,
  icon = 'information',
  ...rest
}: IconTooltipProps) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <StyledIconTooltip active={active} {...rest}>
      <TransparentButton
        onClick={() => setActive(!active)}
        size={size}
        type="button"
        aria-label={ariaLabel}
      >
        <ClickableIcon name={icon} size={size} data-testid="tooltipIcon" />
      </TransparentButton>
      <StyledTooltip
        center={position === 'center'}
        right={position === 'right'}
        left={position === 'left'}
        width={width}
        zIndex={100}
        data-testid="tooltipBox"
      >
        <Box>{children as any}</Box>
      </StyledTooltip>
    </StyledIconTooltip>
  );
};

IconTooltip.displayName = 'IconTooltip';
Object.assign(IconTooltip, {
  defaultProps: {
    width: 430,
    size: 14,
    position: 'center',
  },
});

export default IconTooltip;
