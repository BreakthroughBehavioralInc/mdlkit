import React, { StatelessComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { mq } from '../gridTheme';
import LoadingIcon from './LoadingIcon';

type SizeType =
  | string
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | ('small' | 'medium' | 'large' | 'xLarge')[];

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
    xLarge: {
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
    case 2:
      return { boxShadow: '0px 9px 8px -4px rgba(0,0,0,0.15)' };
    case 3:
      return { boxShadow: '0px 12px 11px -2px rgba(0,0,0,0.1)' };
    default:
      return { boxShadow: '0px 5px 5px -2px rgba(0,0,0,0.15)' };
  }
};

interface ButtonT extends React.HTMLAttributes<HTMLButtonElement> {
  caps?: boolean;
  href?: string;
  size: SizeType;
  fullWidth?: boolean;
  raised?: number;
  minWidth?: string | string[];
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

export type ButtonProps = { ref: React.Ref<HTMLButtonElement> } & ButtonT &
  SpaceProps;

const StyledButton = styled.button<ButtonProps>`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.standard};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius};
  ${({ theme }) => theme.colorStyles.primaryTextOnPrimary};
  border-width: 0;
  border-style: solid;
  transition: background-color ${({ theme }) => theme.duration.slow}
    ${({ theme }) => theme.timingFunctions.easeOut} 0ms;

  ${({ loading, theme }) =>
    loading &&
    `
    position: relative;
    color: ${theme.colors.transparent};

    & > svg {
      position: absolute;
      left: calc(50% - 0.75em);
    }
  `}

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
      disabled ? null : theme.colors.secondary};
  }

  ${raised}
  ${width}
  ${minWidth}
  ${({ theme, size }) => sizeFn({ theme, size })}

  ${space}
`;

const Button: StatelessComponent<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonT
>(({ loading, children, ...props }: ButtonT, ref) => {
  return (
    <StyledButton loading={loading} {...props} ref={ref}>
      {loading ? (
        <LoadingIcon
          width="1.5em"
          height="auto"
          color="primaryText"
          backgroundColor="primary"
        />
      ) : null}
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';
Button.defaultProps = {
  fullWidth: false,
  loading: false,
};

export default Button;
