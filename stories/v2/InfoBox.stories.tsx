import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { IntlProvider } from 'react-intl';
import InfoBox from '../../src/components/v2/InfoBox/Index';

// Wrapper component to provide IntlProvider context for stories that need it
const IntlWrapper = ({ children }: { children: React.ReactNode }) => (
  <IntlProvider locale="en" messages={{}}>
    {children as any}
  </IntlProvider>
);

const meta: Meta<typeof InfoBox> = {
  title: 'v2/InfoBox (WIP)',
  component: InfoBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An informational box component that displays info or warning messages with optional title and link. Supports both react-intl formatted messages and plain text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    infoType: {
      control: { type: 'select' },
      options: ['info', 'warning'],
      description: 'The type of info box - determines color and icon',
    },
    title: {
      control: { type: 'text' },
      description: 'Optional title displayed above the message',
    },
    messageText: {
      control: { type: 'text' },
      description: 'The main message text or intl message ID',
    },
    link: {
      control: { type: 'object' },
      description: 'Optional link object with text, url, and optional id',
    },
    useRawText: {
      control: { type: 'boolean' },
      description:
        'Use plain text instead of react-intl FormattedMessage (useful when IntlProvider is not available)',
    },
    values: {
      control: { type: 'object' },
      description:
        'Values to pass to FormattedMessage for variable interpolation',
    },
    style: {
      control: { type: 'object' },
      description: 'Optional custom CSS styles',
    },
  },
  args: {
    infoType: 'info',
    useRawText: true,
    messageText: 'This is an informational message',
  },
  decorators: [
    ((Story: any) => (
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <Story />
      </div>
    )) as any,
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    infoType: 'info',
    messageText:
      'This is a default informational message to help users understand something important.',
    useRawText: true,
  },
};

export const InfoTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InfoBox
        infoType="info"
        messageText="This is an informational message with a blue theme and info icon."
        useRawText
      />
      <InfoBox
        infoType="warning"
        messageText="This is a warning message with a yellow theme and warning icon."
        useRawText
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The InfoBox supports two types: info (blue) and warning (yellow), each with its own icon and color scheme.',
      },
    },
  },
};

export const WithTitle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InfoBox
        infoType="info"
        title="Important Information"
        messageText="This info box includes a title to make the message more prominent and organized."
        useRawText
      />
      <InfoBox
        infoType="warning"
        title="Warning"
        messageText="Please review the following information carefully before proceeding."
        useRawText
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'InfoBoxes can include an optional title for better organization.',
      },
    },
  },
};

export const WithLink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InfoBox
        infoType="info"
        messageText="Need more details? Check out our comprehensive documentation."
        link={{
          text: 'Learn more',
          url: 'https://example.com/docs',
          id: 'learn-more-link',
        }}
        useRawText
      />
      <InfoBox
        infoType="warning"
        title="Action Required"
        messageText="Your account needs attention."
        link={{
          text: 'Update settings',
          url: '/settings',
          id: 'update-settings-link',
        }}
        useRawText
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'InfoBoxes can include a link for additional actions or information.',
      },
    },
  },
};

export const CompleteExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InfoBox
        infoType="info"
        title="New Feature Available"
        messageText="We've added a new feature to improve your experience. This feature allows you to customize your dashboard and organize your data more efficiently."
        link={{
          text: 'Explore the feature',
          url: '/features/new',
          id: 'explore-feature',
        }}
        useRawText
      />
      <InfoBox
        infoType="warning"
        title="Maintenance Scheduled"
        messageText="Our system will undergo scheduled maintenance on Sunday from 2:00 AM to 4:00 AM EST. Some features may be temporarily unavailable."
        link={{
          text: 'View schedule',
          url: '/maintenance',
          id: 'maintenance-schedule',
        }}
        useRawText
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Complete examples showing InfoBoxes with all available props: title, message, and link.',
      },
    },
  },
};

export const LongContent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InfoBox
        infoType="info"
        title="Terms and Conditions Update"
        messageText="We have updated our terms and conditions to provide better clarity on data usage, privacy policies, and user rights. These changes take effect immediately and apply to all users. Please review the updated terms carefully. If you continue to use our services, you agree to be bound by these terms. If you have any questions or concerns about these changes, please don't hesitate to reach out to our support team."
        link={{
          text: 'Read full terms',
          url: '/terms',
          id: 'terms-link',
        }}
        useRawText
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'InfoBoxes gracefully handle long-form content.',
      },
    },
  },
};

export const WithReactIntl: Story = {
  render: () => (
    <IntlWrapper>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <InfoBox
          infoType="info"
          title="Using react-intl"
          messageText="This example demonstrates the InfoBox with react-intl support. When IntlProvider is available, you can pass message IDs instead of raw text."
          useRawText={false}
        />
        <InfoBox
          infoType="warning"
          messageText="Without proper message IDs in the intl provider, this will fall back to displaying the raw text."
          useRawText={false}
        />
      </div>
    </IntlWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'When useRawText is false, the component expects messageText to be an intl message ID. If the ID is not found, it falls back to displaying the raw text.',
      },
    },
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InfoBox
        infoType="info"
        messageText="This InfoBox has custom margin and padding applied."
        style={{ marginTop: '0', padding: '24px' }}
        useRawText
      />
      <InfoBox
        infoType="warning"
        messageText="This InfoBox has a custom border and shadow."
        style={{
          border: '2px solid #FFB02E',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        useRawText
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'You can pass custom styles via the style prop to override default styling.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InfoBox
        infoType="info"
        title="Session Timeout Warning"
        messageText="Your session will expire in 5 minutes due to inactivity. Please save your work to avoid losing any changes."
        link={{
          text: 'Extend session',
          url: '#extend',
          id: 'extend-session',
        }}
        useRawText
      />
      <InfoBox
        infoType="warning"
        title="Browser Compatibility"
        messageText="You are using an outdated browser. Some features may not work correctly. For the best experience, please update to the latest version."
        link={{
          text: 'Update browser',
          url: 'https://browsehappy.com/',
          id: 'update-browser',
        }}
        useRawText
      />
      <InfoBox
        infoType="info"
        title="Cookie Notice"
        messageText="This website uses cookies to ensure you get the best experience. By continuing to use our site, you consent to our use of cookies."
        link={{
          text: 'Privacy policy',
          url: '/privacy',
          id: 'privacy-policy',
        }}
        useRawText
      />
      <InfoBox
        infoType="warning"
        title="Required Action"
        messageText="Your profile is incomplete. Please add your phone number to enable two-factor authentication."
        link={{
          text: 'Complete profile',
          url: '/profile',
          id: 'complete-profile',
        }}
        useRawText
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Real-world examples showing common use cases for InfoBox components in web applications.',
      },
    },
  },
};
