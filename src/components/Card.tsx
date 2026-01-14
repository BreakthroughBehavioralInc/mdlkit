import styled from 'styled-components';
import { themeGet, borderRadius, BorderRadiusProps } from 'styled-system';
import Box from './Box';

const boxShadow = props => {
  const boxShadows = {
    sm: {
      'box-shadow': props.theme.boxShadows[0],
    },
    md: {
      'box-shadow': props.theme.boxShadows[1],
    },
    lg: {
      'box-shadow': props.theme.boxShadows[2],
    },
    xl: {
      'box-shadow': props.theme.boxShadows[3],
    },
  };
  return boxShadows[props.boxShadowSize];
};

const boxBorder = props => ({
  border:
    props.borderWidth === 0
      ? '0'
      : `${props.borderWidth}px solid ${props.theme.colors[props.borderColor]}`,
});

type CardProps = {
  boxShadowSize?: 'sm' | 'md' | 'lg' | 'xl';
  borderColor?: string;
  borderWidth?: 0 | 1 | 2;
} & BorderRadiusProps;

const Card = styled(Box)<CardProps>`
  background-color: ${themeGet('colors.white')};

  ${boxShadow}
  ${boxBorder}
  ${borderRadius}
`;

Object.assign(Card, {
  defaultProps: {
    borderColor: 'borderGray',
    borderRadius: 1,
    borderWidth: 1,
  },
});

Card.displayName = 'Card';

export default Card;
