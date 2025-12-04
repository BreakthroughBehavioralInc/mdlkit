import React, { useRef } from 'react';
import { PillButton, PillGroupContainer } from './styled';

interface PillOption {
  label: string;
  value: string;
}

interface PillGroupProps {
  options: PillOption[];
  value?: string;
  onValueChange?: (newValue: string) => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const PillGroup: React.FC<PillGroupProps> = ({
  options,
  value,
  onValueChange,
  disabled = false,
  className = '',
  style,
}) => {
  const pillRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleClick = (optionValue: string) => {
    if (!disabled && onValueChange) {
      onValueChange(optionValue);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (disabled) return;

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const nextIndex = (index + 1) % options.length;
      pillRefs.current[nextIndex]?.focus();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const nextIndex = (index - 1 + options.length) % options.length;
      pillRefs.current[nextIndex]?.focus();
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (onValueChange) {
        onValueChange(options[index].value);
      }
    }
  };

  return (
    <PillGroupContainer className={`pill-container ${className}`} style={style}>
      {options.map((option, index) => {
        const isSelected = value === option.value;
        const tabIndex =
          value !== undefined ? (isSelected ? 0 : -1) : index === 0 ? 0 : -1;

        return (
          <PillButton
            key={option.value}
            isSelected={isSelected}
            onClick={() => handleClick(option.value)}
            disabled={disabled}
            onKeyDown={e => handleKeyDown(e, index)}
            ref={(el: HTMLButtonElement | null) => {
              if (el) {
                pillRefs.current[index] = el;
              }
            }}
            tabIndex={tabIndex}
            className={'pill-option'}
          >
            {option.label}
          </PillButton>
        );
      })}
    </PillGroupContainer>
  );
};

export default PillGroup;
