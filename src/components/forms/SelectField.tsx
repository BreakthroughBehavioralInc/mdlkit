import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
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
  errorMessage?: string;
} & FieldRenderProps<any>;

const SelectField: FunctionComponent<SelectFieldProps> = ({
  id,
  label,
  options,
  blank,
  input,
  meta,
  disabled,
  errorMessage,
}: SelectFieldProps) => {
  const hasError = meta.touched && meta.error;
  const errorValue = errorMessage || meta.error || meta.submitError;
  return (
    <FormField>
      {label ? <Label>{label}</Label> : null}
      <StyledField id={id} {...input} error={hasError} disabled={disabled}>
        {blank ? <option value="" /> : null}
        {options.map(option => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </StyledField>
      {hasError ? (
        <FieldError>
          {errorValue.id ? (
            <FormattedMessage
              id={errorValue.id}
              values={{ ...errorValue.values }}
            />
          ) : (
            errorValue
          )}
        </FieldError>
      ) : null}
    </FormField>
  );
};

export default SelectField;
