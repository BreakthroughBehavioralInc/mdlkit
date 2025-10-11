import styled from 'styled-components';
import Text, { TextProps } from './Text';

export type HeadingProps = {
  as: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & TextProps;

const SubHeading = styled(Text)<HeadingProps>``;

SubHeading.displayName = 'SubHeading';

Object.assign(SubHeading, {
  defaultProps: {
    fontSize: 2,
    fontWeight: 'bold',
    lineHeight: 'display',
    color: 'text',
  },
});

export default SubHeading;
