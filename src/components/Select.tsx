import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { borders, field, disabled } from './forms/Styles';

import Flex from './Flex';
import Icon, { IconProps } from './Icon';

const ClickableIcon = styled(Icon)<IconProps>`
  pointer-events: none;
`;

export type SelectProps = {
  disabled?: boolean;
  icon?: ReactNode;
} & SpaceProps;

const SelectBase = styled.select<SelectProps>`
  ${borders}
  ${field}

  ${space}
  ${disabled}
`;

const Select = styled(({ icon, ...rest }) => (
  <Flex width={1} align="center">
    <SelectBase {...rest} />
    {icon || <ClickableIcon size={12} ml={-32} name="chevronDown" />}
  </Flex>
))``;

// @ts-ignore
Select.isField = true;

export default Select;
