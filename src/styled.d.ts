import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line import/prefer-default-export
  export interface DefaultTheme extends Theme {
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
      alertRed: string;
      alertBlue: string;
      alertBlueText: string;
      alertGreen: string;
      alertGreenText: string;
      alertRed: string;
      alertRedText: string;
      alertYellow: string;
      alertYellowText: string;
      white: string;
      blue: string;
      lightGray: string;
      borderGray: string;
      gray: string;
      darkGray: string;
      green: string;
      red: string;
      primary: string;
      secondary: string;
      text: string;
      transparent: string;
    };
    primary: string;
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
  }
}
