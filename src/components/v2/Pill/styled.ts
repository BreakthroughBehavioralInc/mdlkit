import styled from 'styled-components';
import lightTheme, { focusRing } from '../../../theme';

const PillButton = styled.button<{ isSelected: boolean }>`
  appearance: none;
  background-color: ${({ isSelected }) =>
    isSelected ? '#0379ce' : 'transparent'};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#757678')};
  font-family: 'Noto Sans', sans-serif;
  border: 1px solid #757678;
  cursor: pointer;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  transition: ${lightTheme.timingFunctions.easeInOut};
  flex: 1;

  &:first-child {
    border-radius: 9999px 0 0 9999px;
  }
  &:last-child {
    border-radius: 0 9999px 9999px 0;
  }
  &:not(:first-child) {
    border-left: none;
  }

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#026ab3' : '#e5e5e5'};
  }

  &:focus {
    outline: none;
    box-shadow: ${focusRing} !important;
    z-index: 1;
  }

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
`;

const PillGroupContainer = styled.div`
  display: inline-flex;
`;

export { PillButton, PillGroupContainer };
