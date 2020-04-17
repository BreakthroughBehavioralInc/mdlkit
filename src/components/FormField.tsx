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
  const smallLabel =
    label &&
    ((field && !!field.props.value) ||
      (field && !field.props.value && label.props.smallLabel));
  const id = field && (field.props.id || field.props.name);

  const styledLabel =
    label &&
    React.cloneElement(label, {
      htmlFor: id,
      smallLabel,
      style: {
        ...label.props.style,
        position: 'absolute',
        top: smallLabel ? 0 : 14,
      },
    });

  const styledField =
    field &&
    React.cloneElement(field, {
      active: smallLabel,
    });

  return (
    <StyledFlex column>
      {styledLabel}
      <IconField>
        {styledField}
        {icon}
      </IconField>
    </StyledFlex>
  );
};

FormField.displayName = 'FormField';

export default FormField;
