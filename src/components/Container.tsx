import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const maxWidth = props =>
  props.maxWidth
    ? { maxWidth: `${props.maxWidth}px` }
    : { maxWidth: props.theme.maxContainerWidth };

export type ContainerProps = {
  maxWidth?: number;
} & SpaceProps;

const Container = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;

  ${space};
  ${maxWidth};
`;

Container.displayName = 'Container';

export default Container;
