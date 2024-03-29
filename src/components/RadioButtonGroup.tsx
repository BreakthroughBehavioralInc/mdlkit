import styled from 'styled-components';
import Box, { BoxProps } from './Box';

const RadioButtonGroup = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  & > label {
    flex: 1;

    &:first-child div[data-name='radio-button'] {
      border-radius: 25px 0 0 25px;
    }

    &:last-child div[data-name='radio-button'] {
      border-radius: 0 25px 25px 0;
    }
  }
`;

RadioButtonGroup.displayName = 'RadioButtonGroup';
RadioButtonGroup.defaultProps = {
  width: 1,
};

export default RadioButtonGroup;
