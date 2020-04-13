import React, { StatelessComponent } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import Label from '../Label/Label';
import Radio from '../Radio/Radio';

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
  meta,
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
