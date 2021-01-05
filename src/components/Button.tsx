import styled, { css } from 'styled-components';
import { themeGet, space, SpaceProps } from 'styled-system';
import { mq } from '../gridTheme';

type SizeType =
  | string
  | 'small'
  | 'medium'
  | 'large'
  | 'xl'
  | ('small' | 'medium' | 'large' | 'xl')[];

const sizeFn = (props: { theme: { fontSizes: number[] }; size: SizeType }) => {
  const finalSize: { fontSize: string[]; padding: string[] } = {
    fontSize: [],
    padding: [],
  };

  const sizes = {
    small: {
      fontSize: `${props.theme.fontSizes[0]}px`,
      padding: '7px 12px',
    },
    medium: {
      fontSize: `${props.theme.fontSizes[1]}px`,
      padding: '9.5px 18px',
    },
    large: {
      fontSize: `${props.theme.fontSizes[2]}px`,
      padding: '12px 22px',
    },
    xl: {
      fontSize: `${props.theme.fontSizes[4]}px`,
      padding: '9.5px 38px',
    },
  };

  const parsedSize = Array.isArray(props.size) ? props.size : [props.size];
  parsedSize.forEach((size: string) => {
    finalSize.fontSize.push(sizes[size].fontSize);
    finalSize.padding.push(sizes[size].padding);
  });

  return mq(finalSize);
};

const minWidth = props => mq({ minWidth: props.minWidth });

const width = props => (props.fullWidth ? { width: '100%' } : undefined);

const raised = props => {
  switch (props.raised) {
    case 0:
      return { boxShadow: 'none' };
    case 1:
      return { boxShadow: '0px 5px 5px -2px rgba(0,0,0,0.15)' };
    default:
    case 2:
      return { boxShadow: '0px 9px 8px -4px rgba(0,0,0,0.15)' };
    case 3:
      return { boxShadow: '0px 12px 11px -2px rgba(0,0,0,0.1)' };
  }
};

export type ButtonProps = {
  caps?: boolean;
  href?: string;
  size: SizeType;
  fullWidth?: boolean;
  raised?: number;
  minWidth?: string | string[];
} & SpaceProps;

const Button = styled.button<ButtonProps>`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: ${themeGet('fontWeights.bold')};
  line-height: ${themeGet('lineHeights.standard')};
  cursor: pointer;
  border-radius: ${themeGet('radius')};
  background-color: ${themeGet('primary')};
  color: ${themeGet('background')};
  border-width: 0;
  border-style: solid;
  transition: background-color ${themeGet('duration.slow')}
    ${themeGet('timingFunctions.easeOut')} 0ms;

  ${({ caps }) =>
    caps &&
    css`
      text-transform: uppercase;
    `}

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? null : theme.colors.primaryDark};
  }

  ${raised}
  ${width}
  ${minWidth}
  ${({ theme, size }) => sizeFn({ theme, size })}

  ${space}
`;

Button.displayName = 'Button';
Button.defaultProps = {
  fullWidth: false,
};

export default Button;
