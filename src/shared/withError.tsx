import React, { PureComponent, ReactNode } from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components';
import FormField from '../components/FormField';
import Label from '../components/Label';
import Box from '../components/Box';
import FieldError, { error as errorStyle } from '../components/FieldError';

const StyledBox = styled(Box)`
  width: 100%;
`;

export type FieldProps = {
  id?: string;
  label?: string | ReactNode;
  pt?: string;
  icon?: ReactNode;
  errorMessage?: string;
  showInitialError?: boolean;
} & FieldRenderProps<any>;

const withError = FieldComponent => {
  const StyledField = styled(FieldComponent)<{ error: boolean }>`
    ${errorStyle}
  `;

  return class extends PureComponent<FieldProps> {
    render() {
      const {
        id,
        label,
        icon,
        input,
        meta,
        pt,
        errorMessage,
        showInitialError,
        ...rest
      } = this.props;
      const hasError =
        Boolean(errorMessage) ||
        Boolean(
          (meta.error || (meta.submitError && !meta.dirtySinceLastSubmit)) &&
            !meta.submitting
        );
      const showError = showInitialError
        ? hasError
        : Boolean(meta.touched && hasError);

      return (
        <StyledBox pt={pt}>
          <FormField>
            {typeof label === 'object' ? label : null}
            {typeof label === 'string' ? <Label>{label}</Label> : null}

            <StyledField {...input} error={showError} id={id} {...rest} />
            {icon || null}
          </FormField>
          {showError ? (
            <FieldError id={`${id}Error`}>
              {errorMessage || meta.error || meta.submitError}
            </FieldError>
          ) : null}
        </StyledBox>
      );
    }
  };
};

export default withError;
