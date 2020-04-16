import React, { StatelessComponent } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import FormField from './FormField';
import Label from './Label';
import FieldError, { error } from './FieldError';
import Select, { SelectProps } from './Select';

const StyledField = styled(Select)<SelectProps & { error: boolean }>`
  ${error}
`;

interface Option {
  value: string | number;
  name: string;
}

type InputFieldProps = {
  label?: string;
  options: Option[];
  blank?: boolean;
} & FieldRenderProps<any>;

const InputField: StatelessComponent<InputFieldProps> = ({
  label,
  options,
  blank,
  input,
  meta,
}: InputFieldProps) => {
  const hasError = meta.touched && meta.error;
  return (
    <FormField>
      {label ? <Label smallLabel={!blank}>{label}</Label> : null}
      <StyledField {...input} error={hasError}>
        {blank ? <option value="" /> : null}
        {options.map(option => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </StyledField>
      {hasError ? <FieldError>{meta.error}</FieldError> : null}
    </FormField>
  );
};

export default InputField;
