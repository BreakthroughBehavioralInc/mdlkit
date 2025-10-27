import React from 'react';
import { FormattedMessage } from 'react-intl';
import Image from '../../Image';
import InfoIcon from '../assets/info-blue-icon.svg';
import WarningIcon from '../assets/warning-icon.svg';
import StyledInfoBox from './styled';

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

export default InfoBox;
