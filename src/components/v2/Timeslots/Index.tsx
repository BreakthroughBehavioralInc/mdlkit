import React, { useState, useRef } from 'react';
import {
  TimeslotsWrapper,
  TimeslotsContainer,
  SlotButton,
  ToggleButton,
  ToggleButtonText,
} from './styled';

export interface Timeslot {
  timeslot: string;
  phys_availability_id?: number;
  availability_type?: string;
  start_date?: string;
  end_date?: string;
  ariaProvider?: string;
}

export interface TimeslotsProps {
  /** Array of available timeslots */
  slots: Timeslot[];
  /** Currently selected timeslot value */
  selectedSlot?: string;
  /** Callback when a slot is selected */
  onSlotSelect?: (slot: Timeslot) => void;
  /** Number of slots to show initially before "See more" */
  initialVisibleCount?: number;
  /** Label for "See more" button */
  seeMoreLabel?: string;
  /** Label for "See less" button */
  seeLessLabel?: string;
  /** Custom time formatter function */
  formatTime?: (timeslot: string) => string;
  /** Additional CSS class name */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Optional provider name to append to ARIA labels (e.g., "Dr. Alan Smith") */
  ariaProvider?: string;
  /** Number of columns per row in the grid layout (3, 4, or 5) */
  columnsPerRow?: 3 | 4 | 5;
}

/**
 * Formats a timeslot string to a human-readable time (e.g., "2:30 PM")
 */
const defaultFormatTime = (timeslot: string): string => {
  const date = new Date(timeslot);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

/**
 * Maps availability_type to a method number (for data attributes)
 * - video: 1
 * - phone: 2
 * - video or phone (or multiple): 3
 */
const getAvailabilityMethod = (
  availabilityType?: string
): number | undefined => {
  if (!availabilityType) return undefined;

  const types = availabilityType.split(' or ');
  if (types.length > 1) return 3;
  if (types[0] === 'video') return 1;
  return 2;
};

const Timeslots: React.FC<TimeslotsProps> = ({
  slots,
  selectedSlot,
  onSlotSelect,
  initialVisibleCount = 8,
  seeMoreLabel = 'See more times',
  seeLessLabel = 'See less times',
  formatTime = defaultFormatTime,
  className = '',
  style,
  disabled = false,
  ariaProvider,
  columnsPerRow = 4,
}) => {
  const [showAll, setShowAll] = useState(false);
  const slotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const hasMoreSlots = slots.length > initialVisibleCount;
  const initialSlots = slots.slice(0, initialVisibleCount);
  const additionalSlots = slots.slice(initialVisibleCount);

  const handleSlotClick = (slot: Timeslot) => {
    if (!disabled && onSlotSelect) {
      onSlotSelect(slot);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (disabled) return;

    const isInInitialSection = index < initialVisibleCount;
    const totalInSection = isInInitialSection
      ? initialSlots.length
      : additionalSlots.length;
    const sectionStartIndex = isInInitialSection ? 0 : initialVisibleCount;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndexInSection =
        (index - sectionStartIndex + 1) % totalInSection;
      const nextIndex = sectionStartIndex + nextIndexInSection;
      slotRefs.current[nextIndex]?.focus();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndexInSection =
        (index - sectionStartIndex - 1 + totalInSection) % totalInSection;
      const prevIndex = sectionStartIndex + prevIndexInSection;
      slotRefs.current[prevIndex]?.focus();
    }
  };

  const handleToggle = () => {
    setShowAll(prev => !prev);
  };

  const renderSlotButton = (
    slot: Timeslot,
    index: number,
    isInInitialSection: boolean
  ) => {
    const isSelected = selectedSlot === slot.timeslot;
    const availabilityMethod = getAvailabilityMethod(slot.availability_type);

    // Use roving tabindex pattern:
    // - First slot in each section is tabbable (tabIndex={0})
    // - All other slots are not tabbable (tabIndex={-1})
    const isFirstInSection = isInInitialSection
      ? index === 0
      : index === initialVisibleCount;
    const tabIndex = isFirstInSection ? 0 : -1;

    // Calculate position within the section for screen readers
    const positionInSection = isInInitialSection
      ? index + 1
      : index - initialVisibleCount + 1;
    const totalInSection = isInInitialSection
      ? initialSlots.length
      : additionalSlots.length;

    const formattedTime = formatTime(slot.timeslot);
    const provider = slot.ariaProvider || ariaProvider;
    const providerText = provider ? ` with ${provider}` : '';
    const ariaLabel = `${formattedTime}${providerText}, ${positionInSection} of ${totalInSection}`;

    return (
      <SlotButton
        key={slot.timeslot}
        isSelected={isSelected}
        onClick={() => handleSlotClick(slot)}
        onKeyDown={e => handleKeyDown(e, index)}
        disabled={disabled}
        ref={(el: HTMLButtonElement | null) => {
          slotRefs.current[index] = el;
        }}
        tabIndex={tabIndex}
        data-timeslot={slot.timeslot}
        data-availability-method={availabilityMethod}
        data-phys-availability-id={slot.phys_availability_id}
        aria-pressed={isSelected}
        aria-label={ariaLabel}
        type="button"
      >
        {formatTime(slot.timeslot)}
      </SlotButton>
    );
  };

  const toggleButtonLabel = showAll ? seeLessLabel : seeMoreLabel;
  const toggleAriaLabel = ariaProvider
    ? `${toggleButtonLabel} for ${ariaProvider}`
    : toggleButtonLabel;

  return (
    <TimeslotsWrapper className={`timeslots ${className}`.trim()} style={style}>
      <TimeslotsContainer columnsPerRow={columnsPerRow}>
        {initialSlots.map((slot, index) => renderSlotButton(slot, index, true))}
      </TimeslotsContainer>

      {hasMoreSlots && (
        <ToggleButton
          onClick={handleToggle}
          ref={toggleRef}
          type="button"
          aria-expanded={showAll}
          tabIndex={-1}
        >
          <ToggleButtonText tabIndex={0} aria-label={toggleAriaLabel}>
            {toggleButtonLabel}
          </ToggleButtonText>
        </ToggleButton>
      )}

      {showAll && hasMoreSlots && (
        <TimeslotsContainer columnsPerRow={columnsPerRow}>
          {additionalSlots.map((slot, index) =>
            renderSlotButton(slot, index + initialVisibleCount, false)
          )}
        </TimeslotsContainer>
      )}
    </TimeslotsWrapper>
  );
};

Timeslots.displayName = 'Timeslots';

export default Timeslots;
