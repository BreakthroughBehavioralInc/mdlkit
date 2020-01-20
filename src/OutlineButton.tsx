import styled from 'styled-components';
import Button from './Button';

const OutlineButton = styled(Button)`
  color: ${props => props.theme.colors.primary};
  box-shadow: inset 0 0 0 2px ${props => props.theme.colors.primary};
  background-color: transparent;
  &:hover {
    color: ${props => (props.disabled ? null : props.theme.colors.secondary)};
    box-shadow: inset 0 0 0 2px
      ${props => (props.disabled ? null : props.theme.colors.secondary)};
    background-color: transparent;
  }
`;
OutlineButton.displayName = 'OutlineButton';

export default OutlineButton;
