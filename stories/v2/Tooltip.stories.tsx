import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tooltip, { TooltipTheme } from '../../src/components/v2/Tooltip/Index';

// Icon components for examples
const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
);

const HelpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
  </svg>
);

const meta: Meta<typeof Tooltip> = {
  title: 'v2/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A tooltip component that wraps content with an informational popup. Based on Material-UI tooltip with custom styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The content displayed in the tooltip',
    },
    theme: {
      control: { type: 'select' },
      options: Object.values(TooltipTheme),
      description: 'The visual theme of the tooltip',
    },
    children: {
      control: { type: 'text' },
      description: 'The element that triggers the tooltip',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class for the trigger button',
    },
  },
  args: {
    title: 'This is a helpful tooltip',
    theme: TooltipTheme.Light,
    children: 'Hover me',
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'This is a helpful tooltip with some useful information',
    children: 'Hover for info',
    className: '',
    theme: TooltipTheme.Light,
  },
};

export const Themes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        padding: '40px',
      }}
    >
      <Tooltip
        title="This is a light theme tooltip with default styling"
        theme={TooltipTheme.Light}
        className=""
      >
        Light Theme
      </Tooltip>
      <Tooltip
        title="This is a small theme tooltip with more compact styling"
        theme={TooltipTheme.Small}
        className=""
      >
        Small Theme
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The tooltip supports two themes: Light (default) and Small for more compact displays.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        padding: '40px',
      }}
    >
      <Tooltip
        title="Click for more information about this feature"
        className=""
        theme={TooltipTheme.Light}
      >
        <InfoIcon />
      </Tooltip>
      <Tooltip
        title="Need help? This tooltip provides assistance and guidance"
        className=""
        theme={TooltipTheme.Light}
      >
        <HelpIcon />
      </Tooltip>
      <Tooltip
        title="You can combine text and icons for better user experience"
        theme={TooltipTheme.Small}
        className=""
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <InfoIcon />
          Info & Text
        </span>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tooltips work great with icons and can contain any React element as children.',
      },
    },
  },
};

export const LongContent: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        padding: '40px',
      }}
    >
      <Tooltip
        title="This is a very long tooltip content that demonstrates how the tooltip handles longer text. It should wrap appropriately and maintain good readability while not becoming too wide for the viewport."
        theme={TooltipTheme.Light}
        className=""
      >
        Long Content Light
      </Tooltip>
      <Tooltip
        title="This tooltip uses the small theme which has a more compact max-width setting. It's designed for shorter messages but can still handle longer content when needed."
        theme={TooltipTheme.Small}
        className=""
      >
        Long Content Small
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tooltips handle long content gracefully with appropriate max-width constraints.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        padding: '40px',
      }}
    >
      <Tooltip
        title="Form validation error: Please enter a valid email address"
        className=""
        theme={TooltipTheme.Light}
      >
        <span style={{ color: 'red', cursor: 'help' }}>
          <span role="img" aria-label="warning">
            ⚠️
          </span>{' '}
          Email field error
        </span>
      </Tooltip>
      <Tooltip
        title="Success! Your data has been saved successfully."
        theme={TooltipTheme.Small}
        className=""
      >
        <span style={{ color: 'green', cursor: 'help' }}>
          <span role="img" aria-label="success">
            ✅
          </span>{' '}
          Success message
        </span>
      </Tooltip>
      <Tooltip
        title="This feature is currently disabled. Please check your permissions or contact support."
        className=""
        theme={TooltipTheme.Light}
      >
        <span style={{ color: 'gray', cursor: 'not-allowed' }}>
          <span role="img" aria-label="disabled">
            🚫
          </span>{' '}
          Disabled feature
        </span>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Examples of tooltips used for different types of user feedback and interaction states.',
      },
    },
  },
};
