import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {
  StyledAccordionItem,
  StyledAccordionHeader,
  StyledAccordionTrigger,
  StyledAccordionContent,
  ContentWrapper,
} from './styled';

// Custom prop types to avoid React version conflicts
interface AccordionItemProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface AccordionTriggerProps {
  className?: string;
  children?: React.ReactNode;
}

interface AccordionContentProps {
  className?: string;
  children?: React.ReactNode;
  forceMount?: true;
}

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  (props, ref) => (
    <StyledAccordionItem
      // eslint-disable-next-line react/prop-types
      className={`acc-item ${props.className ? props.className : ''}`}
      ref={ref}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, ...props }, ref) => (
  <StyledAccordionHeader>
    <StyledAccordionTrigger
      // eslint-disable-next-line react/prop-types
      className={`acc-trigger ${props.className ? props.className : ''}`}
      ref={ref}
      {...props}
    >
      {children}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2949 9.70492L16.8849 8.29492L12.2949 12.8749L7.70492 8.29492L6.29492 9.70492L12.2949 15.7049L18.2949 9.70492Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2949 9.70492L16.8849 8.29492L12.2949 12.8749L7.70492 8.29492L6.29492 9.70492L12.2949 15.7049L18.2949 9.70492Z"
          fillOpacity="0.2"
        />
      </svg>
    </StyledAccordionTrigger>
  </StyledAccordionHeader>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, ...props }, ref) => (
  <StyledAccordionContent // eslint-disable-next-line react/prop-types
    className={`acc-content ${props.className ? props.className : ''}`}
    ref={ref}
    {...props}
  >
    <ContentWrapper>{children as any}</ContentWrapper>
  </StyledAccordionContent>
));
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
