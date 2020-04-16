import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export type ImageProps = {
  src: string;
  alt: string;
} & SpaceProps;

const Image: FunctionComponent<ImageProps> = ({
  src,
  alt,
  ...rest
}: ImageProps) => <img src={src} alt={alt} {...rest} />;

export default styled(Image)<SpaceProps>`
  ${space}
`;
