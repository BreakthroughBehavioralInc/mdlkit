import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Timeslots, { Timeslot } from '../../src/components/v2/Timeslots/Index';

// Sample data matching the Rails available_hours format
const sampleSlots: Timeslot[] = [
  {
    timeslot: '2025-12-09T09:00:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video or phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T09:20:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T09:20:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video or phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T09:40:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T09:40:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T10:00:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T10:00:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T10:20:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T10:20:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video or phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T10:40:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T10:40:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video or phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T11:00:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T11:00:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video or phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T11:20:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T11:20:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video or phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T11:40:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T11:40:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video or phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T12:00:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T12:00:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video or phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T12:20:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T13:00:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video or phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T13:20:00.000-05:00',
  },
  {
    timeslot: '2025-12-09T14:30:00.000-05:00',
    phys_availability_id: 1150,
    availability_type: 'video or phone',
    start_date: '2025-12-09T00:00:00.000-05:00',
    end_date: '2025-12-09T14:50:00.000-05:00',
  },
];

const meta: Meta<typeof Timeslots> = {
  title: 'v2/Timeslots',
  component: Timeslots,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    slots: {
      control: false,
      description: 'Array of available timeslots',
    },
    selectedSlot: {
      control: { type: 'text' },
      description: 'Currently selected timeslot value',
    },
    onSlotSelect: {
      action: 'slot selected',
      description: 'Callback when a slot is selected',
    },
    initialVisibleCount: {
      control: { type: 'number' },
      description: 'Number of slots to show initially before "See more"',
    },
    seeMoreLabel: {
      control: { type: 'text' },
      description: 'Label for "See more" button',
    },
    seeLessLabel: {
      control: { type: 'text' },
      description: 'Label for "See less" button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the component is disabled',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class name',
    },
  },
  args: {
    slots: sampleSlots,
    initialVisibleCount: 8,
    seeMoreLabel: 'See more times',
    seeLessLabel: 'See less times',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper component for controlled state
const InteractiveTimeslots = (
  props: React.ComponentProps<typeof Timeslots>
) => {
  const [selected, setSelected] = useState<string | undefined>(
    props.selectedSlot
  );

  return (
    <div style={{ maxWidth: '400px' }}>
      <Timeslots
        {...props}
        selectedSlot={selected}
        onSlotSelect={slot => {
          setSelected(slot.timeslot);
          props.onSlotSelect?.(slot);
        }}
      />
      {selected && (
        <p style={{ marginTop: '20px', fontSize: '14px', color: '#626568' }}>
          Selected: {selected}
        </p>
      )}
    </div>
  );
};

export const Default: Story = {
  render: args => <InteractiveTimeslots {...args} />,
  args: {
    slots: sampleSlots,
  },
};

export const FewSlots: Story = {
  render: args => <InteractiveTimeslots {...args} />,
  args: {
    slots: sampleSlots.slice(0, 4),
  },
  parameters: {
    docs: {
      description: {
        story:
          'When there are fewer slots than initialVisibleCount, the "See more" button is hidden.',
      },
    },
  },
};

export const ExactlyEightSlots: Story = {
  render: args => <InteractiveTimeslots {...args} />,
  args: {
    slots: sampleSlots.slice(0, 8),
  },
  parameters: {
    docs: {
      description: {
        story:
          'When there are exactly 8 slots (default initialVisibleCount), the "See more" button is hidden.',
      },
    },
  },
};

export const WithPreselectedSlot: Story = {
  render: args => <InteractiveTimeslots {...args} />,
  args: {
    slots: sampleSlots,
    selectedSlot: '2025-12-09T10:00:00.000-05:00',
  },
};

export const CustomVisibleCount: Story = {
  render: args => <InteractiveTimeslots {...args} />,
  args: {
    slots: sampleSlots,
    initialVisibleCount: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'You can customize how many slots are shown initially.',
      },
    },
  },
};

export const CustomLabels: Story = {
  render: args => <InteractiveTimeslots {...args} />,
  args: {
    slots: sampleSlots,
    seeMoreLabel: 'Show all available times',
    seeLessLabel: 'Show fewer times',
  },
};

export const Disabled: Story = {
  render: args => <InteractiveTimeslots {...args} />,
  args: {
    slots: sampleSlots,
    disabled: true,
  },
};

export const CustomTimeFormat: Story = {
  render: args => <InteractiveTimeslots {...args} />,
  args: {
    slots: sampleSlots,
    formatTime: (timeslot: string) => {
      const date = new Date(timeslot);
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can provide a custom time formatter function (24-hour format in this example).',
      },
    },
  },
};

export const ManySlots: Story = {
  render: args => <InteractiveTimeslots {...args} />,
  args: {
    slots: [
      ...sampleSlots,
      {
        timeslot: '2025-12-09T15:00:00.000-05:00',
        phys_availability_id: 1150,
        availability_type: 'video or phone',
      },
      {
        timeslot: '2025-12-09T15:30:00.000-05:00',
        phys_availability_id: 1150,
        availability_type: 'video or phone',
      },
      {
        timeslot: '2025-12-09T16:00:00.000-05:00',
        phys_availability_id: 1150,
        availability_type: 'video or phone',
      },
      {
        timeslot: '2025-12-09T16:30:00.000-05:00',
        phys_availability_id: 1150,
        availability_type: 'video or phone',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'With many available slots, the "See more" toggle helps manage the display.',
      },
    },
  },
};

export const ResponsiveView: Story = {
  render: args => (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
        Resize the viewport to see how the timeslots wrap and adapt to different
        screen sizes. On mobile devices (320px-480px), the slots stack nicely in
        a responsive grid.
      </p>
      <Timeslots
        {...args}
        selectedSlot={undefined}
        onSlotSelect={slot => {
          args.onSlotSelect?.(slot);
        }}
      />
    </div>
  ),
  args: {
    slots: sampleSlots,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story:
          "The Timeslots component is fully responsive and adapts to different viewport sizes. The slots wrap gracefully using flexbox, making it accessible on mobile devices, tablets, and desktops. Try using Storybook's viewport toolbar to switch between different device sizes.",
      },
    },
  },
};
