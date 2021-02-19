import styled from 'styled-components';
import Button, { ButtonProps } from './Button';

const OutlineButton = styled(Button)<ButtonProps>`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  position: relative;

  &:hover {
    color: ${props => (props.disabled ? null : props.theme.colors.primary)};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &:after {
    content: ' ';
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: ${({ theme }) => theme.radius};
  }
`;

OutlineButton.displayName = 'OutlineButton';

export default OutlineButton;
