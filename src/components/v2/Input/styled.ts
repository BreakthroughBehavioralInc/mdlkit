import styled, { css } from 'styled-components';
import v2Theme, { focusRing } from '../../../theme/v2';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &.input-error {
    .input-container {
      background-color: #fae1e3;
      border-color: #dc3545;
      box-shadow: none !important;
    }

    .select-container-button,
    input[type='number'] {
      background-color: #fae1e3;
      border-color: #dc3545;
    }
  }
`;

interface InputContainerProps {
  error?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #757678;
  background: transparent;
  padding: 11px 12px;
  gap: 8px;
  transition: ${v2Theme.timingFunctions.easeOut};
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 24px;
  ${props =>
    props.error &&
    css`
      border-color: #dc3545;
    `}
  min-height: 48px;

  &:focus-within {
    border-color: transparent;
    box-shadow: ${focusRing} !important;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  & > input[type='number'] {
    height: auto;
    border: none;
    padding: 0;
    border-radius: unset;
  }
  & > input[type='number']::-webkit-outer-spin-button,
  & > input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 4px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  width: 100%;
  color: #000;
`;

export const StyledInput = styled.input`
  border: none;
  background: transparent !important;
  font-size: inherit;
  line-height: inherit;
  outline: none;
  font-family: inherit;
  padding: 0;
  margin: 0;
  flex: 1;
  &::placeholder {
    color: #757678;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:focus {
    outline: none !important;
    border: none;
    box-shadow: none !important;
  }
`;

interface IconImageProps {
  iconSize: number;
}

export const IconImage = styled.img<IconImageProps>`
  width: ${props => props.iconSize}px;
  height: ${props => props.iconSize}px;
  user-select: none;
  pointer-events: none;
`;

export const ClearButton = styled.button<{
  visible: boolean;
  iconSize: number;
}>`
  width: ${props => props.iconSize}px;
  height: ${props => props.iconSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  pointer-events: auto;
  padding: 0;
  border-radius: 2px;
  transition: ${v2Theme.timingFunctions.easeInOut};
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  svg {
    &:hover path {
      transition: ${v2Theme.timingFunctions.easeInOut};
      fill: #0379ce;
    }
  }
  &:focus {
    outline: none;
    box-shadow: ${focusRing} !important;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 4px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: #dc3545;
  width: 100%;
`;
