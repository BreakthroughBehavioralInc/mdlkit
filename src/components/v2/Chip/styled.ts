import styled from 'styled-components';

export const ChipContainer = styled.span<{
  color?: 'light-blue' | 'light-green';
}>`
  display: flex;
  height: var(--Spacing-Em-2_5-em, 40px);
  padding: var(--Spacing-Em-0_125-em, 2px) var(--Spacing-Em-0_5-em, 8px);
  justify-content: center;
  align-items: center;
  gap: var(--Spacing-Em-0_25-em, 4px);
  background: ${props => {
    switch (props.color) {
      case 'light-blue':
        return 'var(--Colors-Core-Light-Blue-100, #eaf6ff)';
      case 'light-green':
        return 'var(--Colors-Core-Light-Green-100, #DAEDE7)';
      default:
        return 'var(--Colors-Core-Surface-Variant, #f5f5f5)';
    }
  }};
  border-radius: 2px;
  font-weight: 600;
  font-size: 1.5rem;
  color: #222;
`;

export const IconSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  color: var(--Colors-Core-Surface-on_surface, #000);
  font-family: var(--Typography-Typeface-Family, 'Noto Sans');
  font-size: var(--Typography-SIze-Label-Label_Large, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Typography-Line-Height-Label-Label_Large, 24px);
`;
