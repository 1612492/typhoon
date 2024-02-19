import { ReactNode, cloneElement, isValidElement, useState } from 'react';

import { useClickOutside, useDropdown } from '../../hooks';
import { clsx } from '../../utils';

type Props = {
  menu: ReactNode;
  position?: 'start' | 'center' | 'end';
  children: ReactNode;
};

export function Dropdown({ menu, position = 'start', children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const { triggerRef, menuRef } = useDropdown({ isOpen, position });

  const triggerElement = isValidElement(children) ? children : <button>{children}</button>;
  const menuElement = isValidElement(menu) ? menu : <span>{menu}</span>;

  return (
    <div ref={ref} className="w-fit">
      {cloneElement(triggerElement, {
        ...triggerElement.props,
        ref: triggerRef,
        onClick: () => setIsOpen((p) => !p),
      })}
      {isOpen &&
        cloneElement(menuElement, {
          ...menuElement.props,
          ref: menuRef,
          className: clsx(
            'absolute top-0 p-1 rounded transition-opacity duration-500 bg-black text-white',

            menuElement.props.className
          ),
        })}
    </div>
  );
}
