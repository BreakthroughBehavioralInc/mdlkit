import styled, { css } from 'styled-components';
import { CSSProperties } from 'react';

export const FlexRoot = styled.div<{
  direction: CSSProperties['flexDirection'];
  gap: CSSProperties['gap'];
  justify: CSSProperties['justifyContent'];
  align: CSSProperties['alignItems'];
  mdDirection?: CSSProperties['flexDirection'];
  mdGap?: CSSProperties['gap'];
  mdJustify?: CSSProperties['justifyContent'];
  mdAlign?: CSSProperties['alignItems'];
  lgDirection?: CSSProperties['flexDirection'];
  lgGap?: CSSProperties['gap'];
  lgJustify?: CSSProperties['justifyContent'];
  lgAlign?: CSSProperties['alignItems'];
  full?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.direction};
  gap: ${props => props.gap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
  ${props =>
    props.full &&
    css`
      width: 100%;
    `}

  ${props =>
    props.mdDirection &&
    css`
      @media (min-width: 768px) {
        flex-direction: ${props.mdDirection};
      }
    `}
  ${props =>
    props.mdGap &&
    css`
      @media (min-width: 768px) {
        gap: ${props.mdGap};
      }
    `}
  ${props =>
    props.mdJustify &&
    css`
      @media (min-width: 768px) {
        justify-content: ${props.mdJustify};
      }
    `}
  ${props =>
    props.mdAlign &&
    css`
      @media (min-width: 768px) {
        align-items: ${props.mdAlign};
      }
    `}
  ${props =>
    props.lgDirection &&
    css`
      @media (min-width: 1280px) {
        flex-direction: ${props.lgDirection};
      }
    `}
  ${props =>
    props.lgGap &&
    css`
      @media (min-width: 1280px) {
        gap: ${props.lgGap};
      }
    `}
  ${props =>
    props.lgJustify &&
    css`
      @media (min-width: 1280px) {
        justify-content: ${props.lgJustify};
      }
    `}
  ${props =>
    props.lgAlign &&
    css`
      @media (min-width: 1280px) {
        align-items: ${props.lgAlign};
      }
    `}
`;
