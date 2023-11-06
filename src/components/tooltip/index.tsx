import './style.css';
import * as React from 'react';

import { useTooltip } from '../../hooks';
import { clsx } from '../../utils';

type Props = {
  hint: React.ReactNode;
  position?: 'start' | 'center' | 'end';
  children: React.ReactNode;
};

export function Tooltip({ hint, position = 'start', children }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { triggerRef, hintRef } = useTooltip({ isOpen, position });

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const triggerElement = React.isValidElement(children) ? children : <span>{children}</span>;
  const hintElement = React.isValidElement(hint) ? hint : <span>{hint}</span>;

  return (
    <>
      {React.cloneElement(triggerElement, {
        ...triggerElement.props,
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      {isOpen &&
        React.cloneElement(hintElement, {
          ...hintElement.props,
          ref: hintRef,
          className: clsx('tooltip', `tooltip--${position}`, hintElement.props.className),
        })}
    </>
  );
}
