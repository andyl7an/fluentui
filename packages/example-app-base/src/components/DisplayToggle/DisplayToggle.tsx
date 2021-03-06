import * as React from 'react';
import { mergeStyles, Toggle } from 'office-ui-fabric-react';
import { IDisplayToggle } from './DisplayToggle.types';

export const DisplayToggle = (props: IDisplayToggle) => {
  const { children, className, as: RootType = 'div', offClass = 'off', onClass = 'on', onText, offText, label } = props;
  const [toggleState, setToggleState] = React.useState(false);
  const rootClass = mergeStyles(
    {
      selectors: {
        [`& .${toggleState ? offClass : onClass}`]: {
          display: 'none',
        },
      },
    },
    className,
  );

  const onToggle = () => setToggleState(!toggleState);

  return (
    <RootType className={rootClass}>
      <Toggle onText={onText} offText={offText} label={label} onChange={onToggle} />
      {children}
    </RootType>
  );
};
