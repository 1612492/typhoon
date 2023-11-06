import * as React from 'react';

type Props = {
  isOpen: boolean;
  position?: 'start' | 'center' | 'end';
};

export function useTooltip({ isOpen, position }: Props) {
  const triggerRef = React.useRef<HTMLElement>();
  const hintRef = React.useRef<HTMLElement>();

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

  return { triggerRef, hintRef };
}
