import React, { PureComponent, ReactNode } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import FormField from '../FormField';
import Label from '../Label';
import Box from '../Box';
import FieldError, { error as errorStyle } from '../FieldError';

const StyledBox = styled(Box)`
  width: 100%;
`;

export type FieldProps = {
  id: string;
  label?: string | ReactNode;
  pt?: string;
  mr?: string;
  ml?: string;
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
        mr,
        ml,
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

      const errorValue = errorMessage || meta.error || meta.submitError;
      return (
        <StyledBox pt={pt} mr={mr} ml={ml}>
          <FormField>
            {typeof label === 'object' ? label : null}
            {typeof label === 'string' ? <Label>{label}</Label> : null}

            <StyledField {...input} error={showError} id={id} {...rest} />
            {icon || null}
          </FormField>
          {showError ? (
            <FieldError id={`${id}Error`} aria-describedby={id}>
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
        </StyledBox>
      );
    }
  };
};

export default withError;
