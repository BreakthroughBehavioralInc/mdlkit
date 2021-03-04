import React, { StatelessComponent, ReactNode } from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from './Button';
import LoadingIcon from './LoadingIcon';

const StyledButton = styled(Button)<{ loading?: boolean }>`
  ${({ loading, theme }) =>
    loading &&
    `
    position: relative;
    color: ${theme.colors.transparent};

    & > svg {
      position: absolute;
      left: calc(50% - 0.75em);
    }
  `}
`;

export interface LoadingButtonProps extends ButtonProps {
  children: ReactNode;
  loading?: boolean;
}

const LoadingButton: StatelessComponent<LoadingButtonProps> = ({
  loading,
  children,
  ...rest
}: LoadingButtonProps) => {
  return (
    <StyledButton loading={loading} {...rest}>
      {loading ? (
        <LoadingIcon
          width="1.5em"
          height="auto"
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
  loading: false,
};

export default Button;
