import styled from 'styled-components';
import Markdown from 'react-markdown';
import { hyperlink } from './Hyperlink';

const StyledMarkdown = styled(Markdown)`
  a {
    ${hyperlink}
  }
`;

export default StyledMarkdown;
