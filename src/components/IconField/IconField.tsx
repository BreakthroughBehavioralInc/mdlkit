import React from 'react';
import Flex from '../Flex/Flex';

const IconField = ({ children }: { children: any }) => {
  const childrenArray = React.Children.toArray(children).filter(
    child => child.type.isField || child.type.isIcon
  );

  const styledChildren = childrenArray.map((child, i) => {
    if (child.type.isIcon) {
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          flex: 'none',
          alignSelf: 'center',
          marginLeft: i === 0 ? 8 : -32,
          marginRight: i === 0 ? -32 : 8,
        },
      });
    }
    return React.cloneElement(child, {
      style: {
        ...child.props.style,
        paddingLeft: i === 0 ? undefined : 40,
        paddingRight: i === children.length - 1 ? undefined : 40,
      },
    });
  });

  return <Flex>{styledChildren}</Flex>;
};

export default IconField;
