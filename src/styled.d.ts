import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line import/prefer-default-export
  export interface DefaultTheme {
    light?: boolean;
    dark?: boolean;
    breakpoints: any;
    mediaQueries: any;
    space: any;
    headingFont: string;
    textFont: string;
    fontSizes: number[];
    fontWeights: {
      light: number;
      normal: number;
      bold: number;
      bolder: number;
    };
    lineHeights: {
      standard: number;
      display: number;
    };
    letterSpacings: {
      normal: string;
      caps: string;
    };
    colors: {
      alertBlue: string;
      alertBlueText: string;
      alertGreen: string;
      alertGreenText: string;
      alertRed: string;
      alertRedText: string;
      alertYellow: string;
      alertYellowText: string;
      black: string;
      white: string;
      blue: string;
      lighterBlue: string;
      lightBlue: string;
      darkBlue: string;
      steelBlue: string;
      lightGray: string;
      borderGray: string;
      gray: string;
      darkGray: string;
      green: string;
      red: string;
      primary: string;
      secondary: string;
      tertiary: string;
      orange: string;
      text: string;
      primaryText: string;
      transparent: string;
      yellow: string;
      purple: string;
      eggshellBlue: string;
      peachOrange: string;
    };
    colorStyles: {
      primaryTextOnPrimary: {
        color: string;
        background: string;
      };
    };
    primary: string;
    secondary: string;
    tertiary: string;
    foreground: string;
    background: string;
    text: string;
    radii: number[];
    radius: string;
    boxShadows: string[];
    maxContainerWidth: string;
    timingFunctions: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
    };
    duration: {
      fast: string;
      normal: string;
      slow: string;
      slowest: string;
    };
    transitionDelays: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
    padding: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
  }
}
