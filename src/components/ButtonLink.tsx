import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { bold, align } from './Text';
import { hyperlink } from './Hyperlink';

export type ButtonLinkProps = {
  bold?: boolean;
  id?: string;
  align?: 'center' | 'left' | 'right';
  textColor?: string;
  type?: string;
  onClick?: (e: any) => any;
} & SpaceProps;

export const ButtonLink = styled.button<ButtonLinkProps>`
  background-color: ${({ theme }) => theme.colors.transparent};
  border: none;
  font-size: 100%;
  padding: 0;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${bold}
  ${align}

  ${hyperlink}

  ${space}
`;

ButtonLink.displayName = 'ButtonLink';
ButtonLink.defaultProps = {
  bold: true,
};

export default ButtonLink;
