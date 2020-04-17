import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { FieldRenderProps } from 'react-final-form';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import { useTheme } from '../hooks';
import InputField from './InputField';
import Card from './Card';
import Text from './Text';
import Label from './Label';

const StyledCard = styled(Card)`
  position: absolute;
  width: 100%;
  top: 100%;
  background: ${themeGet('colors.white')};
  z-index: 1;
`;

const StyledItem = styled(Text)`
  font-family: ${({ theme }) => theme.headingFont};
  padding: 6px 12px;
`;

export interface Item {
  label: string;
  value: string;
}

type AutocompleteInput = {
  id?: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  items: Item[];
  onInputValueChange?(value: string): void;
  onSelect?(value: string): void;
  icon?: ReactNode;
} & FieldRenderProps<any>;

const itemToString = item => item || '';

const AutocompleteInput: FunctionComponent<AutocompleteInput> = ({
  id,
  input,
  meta,
  icon,
  label: formLabel,
  placeholder,
  items,
  onInputValueChange,
  onSelect,
  ...rest
}: AutocompleteInput) => {
  const theme = useTheme();
  return (
    <Downshift
      id={id}
      {...input}
      onInputValueChange={inputValue => {
        input.onChange(inputValue);
        return typeof onInputValueChange !== 'undefined'
          ? onInputValueChange(inputValue)
          : null;
      }}
      onSelect={selectedItem => {
        return typeof onSelect !== 'undefined' ? onSelect(selectedItem) : null;
      }}
      itemToString={itemToString}
      selectedItem={input.value}
    >
      {({
        getInputProps,
        getLabelProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
      }) => {
        // @ts-ignore
        const filteredItems = matchSorter(items, inputValue, {
          keys: ['label'],
          maxRanking: matchSorter.rankings.STARTS_WITH,
        });
        return (
          <div style={{ position: 'relative', width: '100%' }}>
            {/*
              // @ts-ignore */}
            <InputField
              label={
                formLabel ? (
                  <Label {...getLabelProps()}>{formLabel}</Label>
                ) : null
              }
              icon={icon || null}
              meta={meta}
              input={input}
              {...getInputProps({
                name: input.name,
                placeholder,
              })}
              onBlur={event => input.onBlur(event)}
              {...rest}
            />

            {isOpen && !!filteredItems.length ? (
              // @ts-ignore
              <StyledCard borderRadius={0} {...getMenuProps({ isOpen })}>
                {filteredItems.map(({ value, label }, index) => (
                  <StyledItem
                    as="div"
                    {...getItemProps({
                      key: value,
                      index,
                      item: label,
                      style: {
                        color:
                          highlightedIndex === index
                            ? theme.colors.white
                            : theme.colors.text,
                        backgroundColor:
                          highlightedIndex === index
                            ? theme.colors.primary
                            : theme.colors.white,
                        fontWeight:
                          highlightedIndex === index
                            ? theme.fontWeights.bold
                            : theme.fontWeights.normal,
                      },
                    })}
                  >
                    {label}
                  </StyledItem>
                ))}
              </StyledCard>
            ) : null}
          </div>
        );
      }}
    </Downshift>
  );
};

export default AutocompleteInput;
