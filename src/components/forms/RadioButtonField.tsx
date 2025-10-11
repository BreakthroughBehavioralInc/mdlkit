import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import RadioButton from '../RadioButton';

type RadioFieldProps = {
  id?: string;
  label?: string;
  disabled?: boolean;
} & FieldRenderProps<any>;

const RadioButtonField: FunctionComponent<RadioFieldProps> = ({
  id,
  label,
  input,
  disabled,
}: RadioFieldProps) => {
  return (
    <StyledLabel htmlFor={id || input.value}>
      <RadioButton
        id={id || input.value}
        disabled={Boolean(disabled)}
        label={label || ''}
        {...input}
      />
    </StyledLabel>
  );
};

const StyledLabel = styled.label<{ active?: boolean }>`
  pointer-events: all;
  cursor: pointer;
`;

RadioButtonField.displayName = 'RadioButtonField';

export default RadioButtonField;
