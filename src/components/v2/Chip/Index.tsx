import React from 'react';
import { ChipContainer, IconSpan, Text } from './styled';

export interface ChipProps {
  label: string | React.ReactNode;
  color?: 'light-blue' | 'light-green';
  icon?: React.ReactNode;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ label, color, icon, className = '' }) => {
  return (
    <ChipContainer
      className={`chip${color ? ` chip--${color}` : ''} ${className}`.trim()}
      color={color}
    >
      {icon && <IconSpan>{icon as any}</IconSpan>}
      <Text>{label as any}</Text>
    </ChipContainer>
  );
};

export default Chip;
