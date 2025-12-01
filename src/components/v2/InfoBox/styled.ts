import styled from 'styled-components';
import v2Theme, { focusRing } from '../../../theme/v2';

const StyledInfoBox = styled.div<{
  backgroundColor: string;
}>`
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  font-size: 16px;
  font-family: Noto Sans !important;
  padding: 16px;
  border-radius: 4px;
  margin-top: 10px;
  gap: 0.75em;
  line-height: 22px;

  h3 {
    color: var(--Colors-Core-Surface-on_surface, #000);

    font-family: var(--Typography-Typeface-Family, 'Noto Sans');
    font-size: var(--Typography-SIze-Label-Label_Large, 18px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Typography-Line-Height-Label-Label_Large, 24px);
  }

  a {
    color: rgba(0, 0, 0, 0.8);
    font-style: normal;
    font-weight: 600;
    text-decoration: underline;
    margin-left: 4px;

    &:focus {
      box-shadow: ${focusRing} !important;
      outline: none;
      transition: ${v2Theme.timingFunctions.easeInOut};
      border-radius: 4px;
    }
  }

  img {
    width: 24px;
    max-height: fit-content;
  }
`;

export default StyledInfoBox;
