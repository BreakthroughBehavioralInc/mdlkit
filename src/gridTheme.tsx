import facepaint from 'facepaint';

const gridTheme = {
  gridColumns: 12, // default 12
  breakpoints: {
    // defaults below
    xxl: 1440,
    xl: 1200,
    lg: 1024, // default 960
    md: 768,
    sm: 576,
    xs: 575,
    // or you can use aliases
    // veryGiant: 1440,
    // giant: 1200,
    // desktop: 992,
    // tablet: 768,
    // phone: 576,
    // smaller: 575,
  },
  row: {
    padding: 15, // default 15
  },
  col: {
    padding: 15, // default 15
  },
  container: {
    padding: 15, // default 15
    maxWidth: {
      // defaults below
      xxl: 1240,
      xl: 1240,
      lg: 1024, // default 960
      md: 720,
      sm: 540,
      xs: 540,
      // or you can use aliases
      // veryGiant: 1141,
      // giant: 1140,
      // desktop: 960,
      // tablet: 720,
      // phone: 540,
      // smaller: 540,
    },
  },
};

export const mq = facepaint([
  `@media(min-width: ${gridTheme.breakpoints.sm}px)`,
  `@media(min-width: ${gridTheme.breakpoints.md}px)`,
  `@media(min-width: ${gridTheme.breakpoints.lg}px)`,
  `@media(min-width: ${gridTheme.breakpoints.xl}px)`,
  `@media(min-width: ${gridTheme.breakpoints.xxl}px)`,
]);

export default gridTheme;
