import React, { FunctionComponent, ReactNode, useState } from 'react';
import MaterialTooltipOrig from '@material-ui/core/Tooltip';
import Button from '../Button/Index';
import { withTooltipStyles } from './styled';

// Work around React types version conflict between @types/react and react-intl's bundled types
const MaterialTooltip = (MaterialTooltipOrig as unknown) as React.FC<any>;

export enum TooltipTheme {
  Light = 'lightTooltip',
  Small = 'smallTooltip',
}

const getTheme = (theme: TooltipTheme, classes: any) => {
  if (theme === TooltipTheme.Small) {
    return classes.smallTooltip;
  }

  return classes.lightTooltip;
};

interface Props {
  title: string;
  children: ReactNode;
  classes: any;
  className: string;
  theme: TooltipTheme;
}

const Tooltip: FunctionComponent<Props> = ({
  title,
  children,
  classes,
  className,
  theme = TooltipTheme.Light,
  ...rest
}: Props) => {
  const [arrowRef, setArrowRef] = useState<any>(null);
  const currentClass = getTheme(theme, classes);

  return (
    <MaterialTooltip
      title={
        <>
          {title}
          <span
            className={classes.arrowArrow}
            ref={node => setArrowRef(node)}
          />
        </>
      }
      classes={{
        popper: classes.arrowPopper,
        tooltip: currentClass,
      }}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
        style: { opacity: 1 },
      }}
      {...rest}
    >
      <Button
        className={className}
        variant="text"
        style={{ padding: '2px' }}
        type="button"
      >
        {children}
      </Button>
    </MaterialTooltip>
  );
};
Tooltip.displayName = 'Tooltip';

export default withTooltipStyles(Tooltip);
