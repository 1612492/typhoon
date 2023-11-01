import './style.css';
import * as React from 'react';

import { clsx } from '../../utils/clsx';

type Props = {
  hint: React.ReactNode;
  position?: 'start' | 'center' | 'end';
  children: React.ReactNode;
};

export default function Tooltip({ hint, position = 'start', children }: Props) {
  const triggerRef = React.useRef<HTMLElement>();
  const hintRef = React.useRef<HTMLElement>();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  React.useEffect(() => {
    if (!isOpen || !triggerRef.current || !hintRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const hintRect = hintRef.current.getBoundingClientRect();

    let left = 0;
    let top = 0;

    switch (position) {
      case 'start':
        left = triggerRect.x;
        top = triggerRect.y + triggerRect.height + 6;
        break;
      case 'center':
        left = triggerRect.x + (triggerRect.width - hintRect.width) / 2;
        top = triggerRect.y + triggerRect.height + 6;
        break;
      case 'end':
        left = triggerRect.x + triggerRect.width - hintRect.width;
        top = triggerRect.y + triggerRect.height + 6;
        break;
      default:
        break;
    }

    hintRef.current.style.transform = `translate(${left}px, ${top}px)`;
  }, [isOpen, position]);

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
