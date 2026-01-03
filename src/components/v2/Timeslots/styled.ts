import styled from 'styled-components';
import v2Theme, { focusRing } from '../../../theme/v2';

export const TimeslotsWrapper = styled.div`
  width: 100%;
`;

export const TimeslotsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 20px 0 15px;
`;

export const SlotButton = styled.button<{ isSelected: boolean }>`
  appearance: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 96px;
  padding: 0;
  border: 1.5px solid ${v2Theme.colors.primary};
  border-radius: 21.5px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  cursor: pointer;
  transition: background-color ${v2Theme.duration.fast}
      ${v2Theme.timingFunctions.easeInOut},
    color ${v2Theme.duration.fast} ${v2Theme.timingFunctions.easeInOut};

  background-color: ${({ isSelected }) =>
    isSelected ? v2Theme.colors.primary : 'transparent'};
  color: ${({ isSelected }) =>
    isSelected ? v2Theme.colors.white : v2Theme.colors.primary};

  &:hover {
    background-color: ${v2Theme.colors.primary};
    color: ${v2Theme.colors.white};
    text-decoration: none;
  }

  &:focus {
    outline: none;
    box-shadow: ${focusRing};
  }

  &:active {
    background-color: ${v2Theme.colors.primary};
    color: ${v2Theme.colors.white};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: ${({ isSelected }) =>
        isSelected ? '#0379ce' : 'transparent'};
      color: ${({ isSelected }) =>
        isSelected ? v2Theme.colors.white : '#0379ce'};
    }
  }
`;

export const ToggleButton = styled.button`
  appearance: none;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export const ToggleButtonText = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: '#0379ce';
  border-radius: 3px;

  &:focus {
    outline: none;
    box-shadow: ${focusRing};
  }
`;
