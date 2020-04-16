import styled from 'styled-components';
import { space, themeGet, SpaceProps } from 'styled-system';

export type ListGroupProps = SpaceProps;

const ListGroup = styled.ol<ListGroupProps>`
  list-style: inherit;
  padding-left: ${themeGet('space.sm')}px;

  > li {
    font-family: ${themeGet('textFont')};
    line-height: ${themeGet('lineHeights.display')};

    & + li {
      padding-top: ${themeGet('space.sm')}px;
    }
  }

  ${space}
`;

export default ListGroup;
