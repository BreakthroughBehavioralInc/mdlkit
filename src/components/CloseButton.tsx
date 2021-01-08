import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import TransparentButton, { TransparentButtonProps } from './TransparentButton';
import { Close } from '../icons';

const StyledTransparentButton = styled(TransparentButton)`
  color: inherit;
  width: 20px;
  height: 20px;
`;

const CloseButton: FunctionComponent<TransparentButtonProps> = (
  props: TransparentButtonProps
) => (
  <StyledTransparentButton type="button" ariaLabel="close" {...props}>
    <Close size="14px" />
  </StyledTransparentButton>
);

export default CloseButton;
