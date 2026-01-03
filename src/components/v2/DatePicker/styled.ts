import styled from 'styled-components';
import { focusRing } from '../../../theme/v2';

export const StyledCalendarInputWrapper = styled.div`
  width: calc(100% - 4px);
  margin: 2px;
  position: relative;

  input[type='date'] {
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #333333;
    height: unset;
    border: none;
    padding: 0;
  }

  input::-webkit-calendar-picker-indicator {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;

export const StyledDatePickerWrapper = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: auto;
  z-index: 1000;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px 12px;
  font-family: 'Noto Sans', sans-serif;

  /* Prevent overflow on smaller screens */
  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    width: min(320px, calc(100vw - 32px));
    padding: 6px 10px;
  }

  @media (max-width: 400px) {
    width: calc(100vw - 24px);
    padding: 6px 8px;
    top: calc(100% + 8px);
  }

  .provider-appointment-calendar {
    border: none;
    font-family: 'Noto Sans', sans-serif;
    width: 100%;

    .react-datepicker__month-container {
      width: 100%;
    }

    /* Responsive calendar adjustments */
    @media (max-width: 768px) {
      .react-datepicker__day,
      .react-datepicker__day-name {
        width: 2.2rem;
        line-height: 2.2rem;
        font-size: 15px;
        margin: 0.15rem;
      }

      .custom-header-days,
      .custom-header-months,
      .custom-header-years {
        padding: 12px 8px;
        margin-bottom: 12px;

        button,
        span {
          font-size: 18px;
          padding: 6px 10px;
        }

        span {
          font-size: 17px;
        }
      }

      .month-grid,
      .year-grid {
        gap: 10px;
        margin-top: 12px;
        padding: 0 8px;
      }

      .month-cell,
      .year-cell {
        padding: 10px 8px;
        font-size: 15px;
      }
    }

    @media (max-width: 400px) {
      .react-datepicker__day,
      .react-datepicker__day-name {
        width: 1.9rem;
        line-height: 1.9rem;
        font-size: 14px;
        margin: 0.1rem;
      }

      .custom-header-days,
      .custom-header-months,
      .custom-header-years {
        padding: 10px 6px;
        margin-bottom: 10px;

        button,
        span {
          font-size: 16px;
          padding: 4px 8px;
        }

        span {
          font-size: 15px;
        }
      }

      .month-grid,
      .year-grid {
        gap: 8px;
        margin-top: 10px;
        padding: 0 6px;
      }

      .month-cell,
      .year-cell {
        padding: 8px 6px;
        font-size: 14px;
      }
    }

    @media (max-width: 360px) {
      .react-datepicker__day,
      .react-datepicker__day-name {
        width: 1.75rem;
        line-height: 1.75rem;
        font-size: 13px;
        margin: 0.08rem;
      }

      .custom-header-days,
      .custom-header-months,
      .custom-header-years {
        padding: 8px 4px;
        margin-bottom: 8px;

        button,
        span {
          font-size: 14px;
          padding: 3px 6px;
        }

        span {
          font-size: 14px;
        }
      }

      .month-grid,
      .year-grid {
        gap: 6px;
        margin-top: 8px;
        padding: 0 4px;
      }

      .month-cell,
      .year-cell {
        padding: 6px 4px;
        font-size: 13px;
      }
    }

    .react-datepicker__header {
      background-color: white;
      border-bottom: none;
      padding-top: 0;
    }

    .react-datepicker__current-month {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      padding: 8px 0 6px;

      @media (max-width: 768px) {
        font-size: 15px;
        padding: 6px 0 4px;
      }

      @media (max-width: 400px) {
        font-size: 14px;
        padding: 6px 0 4px;
      }
    }

    .react-datepicker__day-names {
      display: flex;
      justify-content: space-around;
      margin-top: 4px;
      margin-bottom: 4px;

      @media (max-width: 400px) {
        margin-top: 2px;
        margin-bottom: 2px;
      }
    }

    .react-datepicker__day-name {
      color: #666;
      font-size: 13px;
      font-weight: 600;
      width: 2rem;
      line-height: 1.8rem;
      margin: 0.1rem;

      @media (max-width: 768px) {
        width: 1.9rem;
        line-height: 1.7rem;
        font-size: 12px;
        margin: 0.08rem;
      }

      @media (max-width: 400px) {
        width: 1.75rem;
        line-height: 1.6rem;
        font-size: 11px;
        margin: 0.06rem;
      }

      @media (max-width: 360px) {
        width: 1.6rem;
        line-height: 1.5rem;
        font-size: 10px;
        margin: 0.05rem;
      }
    }

    .react-datepicker__week {
      display: flex;
      justify-content: space-around;
    }

    .react-datepicker__day {
      width: 2rem;
      line-height: 1.8rem;
      margin: 0.1rem;
      color: #333;
      font-size: 14px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;

      @media (max-width: 768px) {
        width: 1.9rem;
        line-height: 1.7rem;
        font-size: 13px;
        margin: 0.08rem;
      }

      @media (max-width: 400px) {
        width: 1.75rem;
        line-height: 1.6rem;
        font-size: 12px;
        margin: 0.06rem;
      }

      @media (max-width: 360px) {
        width: 1.6rem;
        line-height: 1.5rem;
        font-size: 11px;
        margin: 0.05rem;
      }

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
      top: 8px;
      width: 28px;
      height: 28px;
      border: none;
      background: none;

      @media (max-width: 768px) {
        width: 24px;
        height: 24px;
        top: 6px;
      }

      @media (max-width: 400px) {
        width: 22px;
        height: 22px;
        top: 6px;
      }

      &:hover {
        background-color: #f0f0f0;
        border-radius: 4px;
      }

      &.react-datepicker__navigation--previous {
        left: 8px;

        @media (max-width: 768px) {
          left: 6px;
        }

        @media (max-width: 400px) {
          left: 4px;
        }
      }

      &.react-datepicker__navigation--next {
        right: 8px;

        @media (max-width: 768px) {
          right: 6px;
        }

        @media (max-width: 400px) {
          right: 4px;
        }
      }

      .react-datepicker__navigation-icon::before {
        border-color: #333;
        border-width: 2px 2px 0 0;

        @media (max-width: 400px) {
          border-width: 1.5px 1.5px 0 0;
        }
      }
    }

    /* Custom header styles */
    .custom-header-days,
    .custom-header-months,
    .custom-header-years {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 8px;
      margin-bottom: 6px;

      @media (max-width: 768px) {
        padding: 6px 6px;
        margin-bottom: 4px;
      }

      @media (max-width: 400px) {
        padding: 6px 4px;
        margin-bottom: 4px;
      }

      button,
      span {
        background: none;
        border: none;
        font-size: 16px;
        color: #333;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 4px;
        transition: background-color 0.2s ease;

        @media (max-width: 768px) {
          font-size: 15px;
          padding: 3px 6px;
        }

        @media (max-width: 400px) {
          font-size: 14px;
          padding: 3px 5px;
        }

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
        font-size: 16px;
        font-weight: 600;
        color: #333;
        user-select: none;

        @media (max-width: 768px) {
          font-size: 15px;
        }

        @media (max-width: 400px) {
          font-size: 14px;
        }
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
        margin-bottom: 6px;

        @media (max-width: 768px) {
          margin-bottom: 4px;
        }

        @media (max-width: 400px) {
          margin-bottom: 4px;
        }
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
        margin-bottom: 6px;

        @media (max-width: 768px) {
          margin-bottom: 4px;
        }

        @media (max-width: 400px) {
          margin-bottom: 4px;
        }
      }
    }

    .month-grid,
    .year-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
      margin-top: 6px;
      padding: 0 8px;

      @media (max-width: 768px) {
        gap: 5px;
        margin-top: 4px;
        padding: 0 6px;
      }

      @media (max-width: 400px) {
        gap: 4px;
        margin-top: 4px;
        padding: 0 4px;
      }
    }

    .month-cell,
    .year-cell {
      padding: 8px 6px;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      color: #333;
      transition: all 0.2s ease;
      user-select: none;

      @media (max-width: 768px) {
        padding: 6px 4px;
        font-size: 13px;
      }

      @media (max-width: 400px) {
        padding: 6px 3px;
        font-size: 12px;
      }

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

      @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: 360px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 6px;
      }
    }
  }
`;
