import { MouseEvent } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export type TransparentButtonProps = {
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
  ariaLabel?: string;
  fullWidth?: boolean;
} & SpaceProps;

const fullWidth = props => (props.fullWidth ? { width: '100%' } : undefined);

const TransparentButton = styled.button<TransparentButtonProps>`
  background-color: ${({ theme }) => theme.colors.transparent};
  border: none;
  cursor: pointer;
  padding: 0;
  color: inherit;

  ${fullWidth}
  ${space}
`;

TransparentButton.displayName = 'TransparentButton';

export default TransparentButton;
