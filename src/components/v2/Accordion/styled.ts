import styled, { keyframes } from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

export const StyledAccordionItem = styled(AccordionPrimitive.Item as any)`
  border-bottom: 1px solid #e2e8f0;
`;

export const StyledAccordionHeader = styled(AccordionPrimitive.Header as any)`
  display: flex;
`;

export const StyledAccordionTrigger = styled(AccordionPrimitive.Trigger as any)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: left;
  transition: all 0.2s ease-out;
  background: none;
  cursor: pointer;
  border: none;
  width: 100%;
  border-radius: 4px;

  svg {
    transition: transform 0.2s ease-out;
    width: 24px;
    height: 24px;
    path {
      fill: #0379ce;
    }
  }

  &:focus {
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #000;
  }

  &[data-state='open'] svg {
    transform: rotate(180deg);
  }
`;

const accordionDown = keyframes`
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
`;

const accordionUp = keyframes`
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
`;

export const StyledAccordionContent = styled(AccordionPrimitive.Content as any)`
  overflow: hidden;
  font-size: 0.875rem;
  &[data-state='open'] {
    animation: ${accordionDown} 0.2s ease-out;
  }
  &[data-state='closed'] {
    animation: ${accordionUp} 0.2s ease-out;
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 4px;
  padding-bottom: 12px;
`;
