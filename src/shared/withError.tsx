import React, { PureComponent, ReactNode, FocusEvent } from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components';
import FormField from '../components/FormField/FormField';
import Label from '../components/Label/Label';
import Box from '../components/Box/Box';
import FieldError, {
  error as errorStyle,
} from '../components/FieldError/FieldError';

const StyledBox = styled(Box)`
  width: 100%;
  position: relative;
`;

const StyledError = styled(FieldError)`
  position: absolute;
  top: 100%;
`;

export type FieldProps = {
  id?: string;
  label?: string | ReactNode;
  pt?: string;
  icon?: ReactNode;
  errorMessage?: string;
  onBlur?: (event: FocusEvent) => any;
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
        ...rest
      } = this.props;
      const hasError =
        Boolean(errorMessage) ||
        Boolean(
          meta.touched &&
            (meta.error || (meta.submitError && !meta.dirtySinceLastSubmit)) &&
            !meta.submitting
        );

      return (
        <StyledBox pt={pt}>
          <FormField>
            {typeof label === 'object' ? label : null}
            {typeof label === 'string' ? <Label>{label}</Label> : null}

            <StyledField {...input} error={hasError} id={id} {...rest} />
            {icon || null}
          </FormField>
          {hasError ? (
            <StyledError id={`${id}Error`}>
              {errorMessage || meta.error || meta.submitError}
            </StyledError>
          ) : null}
        </StyledBox>
      );
    }
  };
};

export default withError;
