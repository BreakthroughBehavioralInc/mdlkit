import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Text, { TextProps } from '../Text/Text';

export type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & TextProps;

const Heading = styled(Text)<HeadingProps>`
  font-family: ${themeGet('headingFont')};
`;

Heading.displayName = 'Heading';

Heading.defaultProps = {
  fontSize: 4,
  fontWeight: 'bolder',
  lineHeight: 'display',
  color: 'primary',
};

export default Heading;
