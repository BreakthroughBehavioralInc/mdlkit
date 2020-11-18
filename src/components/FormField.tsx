import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import IconField from './IconField';

const StyledFlex = styled(Flex)`
  width: 100%;
  position: relative;
`;

const FormField = ({ children }: { children: any }) => {
  const childrenArray = React.Children.toArray(children);
  // @ts-ignore
  const [field] = childrenArray.filter(child => child.type.isField);
  // @ts-ignore
  const [label] = childrenArray.filter(child => child.type.isLabel);
  // @ts-ignore
  const [icon] = childrenArray.filter(child => child.type.isIcon);
  // @ts-ignore
  const [error] = childrenArray.filter(child => child.type.isError);

  const id = field && (field.props.id || field.props.name);
  const styledLabel =
    label &&
    React.cloneElement(label, {
      htmlFor: id,
    });

  return (
    <StyledFlex column>
      {styledLabel}
      <IconField>
        {field}
        {icon}
      </IconField>
      {error}
    </StyledFlex>
  );
};

FormField.displayName = 'FormField';

export default FormField;
