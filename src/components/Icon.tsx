import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

interface SizeProps {
  size?: number;
}

interface ImgInterface {
  src: string;
  alt: string;
}

export type ImgProps = SpaceProps & SizeProps & ImgInterface;

const Img = styled.img<ImgProps>`
  ${space}

  width: ${({ size }) => size}px;
`;

export type IconName =
  | 'checkActive'
  | 'checkEmpty'
  | 'chevronDown'
  | 'chevronUp'
  | 'hide'
  | 'information'
  | 'search'
  | 'show';

export interface IconInterface {
  name: IconName;
}

export type IconProps = IconInterface & SpaceProps & SizeProps;

const Icon: FunctionComponent<IconProps> = ({
  name,
  size,
  ...rest
}: IconProps) => (
  <Img src={`../static/svg/${name}.svg`} alt={name} size={size} {...rest} />
);

// @ts-ignore
Icon.isIcon = true;
Icon.defaultProps = {
  size: 24,
};

export default Icon;
