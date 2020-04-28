import styled, { css, DefaultTheme } from 'styled-components';
import { themeGet, space, SpaceProps } from 'styled-system';

const buttonSize = ({ size, theme }: { size: string; theme: DefaultTheme }) => {
  switch (size) {
    case 'small':
      return {
        fontSize: `${theme.fontSizes[0]}px`,
        padding: '7px 12px',
      };
    case 'medium':
      return {
        fontSize: `${theme.fontSizes[1]}px`,
        padding: '9.5px 18px',
      };
    case 'large':
      return {
        fontSize: `${theme.fontSizes[2]}px`,
        padding: '12px 22px',
      };
    default:
      return {
        fontSize: `${theme.fontSizes[1]}px`,
        padding: '9.5px 18px',
      };
  }
};

const width = ({ fullWidth }: { fullWidth?: boolean }) =>
  fullWidth ? { width: '100%' } : undefined;

export type ButtonProps = {
  caps?: boolean;
  href?: string;
  size: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
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
  background-color: ${themeGet('foreground')};
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
      disabled ? null : theme.colors.secondary};
  }

  ${width}
  ${buttonSize}

  ${space}
`;

Button.displayName = 'Button';
Button.defaultProps = {
  fullWidth: false,
};

export default Button;
