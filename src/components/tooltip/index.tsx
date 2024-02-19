import { ReactNode, cloneElement, isValidElement, useState } from 'react';

import { useTooltip } from '../../hooks';
import { clsx } from '../../utils';

type Props = {
  hint: ReactNode;
  position?: 'start' | 'center' | 'end';
  children: ReactNode;
};

export function Tooltip({ hint, position = 'start', children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { triggerRef, hintRef } = useTooltip({ isOpen, position });

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const triggerElement = isValidElement(children) ? children : <button>{children}</button>;
  const hintElement = isValidElement(hint) ? hint : <span>{hint}</span>;

  return (
    <>
      {cloneElement(triggerElement, {
        ...triggerElement.props,
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      {isOpen &&
        cloneElement(hintElement, {
          ...hintElement.props,
          ref: hintRef,
          className: clsx(
            "absolute top-0 left-0 p-1 rounded transition-opacity duration-500 bg-black text-white after:absolute after:-top-1 after:content-[''] after:w-2 after:h-2 after:bg-black after:rotate-45 after:-translate-x-1/2",
            position === 'start' && 'after:left-4',
            position === 'center' && 'after:left-1/2',
            position === 'end' && 'after:right-4',
            hintElement.props.className
          ),
        })}
    </>
  );
}
