import React, { StatelessComponent } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import FormField from '../FormField';
import Label from '../Label';
import FieldError, { error } from '../FieldError';
import Select, { SelectProps } from '../Select';

const StyledField = styled(Select)<SelectProps & { error: boolean }>`
  ${error}
`;

interface Option {
  value: string | number;
  name: string;
}

type SelectFieldProps = {
  id: string;
  label?: string;
  options: Option[];
  blank?: boolean;
  disabled?: boolean;
} & FieldRenderProps<any>;

const SelectField: StatelessComponent<SelectFieldProps> = ({
  id,
  label,
  options,
  blank,
  input,
  meta,
  className,
  disabled,
}: SelectFieldProps) => {
  const hasError = meta.touched && meta.error;
  return (
    <FormField>
      {label ? <Label>{label}</Label> : null}
      <StyledField
        id={id}
        {...input}
        error={hasError}
        disabled={disabled}
        className={className}
      >
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

export default SelectField;
