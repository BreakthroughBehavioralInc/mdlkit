import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../src/components/v2/Accordion/Index';

const meta: Meta<typeof Accordion> = {
  title: 'v2/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible accordion component built with Radix UI primitives. Supports single or multiple open items, collapsible behavior, and smooth animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Whether single or multiple items can be open at once',
      defaultValue: 'single',
    },
    collapsible: {
      control: { type: 'boolean' },
      description:
        'Whether all items can be closed (only applies to type="single")',
      defaultValue: true,
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the accordion is disabled',
    },
  },
  decorators: [
    Story => (
      <div style={{ width: '600px', maxWidth: '90vw' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is this accordion component?</AccordionTrigger>
        <AccordionContent>
          This is a flexible and accessible accordion component built with Radix
          UI primitives and styled-components. It supports smooth animations and
          keyboard navigation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I use it?</AccordionTrigger>
        <AccordionContent>
          Import the Accordion components and compose them together. You can
          control whether single or multiple items can be open at once using the
          `type` prop.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes! Built on Radix UI primitives, it follows WAI-ARIA design patterns
          and supports full keyboard navigation with proper ARIA attributes.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleOpen: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
      <AccordionItem value="item-1">
        <AccordionTrigger>First Section</AccordionTrigger>
        <AccordionContent>
          With type=&quot;multiple&quot;, you can have multiple accordion items
          open at the same time. This is useful for longer forms or when users
          need to compare content across sections.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Section</AccordionTrigger>
        <AccordionContent>
          Notice how both this section and the first section can be open
          simultaneously. Try opening the third section as well!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Section</AccordionTrigger>
        <AccordionContent>
          All three sections can be open at once when using multiple mode. This
          gives users maximum flexibility in viewing content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Features</AccordionTrigger>
        <AccordionContent>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>Easy to integrate and customize</li>
            <li>Fully accessible with keyboard navigation</li>
            <li>Smooth animations out of the box</li>
            <li>TypeScript support included</li>
            <li>Built with Radix UI primitives</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Technical Specifications</AccordionTrigger>
        <AccordionContent>
          <div>
            <p style={{ margin: '0 0 12px 0' }}>
              <strong>Dependencies:</strong>
            </p>
            <ul style={{ margin: '0 0 12px 0', paddingLeft: '20px' }}>
              <li>React 18+</li>
              <li>@radix-ui/react-accordion</li>
              <li>styled-components</li>
            </ul>
            <p style={{ margin: 0 }}>
              <strong>Browser Support:</strong> All modern browsers including
              Chrome, Firefox, Safari, and Edge.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Styling Options</AccordionTrigger>
        <AccordionContent>
          <p style={{ margin: '0 0 8px 0' }}>
            You can customize the accordion using styled-components or by
            passing custom className props to each component.
          </p>
          <code
            style={{
              display: 'block',
              padding: '8px',
              background: '#f5f5f5',
              borderRadius: '4px',
              fontSize: '13px',
            }}
          >
            className=&quot;custom-accordion-item&quot;
          </code>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQExample: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept all major credit cards (Visa, Mastercard, American Express,
          Discover), PayPal, and bank transfers for enterprise customers. All
          payments are processed securely through our encrypted payment gateway.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
        <AccordionContent>
          Standard shipping typically takes 5-7 business days. Express shipping
          (2-3 business days) and overnight shipping options are also available
          at checkout. International shipping times vary by destination.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          We offer a 30-day money-back guarantee on all products. Items must be
          returned in their original condition with all packaging and
          accessories. Return shipping is free for defective items, and
          we&apos;ll process your refund within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do you offer technical support?</AccordionTrigger>
        <AccordionContent>
          Yes! Our technical support team is available 24/7 via email, live
          chat, and phone. Premium customers also have access to dedicated
          support representatives and priority response times.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can I upgrade or downgrade my plan?</AccordionTrigger>
        <AccordionContent>
          Absolutely! You can change your plan at any time from your account
          dashboard. Upgrades take effect immediately, and downgrades will apply
          at the start of your next billing cycle. We&apos;ll prorate any
          charges accordingly.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleNonCollapsible: Story = {
  render: () => (
    <Accordion type="single" collapsible={false} defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Always One Open</AccordionTrigger>
        <AccordionContent>
          When collapsible is set to false on a single-type accordion, at least
          one item must always remain open. Try clicking on another trigger -
          this one will close, but you won&apos;t be able to close all items.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Click Me</AccordionTrigger>
        <AccordionContent>
          Opening this will close the previous section, but you can&apos;t have
          all sections closed. This is useful for wizard-like interfaces or when
          you always want to show content.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Or Me</AccordionTrigger>
        <AccordionContent>
          One section will always be expanded, ensuring users always have access
          to some content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Short Content</AccordionTrigger>
        <AccordionContent>This is just a brief piece of text.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Medium Length Content</AccordionTrigger>
        <AccordionContent>
          This section contains a moderate amount of text. The accordion handles
          varying content lengths gracefully with smooth animations. The height
          automatically adjusts to fit the content, whether it&apos;s a single
          line or multiple paragraphs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Very Long Content</AccordionTrigger>
        <AccordionContent>
          <p style={{ margin: '0 0 12px 0' }}>
            This section demonstrates how the accordion handles longer content.
            The animation smoothly expands to reveal all the content, no matter
            how long it is.
          </p>
          <p style={{ margin: '0 0 12px 0' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p style={{ margin: '0 0 12px 0' }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p style={{ margin: 0 }}>
            The accordion component uses CSS animations with the Radix UI
            content height variable to ensure smooth transitions regardless of
            content size.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="custom-item">
        <AccordionTrigger className="custom-trigger">
          Custom Styled Item
        </AccordionTrigger>
        <AccordionContent className="custom-content">
          You can add custom className props to any accordion component to apply
          your own styles. This makes it easy to integrate with your existing
          design system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Standard Item</AccordionTrigger>
        <AccordionContent>
          This item uses the default styling, showing how you can mix custom and
          default styles within the same accordion.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Accordion type="single" collapsible disabled>
      <AccordionItem value="item-1">
        <AccordionTrigger>Disabled Accordion</AccordionTrigger>
        <AccordionContent>
          This content won&apos;t be accessible because the entire accordion is
          disabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Also Disabled</AccordionTrigger>
        <AccordionContent>
          When the accordion is disabled, none of the triggers are clickable.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleItemDisabled: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Active Item</AccordionTrigger>
        <AccordionContent>
          This item works normally and can be expanded and collapsed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Item</AccordionTrigger>
        <AccordionContent>
          This content is not accessible because this specific item is disabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another Active Item</AccordionTrigger>
        <AccordionContent>
          You can disable individual items while keeping others active.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
