import { DefaultTheme } from 'styled-components';
import gridTheme from '../gridTheme';
import createColorStyles from '../utils/createColorStyles';

export const createMediaQuery = (n: number) =>
  `@media screen and (min-width:${n}px)`;

const addAliases = (arr: string[] | number[], aliases: string[]) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      },
    })
  );

export const breakpoints = [
  gridTheme.breakpoints.sm,
  gridTheme.breakpoints.md,
  gridTheme.breakpoints.lg,
  gridTheme.breakpoints.xl,
  gridTheme.breakpoints.xxl,
];

export const mediaQueries = breakpoints.map(createMediaQuery);

// breakpoints
const aliases = [
  'sm', // 576
  'md', // 768
  'lg', // 1024
  'xl', // 1200
  'xxl', // 1440
];

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

export const headingFont = `'Noto Sans', sans-serif`;
export const textFont = `'Noto Sans', sans-serif`;

export const fontSizes = [12, 14, 16, 20, 24, 32, 38, 40, 48, 56, 72];

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

// color palette - v2 rebranding colors
const alertBlue = '#cce5ff';
const alertBlueText = '#004085';
const alertGreen = '#e3fcef';
const alertGreenText = '#177f4b';
const alertRed = '#ffebe6';
const alertRedText = '#cb023c';
const alertYellow = '#fffae6';
const alertYellowText = '#ad5f00';
const black = '#070707';
const white = '#fff';
const lighterBlue = '#f9fdff';
const lightBlue = '#158AE0';
const blue = '#0379CE';
const darkBlue = '#03275B';
const steelBlue = '#527B89';
const orange = '#f26522';
const lightGray = '#f3f3f3';
const borderGray = '#d5dfe6';
const gray = '#626568';
const darkGray = '#404041';
const green = '#0A8562';
const red = '#EB003B';
const yellow = '#F8E71C';
const purple = '#8A60CD';
const transparent = '#00000000';
const eggshellBlue = '#c6fdf2';
const peachOrange = '#ffcf9a';

// v2 specific colors (add rebranding colors here)
const primaryBlue = '#0379ce';
const primaryBlueHover = '#025a9b';
const primaryBlueDark = '#026ab3';
const errorRed = '#dc3545';
const errorRedHover = '#c72130';
const errorRedBackground = '#fae1e3';
const textGray = '#757678';
const textBlack = '#000';
const borderGrayV2 = '#757678';
const hoverGray = '#eaeaeb';
const hoverGrayLight = '#e5e5e5';
const focusBlack = '#000';

// color alias
const primary = blue;
const secondary = darkBlue;
const tertiary = orange;
const text = black;
const primaryText = white;

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
  lighterBlue,
  lightBlue,
  blue,
  darkBlue,
  steelBlue,
  orange,
  lightGray,
  borderGray,
  gray,
  darkGray,
  green,
  red,
  primary,
  secondary,
  tertiary,
  text,
  primaryText,
  transparent,
  yellow,
  purple,
  eggshellBlue,
  peachOrange,
  // v2 specific colors
  primaryBlue,
  primaryBlueHover,
  primaryBlueDark,
  errorRed,
  errorRedHover,
  errorRedBackground,
  textGray,
  textBlack,
  borderGrayV2,
  hoverGray,
  hoverGrayLight,
  focusBlack,
};

// color styles
export const colorStyles = createColorStyles({ colors });

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

// focus styles - used by Button, Input, InfoBox, Pill, Calendar
export const focusRing = '0 0 0 2px #ffffff, 0 0 0 4px #000000';

// animation easing curves - used by Button, Input, InfoBox, Pill
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)';
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)';
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)';

export const timingFunctions = {
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

const padding = {
  small: '5px',
  medium: '15px',
  large: '25px',
  xLarge: '45px',
};

const margin = {
  small: '5px',
  medium: '15px',
  large: '25px',
};

// Material-UI theme structure for Tooltip component compatibility
// This provides the structure expected by Material-UI's withStyles HOC
export const muiTheme = {
  palette: {
    common: {
      white,
      black,
    },
    text: {
      primary: textBlack,
      secondary: gray,
    },
  },
  shadows: [
    'none',
    boxShadows[0], // shadow[1] used by Tooltip
    boxShadows[1],
    boxShadows[2],
    boxShadows[3],
  ],
  spacing: {
    unit: 8, // Material-UI spacing unit used by Tooltip
  },
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
  colorStyles,
  primary,
  secondary,
  tertiary,
  text,
  radii,
  radius,
  boxShadows,
  focusRing,
  maxContainerWidth,
  timingFunctions,
  duration,
  transitionDelays,
  padding,
  margin,
  muiTheme, // Material-UI theme structure for Tooltip
};

// do not set a type (like DefaultTheme), because styled-system uses additional keys not in the DefaultTheme
const v2Theme: DefaultTheme = {
  light: true,
  ...shared,
  foreground: primary,
  background: white,
};

export type V2ThemeType = typeof v2Theme;

export default v2Theme;
