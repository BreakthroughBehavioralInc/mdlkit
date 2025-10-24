import React, { CSSProperties, ReactNode } from 'react';
import useClickOnEnter from '../../../hooks/useClickOnEnter';
import { ButtonRoot, IconWrapper } from './styled';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outlined' | 'default' | 'error' | 'text';
  rounded?: boolean;
  iconSize?: string;
  icon?: ReactNode;
  iconSrc?: string;
  iconAlt?: string;
  iconPosition?: 'left' | 'right';
  iconStyles?: CSSProperties;
  iconAttrs?: { dataTrack?: string; [key: string]: any };
  full?: boolean;
  children?: ReactNode;
};

/**
 * A customizable button component with various styles and icon support.
 *
 * @component
 * @param {Object} props - The props for the button component.
 * @param {'outlined' | 'default' | 'error' | 'text'} [props.variant='default'] - The variant of the button.
 * @param {boolean} [props.rounded=false] - If true, applies rounded styles to the button.
 * @param {string} [props.iconSize='20px'] - The size of the icon.
 * @param {React.ReactNode} [props.icon] - The icon to be displayed in the button.
 * @param {string} [props.iconSrc] - The source URL for the icon image.
 * @param {string} [props.iconAlt=''] - The alt text for the icon image.
 * @param {'left' | 'right'} [props.iconPosition='left'] - The position of the icon in the button.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {CSSProperties} [props.iconStyles] - Additional styles for the icon.
 * @param {boolean} [props.full=false] - If true, the button takes up the full width of its container.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Other button attributes.
 * @returns {React.FC<ButtonProps>} The button component.
 */
// eslint-disable-next-line react/require-default-props
const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  rounded = false,
  iconSize = '20px',
  icon,
  iconSrc,
  iconAttrs,
  iconAlt = '',
  iconPosition = 'left',
  children,
  iconStyles,
  full,
  onKeyDown,
  ...props
}) => {
  const clickOnKeyDown = useClickOnEnter();

  const handleKeyDown = e => {
    if (onKeyDown) {
      onKeyDown(e);
    } else {
      clickOnKeyDown(e);
    }
  };

  const attrs = {
    dataTrackerEvent: iconAttrs?.dataTrack ? 'true' : undefined,
    dataTrack: iconAttrs?.dataTrack ?? undefined,
    ...iconAttrs,
  };

  return (
    <ButtonRoot
      onKeyDown={handleKeyDown}
      variant={variant}
      rounded={rounded}
      full={full}
      {...props}
    >
      {(icon || iconSrc) && iconPosition === 'left' && (
        <IconWrapper position="left" size={iconSize}>
          {icon || (
            <img
              style={iconStyles}
              src={iconSrc}
              alt={iconAlt}
              data-tracker-event={attrs.dataTrackerEvent}
              data-track={attrs.dataTrack}
            />
          )}
        </IconWrapper>
      )}
      {children}
      {(icon || iconSrc) && iconPosition === 'right' && (
        <IconWrapper position="right" size={iconSize}>
          {icon || (
            <img
              style={iconStyles}
              src={iconSrc}
              alt={iconAlt}
              data-tracker-event={attrs.dataTrackerEvent}
              data-track={attrs.dataTrack}
            />
          )}
        </IconWrapper>
      )}
    </ButtonRoot>
  );
};

Button.displayName = 'Button';
Object.assign(Button, {
  defaultProps: {
    full: false,
  },
});

export default Button;
