import { DefaultTheme } from 'styled-components';

const createMediaQuery = (n: number) => `@media screen and (min-width:${n}px)`;

const addAliases = (arr: string[] | number[], aliases: string[]) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      },
    })
  );

export const breakpoints = [480, 768, 992];

export const mediaQueries = breakpoints.map(createMediaQuery);

const aliases = ['sm', 'md', 'lg'];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

export const space = [0, 4, 8, 16, 32, 64, 128];
const spaceAliases = [
  'none',
  'xxs',
  'xs', // 8
  'sm', // 16
  'md', // 32
  'lg', // 64
  'xl',
];

addAliases(space, spaceAliases);

export const headingFont = `'Noto Sans',sans-serif`;
export const textFont = `'Montserrat',sans-serif`;

export const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72];

export const light = 300;
export const normal = 400;
export const bold = 600;
export const bolder = 700;

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  light,
  normal,
  bold,
  bolder,
};

export const lineHeights = {
  standard: 1.5,
  display: 1.25,
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.025em',
};

// color palette
const alertBlue = '#cce5ff';
const alertBlueText = '#004085';
const alertGreen = '#d4edda';
const alertGreenText = '#155724';
const alertRed = '#f8d7da';
const alertRedText = '#721c24';
const alertYellow = '#fff3cd';
const alertYellowText = '#856404';
const black = '#070707';
const white = '#fff';
const blue = '#158ae0';
const darkBlue = '#063567';
const lightGray = '#f4f7ff';
const borderGray = '#d5dfe6';
const gray = '#747474';
const darkGray = '#373A3C';
const green = '#28a745';
const red = '#dc3545';
const transparent = '#00000000';

// color alias
const primary = blue;
const secondary = darkBlue;
const text = black;

export const colors = {
  alertBlue,
  alertBlueText,
  alertGreen,
  alertGreenText,
  alertRed,
  alertRedText,
  alertYellow,
  alertYellowText,
  black,
  white,
  blue,
  lightGray,
  borderGray,
  gray,
  darkGray,
  green,
  red,
  primary,
  secondary,
  text,
  transparent,
};

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 4, 8];
export const radius = '4px';

export const maxContainerWidth = '1280px';

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`,
];

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)';
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)';
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)';

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn,
};

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`,
};

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`,
};

const shared = {
  breakpoints,
  mediaQueries,
  space,
  headingFont,
  textFont,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  primary,
  text,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  timingFunctions,
  duration,
  transitionDelays,
};

const lightTheme: DefaultTheme = {
  light: true,
  ...shared,
  foreground: primary,
  background: white,
};

const darkTheme: DefaultTheme = {
  dark: true,
  ...shared,
  foreground: white,
  background: primary,
};

export { lightTheme, darkTheme };
export default lightTheme;
