import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { borders, field } from '../shared/Styles';

import Flex from './Flex';
import Icon, { IconProps } from './Icon';

const ClickableIcon = styled(Icon)<IconProps>`
  pointer-events: none;
`;

export type SelectProps = SpaceProps & { className?: string };

const SelectBase = styled.select<SelectProps>`
  ${borders}
  ${field}

  ${space}
`;

const Select = styled(props => (
  <Flex width={1} align="center">
    <SelectBase {...props} />
    <ClickableIcon size={12} ml={-32} name="chevronDown" />
  </Flex>
))``;

// @ts-ignore
Select.isField = true;

export default Select;
