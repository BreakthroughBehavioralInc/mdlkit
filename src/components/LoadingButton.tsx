import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from './Button';
import LoadingIcon from './LoadingIcon';

const StyledButton = styled(Button)<{ isLoading?: boolean }>`
  ${({ isLoading, theme }) =>
    isLoading &&
    `
    position: relative;
    color: ${theme.colors.transparent};

    & > svg {
      position: absolute;
      left: calc(50% - 0.75em);
    }
  `}
`;

export interface LoadingButtonProps
  extends ButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
}

const LoadingButton: FunctionComponent<LoadingButtonProps> = ({
  isLoading,
  children,
  ...rest
}: LoadingButtonProps) => {
  return (
    <StyledButton isLoading={isLoading} {...rest}>
      {isLoading ? (
        <LoadingIcon
          width="1.5em"
          height="1.5em"
          color="primaryText"
          backgroundColor="primary"
        />
      ) : null}
      {children}
    </StyledButton>
  );
};

LoadingButton.displayName = 'LoadingButton';
LoadingButton.defaultProps = {
  isLoading: false,
};

export default LoadingButton;
