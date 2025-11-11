import styled from 'styled-components';
import { focusRing } from '../../../theme';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Noto Sans', sans-serif;

  .provider-appointment-calendar {
    border: none;
    font-family: 'Noto Sans', sans-serif;

    .react-datepicker__header {
      background-color: white;
      border-bottom: none;
      padding-top: 0;
    }

    .react-datepicker__current-month {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      padding: 16px 0;
    }

    .react-datepicker__day-names {
      display: flex;
      justify-content: space-around;
      margin-top: 8px;
      margin-bottom: 8px;
    }

    .react-datepicker__day-name {
      color: #666;
      font-size: 14px;
      font-weight: 600;
      width: 2.5rem;
      line-height: 2.5rem;
      margin: 0.166rem;
    }

    .react-datepicker__week {
      display: flex;
      justify-content: space-around;
    }

    .react-datepicker__day {
      width: 2.5rem;
      line-height: 2.5rem;
      margin: 0.166rem;
      color: #333;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:focus {
        outline: none;
        box-shadow: ${focusRing};
      }

      &:hover:not(.react-datepicker__day--disabled):not(.react-datepicker__day--outside-month) {
        background-color: #e8f4fc;
        color: #0066cc;
      }

      &.react-datepicker__day--selected {
        background-color: #0066cc;
        color: white;
        font-weight: 600;
      }

      &.react-datepicker__day--keyboard-selected {
        background-color: #cce5ff;
        color: #0066cc;
      }

      &.react-datepicker__day--disabled {
        color: #ccc;
        cursor: not-allowed;
        pointer-events: none;
      }

      &.react-datepicker__day--outside-month {
        color: #ccc;
      }

      &.react-datepicker__day--today {
        font-weight: 600;
        border: 2px solid #0066cc;
      }
    }

    .react-datepicker__navigation {
      top: 16px;
      width: 40px;
      height: 40px;
      border: none;
      background: none;

      &:hover {
        background-color: #f0f0f0;
        border-radius: 4px;
      }

      &.react-datepicker__navigation--previous {
        left: 10px;
      }

      &.react-datepicker__navigation--next {
        right: 10px;
      }

      .react-datepicker__navigation-icon::before {
        border-color: #333;
        border-width: 2px 2px 0 0;
      }
    }

    /* Custom header styles */
    .custom-header-days,
    .custom-header-months,
    .custom-header-years {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 10px;
      margin-bottom: 16px;

      button,
      span {
        background: none;
        border: none;
        font-size: 20px;
        color: #333;
        cursor: pointer;
        padding: 8px 12px;
        border-radius: 4px;
        transition: background-color 0.2s ease;

        &:hover:not(:disabled) {
          background-color: #f0f0f0;
        }

        &:disabled {
          color: #ccc;
          cursor: not-allowed;
        }

        &:focus {
          box-shadow: ${focusRing};
          outline: none;
        }
      }

      span {
        font-size: 18px;
        font-weight: 600;
        color: #333;
        user-select: none;
      }
    }

    /* Months view - stack navigation above grid */
    .custom-header-months {
      flex-direction: column;
      align-items: stretch;

      .custom-header-months-navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 16px;
      }
    }

    /* Years view - stack navigation above grid */
    .custom-header-years {
      flex-direction: column;
      align-items: stretch;

      .custom-header-years-navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 16px;
      }
    }

    .month-grid,
    .year-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 16px;
      padding: 0 10px;
    }

    .month-cell,
    .year-cell {
      padding: 12px;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      color: #333;
      transition: all 0.2s ease;
      user-select: none;

      &:hover {
        background-color: #e8f4fc;
        color: #0066cc;
      }

      &.selected {
        background-color: #0066cc;
        color: white;
        font-weight: 600;
      }

      &:focus {
        outline: none;
        box-shadow: ${focusRing};
      }
    }

    .year-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const AvailabilityContainer = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export const AvailabilityLabel = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 12px;
  font-weight: 400;
`;

export const DateDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  margin-bottom: 16px;
`;

export const CalendarIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const DateText = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

export const SlotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`;

export const TimeSlot = styled.button`
  padding: 12px 24px;
  background-color: white;
  border: 2px solid #0066cc;
  border-radius: 24px;
  color: #0066cc;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Noto Sans', sans-serif;

  &:hover {
    background-color: #0066cc;
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: ${focusRing};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const NoDateMessage = styled.div`
  text-align: center;
  padding: 20px 0;
  margin-top: 16px;

  p {
    color: #333;
    font-size: 16px;
    margin: 0;
  }
`;

export const RequestAppointmentButton = styled.a`
  display: inline-block;
  padding: 12px 32px;
  background-color: white;
  border: 2px solid #0066cc;
  border-radius: 24px;
  color: #0066cc;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Noto Sans', sans-serif;

  &:hover {
    background-color: #0066cc;
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: ${focusRing};
  }

  &:active {
    transform: scale(0.98);
  }
`;
