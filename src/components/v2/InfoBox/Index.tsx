import React from 'react';
import { FormattedMessage } from 'react-intl';
import Image from '../../Image';
import StyledInfoBox from './styled';

// Inline SVG data URLs to avoid asset bundling issues in npm packages
const InfoIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiMwMDc4RDQiLz4KPHBhdGggZD0iTTEyIDExVjE3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjEiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==';

const WarningIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMiAyMEgyMkwxMiAyWiIgZmlsbD0iI0ZGQjAyRSIvPgo8cGF0aCBkPSJNMTIgMTBWMTQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTciIHI9IjEiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPg==';

interface InfoBoxProps {
  title?: string;
  messageText: string;
  link?: { text: string; url: string; id?: string };
  infoType: 'info' | 'warning';
  style?: React.CSSProperties;
  values?: any;
  /** Use plain text instead of react-intl FormattedMessage (useful when IntlProvider is not available) */
  useRawText?: boolean;
}

const InfoBox = ({
  infoType,
  title,
  messageText,
  link,
  style,
  values,
  useRawText = false,
}: InfoBoxProps) => {
  const bgColor = infoType === 'info' ? '#E8F4FC' : '#fff2d9';
  const icon = infoType === 'info' ? InfoIcon : WarningIcon;

  const renderMessage = (): React.ReactNode => {
    if (useRawText) {
      return messageText;
    }

    try {
      // @ts-ignore - Type incompatibility between React 16 and react-intl 5
      return <FormattedMessage id={messageText} values={values} />;
    } catch (error) {
      // Fallback to raw text if IntlProvider is not available
      // eslint-disable-next-line no-console
      console.warn(
        'IntlProvider not available, falling back to raw text:',
        error
      );
      return messageText;
    }
  };

  return (
    <StyledInfoBox backgroundColor={bgColor} style={style}>
      <Image src={icon} />
      <span>
        {title && <h3>{title}</h3>}
        {renderMessage()}
        {link && (
          <a href={link.url} id={link.id}>
            {link.text}
          </a>
        )}
      </span>
    </StyledInfoBox>
  );
};
InfoBox.displayName = 'InfoBox';

export default InfoBox;
