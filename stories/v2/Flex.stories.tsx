import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Flex from '../../src/components/v2/Flex/Index';

// Helper component for demo boxes
const DemoBox = ({
  children,
  color = '#0379CE',
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div
    style={{
      padding: '16px',
      background: color,
      color: 'white',
      borderRadius: '4px',
      minWidth: '60px',
      textAlign: 'center',
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);

const meta: Meta<typeof Flex> = {
  title: 'v2/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable flex container that allows control over flex direction, gap, justification, and alignment. Supports responsive adjustments at md (768px+) and lg (1280px+) breakpoints.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Flex direction for the container',
    },
    gap: {
      control: { type: 'text' },
      description: 'Gap between flex items (CSS gap value)',
    },
    justify: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Justify content alignment',
    },
    align: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      description: 'Align items alignment',
    },
    full: {
      control: { type: 'boolean' },
      description: 'Whether the container should take full width (100%)',
    },
    mdDirection: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Flex direction at md breakpoint (768px+)',
    },
    mdGap: {
      control: { type: 'text' },
      description: 'Gap at md breakpoint (768px+)',
    },
    mdJustify: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Justify content at md breakpoint (768px+)',
    },
    mdAlign: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      description: 'Align items at md breakpoint (768px+)',
    },
    lgDirection: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Flex direction at lg breakpoint (1280px+)',
    },
    lgGap: {
      control: { type: 'text' },
      description: 'Gap at lg breakpoint (1280px+)',
    },
    lgJustify: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Justify content at lg breakpoint (1280px+)',
    },
    lgAlign: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      description: 'Align items at lg breakpoint (1280px+)',
    },
  },
  args: {
    direction: 'row',
    gap: '0',
    justify: 'flex-start',
    align: 'stretch',
    full: false,
  },
  decorators: [
    Story => (
      <div
        style={{ width: '600px', padding: '20px', border: '2px dashed #ccc' }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <Flex {...args}>
      <DemoBox>Box 1</DemoBox>
      <DemoBox color="#28a745">Box 2</DemoBox>
      <DemoBox color="#ffc107">Box 3</DemoBox>
    </Flex>
  ),
};

export const Row: Story = {
  args: {
    direction: 'row',
    gap: '16px',
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Box 1</DemoBox>
      <DemoBox color="#28a745">Box 2</DemoBox>
      <DemoBox color="#ffc107">Box 3</DemoBox>
    </Flex>
  ),
};

export const Column: Story = {
  args: {
    direction: 'column',
    gap: '16px',
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Box 1</DemoBox>
      <DemoBox color="#28a745">Box 2</DemoBox>
      <DemoBox color="#ffc107">Box 3</DemoBox>
    </Flex>
  ),
};

export const WithGap: Story = {
  args: {
    direction: 'row',
    gap: '24px',
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Box 1</DemoBox>
      <DemoBox color="#28a745">Box 2</DemoBox>
      <DemoBox color="#ffc107">Box 3</DemoBox>
      <DemoBox color="#dc3545">Box 4</DemoBox>
    </Flex>
  ),
};

export const JustifyCenter: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    justify: 'center',
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Box 1</DemoBox>
      <DemoBox color="#28a745">Box 2</DemoBox>
      <DemoBox color="#ffc107">Box 3</DemoBox>
    </Flex>
  ),
};

export const JustifySpaceBetween: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    justify: 'space-between',
    full: true,
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Box 1</DemoBox>
      <DemoBox color="#28a745">Box 2</DemoBox>
      <DemoBox color="#ffc107">Box 3</DemoBox>
    </Flex>
  ),
};

export const JustifySpaceAround: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    justify: 'space-around',
    full: true,
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Box 1</DemoBox>
      <DemoBox color="#28a745">Box 2</DemoBox>
      <DemoBox color="#ffc107">Box 3</DemoBox>
    </Flex>
  ),
};

export const JustifySpaceEvenly: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    justify: 'space-evenly',
    full: true,
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Box 1</DemoBox>
      <DemoBox color="#28a745">Box 2</DemoBox>
      <DemoBox color="#ffc107">Box 3</DemoBox>
    </Flex>
  ),
};

export const AlignCenter: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    align: 'center',
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Short</DemoBox>
      <div
        style={{
          padding: '32px 16px',
          background: '#28a745',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Tall Box
      </div>
      <DemoBox color="#ffc107">Short</DemoBox>
    </Flex>
  ),
};

export const AlignStart: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    align: 'flex-start',
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Short</DemoBox>
      <div
        style={{
          padding: '32px 16px',
          background: '#28a745',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Tall Box
      </div>
      <DemoBox color="#ffc107">Short</DemoBox>
    </Flex>
  ),
};

export const AlignEnd: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    align: 'flex-end',
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Short</DemoBox>
      <div
        style={{
          padding: '32px 16px',
          background: '#28a745',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Tall Box
      </div>
      <DemoBox color="#ffc107">Short</DemoBox>
    </Flex>
  ),
};

export const FullWidth: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    justify: 'space-between',
    full: true,
  },
  render: args => (
    <Flex {...args}>
      <DemoBox>Left</DemoBox>
      <DemoBox color="#28a745">Center</DemoBox>
      <DemoBox color="#ffc107">Right</DemoBox>
    </Flex>
  ),
};

export const CenteredContent: Story = {
  args: {
    direction: 'column',
    gap: '16px',
    justify: 'center',
    align: 'center',
  },
  render: args => (
    <Flex {...args} style={{ minHeight: '300px', border: '2px solid #0379CE' }}>
      <DemoBox>Centered</DemoBox>
      <DemoBox color="#28a745">Content</DemoBox>
    </Flex>
  ),
};

// Responsive examples
export const ResponsiveDirection: Story = {
  args: {
    direction: 'column',
    gap: '16px',
    mdDirection: 'row',
    full: true,
  },
  render: args => (
    <div>
      <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
        Resize window: Column on mobile, Row on tablet (768px+)
      </p>
      <Flex {...args}>
        <DemoBox>Box 1</DemoBox>
        <DemoBox color="#28a745">Box 2</DemoBox>
        <DemoBox color="#ffc107">Box 3</DemoBox>
      </Flex>
    </div>
  ),
};

export const ResponsiveGap: Story = {
  args: {
    direction: 'row',
    gap: '8px',
    mdGap: '16px',
    lgGap: '24px',
  },
  render: args => (
    <div>
      <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
        Resize window: 8px gap → 16px (768px+) → 24px (1280px+)
      </p>
      <Flex {...args}>
        <DemoBox>Box 1</DemoBox>
        <DemoBox color="#28a745">Box 2</DemoBox>
        <DemoBox color="#ffc107">Box 3</DemoBox>
      </Flex>
    </div>
  ),
};

export const ResponsiveJustify: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    justify: 'flex-start',
    mdJustify: 'center',
    lgJustify: 'space-between',
    full: true,
  },
  render: args => (
    <div>
      <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
        Resize window: Start → Center (768px+) → Space Between (1280px+)
      </p>
      <Flex {...args}>
        <DemoBox>Box 1</DemoBox>
        <DemoBox color="#28a745">Box 2</DemoBox>
        <DemoBox color="#ffc107">Box 3</DemoBox>
      </Flex>
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  args: {
    direction: 'column',
    gap: '12px',
    align: 'stretch',
    mdDirection: 'row',
    mdGap: '16px',
    mdAlign: 'center',
    lgGap: '24px',
    full: true,
  },
  render: args => (
    <div>
      <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
        Complete responsive layout: Column → Row with different gaps
      </p>
      <Flex {...args}>
        <DemoBox>Item 1</DemoBox>
        <DemoBox color="#28a745">Item 2</DemoBox>
        <DemoBox color="#ffc107">Item 3</DemoBox>
        <DemoBox color="#dc3545">Item 4</DemoBox>
      </Flex>
    </div>
  ),
};

// Practical examples
export const NavigationBar: Story = {
  render: () => (
    <Flex
      direction="row"
      gap="16px"
      justify="space-between"
      align="center"
      full
    >
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Logo</div>
      <Flex direction="row" gap="24px">
        <button
          type="button"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Home
        </button>
        <button
          type="button"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          About
        </button>
        <button
          type="button"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Contact
        </button>
      </Flex>
      <button
        type="button"
        style={{
          padding: '8px 16px',
          background: '#0379CE',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Sign In
      </button>
    </Flex>
  ),
};

export const CardLayout: Story = {
  render: () => (
    <Flex direction="column" gap="16px" mdDirection="row" mdGap="20px" full>
      {[1, 2, 3].map(num => (
        <div
          key={num}
          style={{
            flex: 1,
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #dee2e6',
          }}
        >
          <h3 style={{ margin: '0 0 12px 0' }}>Card {num}</h3>
          <p style={{ margin: 0, color: '#666' }}>
            This is card content that adapts to different screen sizes.
          </p>
        </div>
      ))}
    </Flex>
  ),
};

export const FormLayout: Story = {
  render: () => (
    <Flex direction="column" gap="16px" full>
      <Flex direction="column" gap="8px" mdDirection="row" mdGap="16px">
        <div style={{ flex: 1 }}>
          <div
            style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}
          >
            First Name
          </div>
          <input
            type="text"
            placeholder="John"
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #757678',
              borderRadius: '4px',
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}
          >
            Last Name
          </div>
          <input
            type="text"
            placeholder="Doe"
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #757678',
              borderRadius: '4px',
            }}
          />
        </div>
      </Flex>
      <Flex direction="row" gap="16px" justify="flex-end">
        <button
          type="button"
          style={{
            padding: '8px 16px',
            background: 'transparent',
            border: '1px solid #757678',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            background: '#0379CE',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </Flex>
    </Flex>
  ),
};

export const NestedFlex: Story = {
  render: () => (
    <Flex direction="column" gap="20px" full>
      <Flex direction="row" gap="16px" justify="space-between" align="center">
        <h2 style={{ margin: 0 }}>Dashboard</h2>
        <button
          type="button"
          style={{
            padding: '8px 16px',
            background: '#0379CE',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          New Item
        </button>
      </Flex>
      <Flex direction="column" gap="12px" mdDirection="row" mdGap="16px">
        <DemoBox color="#0379CE">Stats 1</DemoBox>
        <DemoBox color="#28a745">Stats 2</DemoBox>
        <DemoBox color="#ffc107">Stats 3</DemoBox>
      </Flex>
    </Flex>
  ),
};
