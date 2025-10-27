import styled from 'styled-components';

export const StyledCalendarInputWrapper = styled.div`
  width: calc(100% - 4px);
  margin: 2px;

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
