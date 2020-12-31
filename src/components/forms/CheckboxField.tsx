import React, { StatelessComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import Flex from '../Flex';
import Label from '../Label';
import FieldError from '../FieldError';
import Checkbox from '../Checkbox';

type CheckboxFieldProps = {
  label?: string | ReactNode;
  id?: string;
  disabled?: boolean;
} & FieldRenderProps<any>;

const StyledLabel = styled(Label)`
  display: flex;
  flex-direction: row;

  cursor: pointer;
  pointer-events: all;
  width: 100%;
`;

const CheckboxField: StatelessComponent<CheckboxFieldProps> = ({
  disabled,
  id,
  label,
  input,
  meta,
  ...rest
}: CheckboxFieldProps) => {
  const hasError = Boolean(meta.touched && meta.error);
  const checkboxId = id || input.name;
  return (
    <Flex column {...rest}>
      <StyledLabel p="none" htmlFor={checkboxId} color="text">
        <Checkbox id={checkboxId} disabled={disabled} {...input} />
        &nbsp;&nbsp;
        {label}
      </StyledLabel>

      {hasError ? <FieldError>{meta.error}</FieldError> : null}
    </Flex>
  );
};

export default CheckboxField;
