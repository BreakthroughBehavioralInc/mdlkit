import styled, { css } from 'styled-components';
import Button from './Button';

const OutlineButton = styled(Button)`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  position: relative;

  ${({ theme, disabled }) => css`
    &:hover {
      color: ${disabled ? null : theme.colors.primary};
      background-color: ${theme.colors.lightGray};
    }
  `}

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
