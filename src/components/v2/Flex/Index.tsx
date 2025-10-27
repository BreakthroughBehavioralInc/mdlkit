import React, { CSSProperties } from 'react';
import { FlexRoot } from './styled';

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
Flex.displayName = 'Flex';

export default Flex;
