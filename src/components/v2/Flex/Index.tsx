import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

const FlexRoot = styled.div<{
  direction: CSSProperties['flexDirection'];
  gap: CSSProperties['gap'];
  justify: CSSProperties['justifyContent'];
  align: CSSProperties['alignItems'];
  mdDirection?: CSSProperties['flexDirection'];
  mdGap?: CSSProperties['gap'];
  mdJustify?: CSSProperties['justifyContent'];
  mdAlign?: CSSProperties['alignItems'];
  lgDirection?: CSSProperties['flexDirection'];
  lgGap?: CSSProperties['gap'];
  lgJustify?: CSSProperties['justifyContent'];
  lgAlign?: CSSProperties['alignItems'];
  full?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.direction};
  gap: ${props => props.gap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
  ${props =>
    props.full &&
    css`
      width: 100%;
    `}

  ${props =>
    props.mdDirection &&
    css`
      @media (min-width: 768px) {
        flex-direction: ${props.mdDirection};
      }
    `}
  ${props =>
    props.mdGap &&
    css`
      @media (min-width: 768px) {
        gap: ${props.mdGap};
      }
    `}
  ${props =>
    props.mdJustify &&
    css`
      @media (min-width: 768px) {
        justify-content: ${props.mdJustify};
      }
    `}
  ${props =>
    props.mdAlign &&
    css`
      @media (min-width: 768px) {
        align-items: ${props.mdAlign};
      }
    `}
  ${props =>
    props.lgDirection &&
    css`
      @media (min-width: 1280px) {
        flex-direction: ${props.lgDirection};
      }
    `}
  ${props =>
    props.lgGap &&
    css`
      @media (min-width: 1280px) {
        gap: ${props.lgGap};
      }
    `}
  ${props =>
    props.lgJustify &&
    css`
      @media (min-width: 1280px) {
        justify-content: ${props.lgJustify};
      }
    `}
  ${props =>
    props.lgAlign &&
    css`
      @media (min-width: 1280px) {
        align-items: ${props.lgAlign};
      }
    `}
`;

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties['flexDirection'];
  gap?: CSSProperties['gap'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  mdDirection?: CSSProperties['flexDirection'];
  mdGap?: CSSProperties['gap'];
  mdJustify?: CSSProperties['justifyContent'];
  mdAlign?: CSSProperties['alignItems'];
  lgDirection?: CSSProperties['flexDirection'];
  lgGap?: CSSProperties['gap'];
  lgJustify?: CSSProperties['justifyContent'];
  lgAlign?: CSSProperties['alignItems'];
  full?: boolean;
}

/**
 * Flex is a customizable flex container that allows users to control the flex direction, gap, justification, and alignment of its children.
 * It supports responsive adjustments at the `md` (768px and above) and `lg` (1025px and above) breakpoints.
 *
 * @param {FlexProps} props - The properties to customize the Flex component.
 * @returns {JSX.Element} The rendered Flex component.
 *
 * @example
 * ```tsx
 * <Flex full direction="column" gap="16px" justify="center" align="center" mdDirection="row" lgGap="24px">
 * </Flex>
 * ```
 */
const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  gap = '0',
  justify = 'flex-start',
  align = 'stretch',
  mdDirection,
  mdGap,
  mdJustify,
  mdAlign,
  lgDirection,
  lgGap,
  lgJustify,
  lgAlign,
  children,
  full,
  ...props
}) => {
  return (
    <FlexRoot
      direction={direction}
      gap={gap}
      justify={justify}
      align={align}
      mdDirection={mdDirection}
      mdGap={mdGap}
      mdJustify={mdJustify}
      mdAlign={mdAlign}
      lgDirection={lgDirection}
      lgGap={lgGap}
      lgJustify={lgJustify}
      lgAlign={lgAlign}
      full={full}
      {...props}
    >
      {children as any}
    </FlexRoot>
  );
};

export default Flex;
