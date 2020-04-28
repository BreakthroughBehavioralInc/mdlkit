import styled from 'styled-components';

const maxWidth = props =>
  props.maxWidth
    ? { maxWidth: `${props.maxWidth}px` }
    : { maxWidth: props.theme.maxContainerWidth };

export interface ContainerProps {
  /** set the maximum width of the container */
  maxWidth?: number;
}

const Container = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  ${maxWidth};
`;

Container.displayName = 'Container';

export default Container;