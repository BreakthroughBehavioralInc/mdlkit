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
  const [field] = childrenArray.filter((child: any) => child.type?.isField);
  const [label] = childrenArray.filter((child: any) => child.type?.isLabel);
  const [icon] = childrenArray.filter((child: any) => child.type?.isIcon);
  const [error] = childrenArray.filter((child: any) => child.type?.isError);

  const id = field && ((field as any).props?.id || (field as any).props?.name);
  const styledLabel =
    label &&
    React.cloneElement(label as React.ReactElement, {
      htmlFor: id,
    });

  return (
    <StyledFlex column>
      <>
        {styledLabel}
        <IconField>
          <>
            {field}
            {icon}
          </>
        </IconField>
        {error}
      </>
    </StyledFlex>
  );
};

FormField.displayName = 'FormField';

export default FormField;
