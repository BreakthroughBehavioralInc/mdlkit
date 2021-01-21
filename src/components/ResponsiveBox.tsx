import styled from 'styled-components';
import Box, { BoxProps } from './Box';
import gridTheme from '../gridTheme';
import { createMediaQuery } from '../theme';

export interface ResponsiveBreakpointsProps {
  show?: boolean;
  hide?: boolean;
  hideOnXs?: boolean;
  hideOnSm?: boolean;
  hideOnMd?: boolean;
  hideOnLg?: boolean;
  showOnXs?: boolean;
  showOnSm?: boolean;
  showOnMd?: boolean;
  showOnLg?: boolean;
  showOn?: number;
  hideOn?: number;
}

const hideOn = (size, props) => {
  return typeof props[
    `hideOn${size[0].toUpperCase()}${size.slice(1).toLowerCase()}`
  ] !== 'undefined'
    ? `
      ${createMediaQuery(gridTheme.breakpoints[size])} {
        display: none;
      }
    `
    : ``;
};

const hideOnCustomSize = props => {
  return typeof props.hideOn !== 'undefined'
    ? `
    ${createMediaQuery(props.hideOn)} {
      display: none;
    }
  `
    : ``;
};

const showOn = (size, props) => {
  return typeof props[
    `showOn${size[0].toUpperCase()}${size.slice(1).toLowerCase()}`
  ] !== 'undefined'
    ? `
      ${createMediaQuery(gridTheme.breakpoints[size])} {
        display: block;
      }
    `
    : ``;
};

const showOnCustomSize = props => {
  return typeof props.showOn !== 'undefined'
    ? `
    ${createMediaQuery(props.showOn)} {
      display: block;
    }
  `
    : ``;
};

export type ResponsiveBoxProps = BoxProps & ResponsiveBreakpointsProps;

const ResponsiveBox = styled(Box)<ResponsiveBoxProps>`
  ${props => hideOn('xs', props)}
  ${props => hideOn('sm', props)}
  ${props => hideOn('md', props)}
  ${props => hideOn('lg', props)}
  ${props => hideOnCustomSize(props)}

  ${props => showOn('xs', props)}
  ${props => showOn('sm', props)}
  ${props => showOn('md', props)}
  ${props => showOn('lg', props)}
  ${props => showOnCustomSize(props)}

  ${props => (typeof props.show !== 'undefined' ? `display: block;` : null)}
  ${props => (typeof props.hide !== 'undefined' ? `display: none;` : null)}
`;

ResponsiveBox.displayName = 'ResponsiveBox';

export default ResponsiveBox;
