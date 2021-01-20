import facepaint from 'facepaint';
import gridTheme from '../gridTheme';

const mq = facepaint([
  `@media(min-width: ${gridTheme.breakpoints.sm}px)`,
  `@media(min-width: ${gridTheme.breakpoints.md}px)`,
  `@media(min-width: ${gridTheme.breakpoints.lg}px)`,
  `@media(min-width: ${gridTheme.breakpoints.xl}px)`,
  `@media(min-width: ${gridTheme.breakpoints.xxl}px)`,
]);

export default mq;
