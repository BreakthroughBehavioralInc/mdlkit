import React, { StatelessComponent } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import Label from './Label';
import Radio from './Radio';

type RadioFieldProps = {
  id: string;
  label: string;
  disabled?: boolean;
} & FieldRenderProps<any>;

const RadioField: StatelessComponent<RadioFieldProps> = ({
  id,
  label,
  disabled,
  input,
  ...rest
}: RadioFieldProps) => {
  const radioId = id || input.value;

  return (
    <StyledLabel color="text" htmlFor={radioId} p="none" {...rest}>
      <Radio id={radioId} disabled={disabled} {...input} />
      &nbsp;&nbsp;
      {label}
    </StyledLabel>
  );
};

const StyledLabel = styled(Label)`
  cursor: pointer;
  pointer-events: all;
`;

RadioField.displayName = 'RadioField';

export default RadioField;
