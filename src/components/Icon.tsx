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

interface TabInterface {
  tabIndex?: number;
}

export type ImgProps = SpaceProps & SizeProps & ImgInterface;

const Img = styled.img<ImgProps>`
  ${space};

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

export type IconProps = IconInterface & SpaceProps & SizeProps & TabInterface;

const Icon: FunctionComponent<IconProps> = ({
  name,
  size,
  ...rest
}: IconProps) => (
  <Img
    src={`https://mdlive.blob.core.windows.net/affiliations-prod/static_asset/${name}.svg`}
    alt={name}
    size={size}
    {...rest}
  />
);

// @ts-ignore
Icon.isIcon = true;
Icon.defaultProps = {
  size: 24,
};

// @ts-ignore
export default Icon;
