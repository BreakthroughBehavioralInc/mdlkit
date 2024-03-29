import { css, DefaultTheme } from 'styled-components';
import { themeGet } from 'styled-system';

export const borders = ({
  color,
  theme,
}: {
  color?: string | null | undefined;
  theme: any;
}): any => {
  const borderColor = color ? theme.colors[color] : theme.colors.borderGray;
  const focusColor = color ? borderColor : theme.foreground;
  return {
    'border-color': borderColor,
    ':focus': {
      outline: 0,
      'border-color': focusColor,
    },
  };
};

export const field = css`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  font-size: ${themeGet('fontSizes.1')}px;
  line-height: ${themeGet('lineHeights.standard')};
  color: inherit;
  background-color: ${themeGet('background')};
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;
  border-color: ${themeGet('colors.borderGray')};
  padding: 12px;
  margin: 0;

  ${themeGet('mediaQueries.sm')} {
    padding: 10px;
    font-size: ${themeGet('fontSizes.2')}px;
  }

  &::placeholder {
    color: ${themeGet('colors.gray')};
  }
`;

// to be used to hide input for radio button and checkbox
export const hiddenInput = css`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
`;

// to be used to display wrapper for radio button and checkbox
export const inputWrapper = css`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
`;

export const disabled = ({
  disabled: disabledField,
  theme,
}: {
  disabled?: boolean;
  theme: DefaultTheme;
}) =>
  disabledField
    ? {
        background: `${theme.colors.lightGray}`,
        cursor: 'not-allowed',
        opacity: 1,
      }
    : null;
