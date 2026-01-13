import styled, { css } from 'styled-components';
import v2Theme, { focusRing } from '../../../theme/v2';

const baseStyles = css`
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  padding: 12px 40px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${v2Theme.timingFunctions.easeOut}, scale 150ms ease-out;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  width: fit-content;
  white-space: nowrap;
  scale: 1;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus {
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: ${focusRing};
  }

  &:active {
    scale: 0.985;
  }
`;

const roundedStyles = css`
  border-radius: 40px;
`;

const outlinedStyles = css`
  border: 1px solid #0379ce;
  background-color: transparent;
  color: #0379ce;

  &:hover {
    background-color: #0379ce;
    color: #fff;
    svg,
    img {
      filter: brightness(10);
    }
  }

  &:focus-visible {
    border-color: transparent;
  }
`;

const defaultStyles = css`
  border: 2px solid transparent;
  background-color: #0379ce;
  color: #fff;

  &:hover {
    background-color: #025a9b;
    border-color: #025a9b;
  }

  &:focus-visible {
    border: 2px solid #fff;
    background-color: #025a9b;
  }
`;

const errorStyles = css`
  border: none;
  background-color: #dc3545;
  color: #fff;

  &:hover {
    background-color: #c72130;
    border-color: #c72130;
  }
`;

const textStyles = css`
  border: none;
  background-color: transparent;
  color: #0379ce;

  &:hover {
    color: #025a9b;
    background-color: #eaeaeb !important;
    svg,
    img {
      filter: brightness(0.8);
    }
  }
`;

interface ButtonRootProps {
  full?: boolean;
  variant?: 'outlined' | 'default' | 'error' | 'text';
  rounded?: boolean;
}

export const ButtonRoot = styled.button<ButtonRootProps>`
  ${baseStyles}

  ${props =>
    props.full &&
    css`
      width: 100%;
    `}

  ${props => props.variant === 'outlined' && outlinedStyles}

  ${props => props.variant === 'default' && defaultStyles}

  ${props => props.variant === 'error' && errorStyles}

  ${props => props.variant === 'text' && textStyles}

  ${props => props.rounded && roundedStyles}
` as any;

interface IconWrapperProps {
  position?: 'left' | 'right';
  size?: string;
}

export const IconWrapper = styled.span<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.position === 'left' &&
    css`
      margin-right: 4px;
    `}

  ${props =>
    props.position === 'right' &&
    css`
      margin-left: 4px;
    `}

  svg,
  img {
    transition: ${v2Theme.timingFunctions.easeInOut};
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
` as any;
