import { useEffect, useRef } from 'react';

type Props = {
  isOpen: boolean;
  position?: 'start' | 'center' | 'end';
};

export function useDropdown({ isOpen, position }: Props) {
  const triggerRef = useRef<HTMLElement>();
  const menuRef = useRef<HTMLElement>();

  useEffect(() => {
    if (!isOpen || !triggerRef.current || !menuRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    let left = 0;
    let top = 0;

    switch (position) {
      case 'start':
        left = triggerRect.x;
        top = triggerRect.y + triggerRect.height + 6;
        break;
      case 'center':
        left = triggerRect.x + (triggerRect.width - menuRect.width) / 2;
        top = triggerRect.y + triggerRect.height + 6;
        break;
      case 'end':
        left = triggerRect.x + triggerRect.width - menuRect.width;
        top = triggerRect.y + triggerRect.height + 6;
        break;
      default:
        break;
    }

    menuRef.current.style.transform = `translate(${left}px, ${top}px)`;
  }, [isOpen, menuRef, position]);

  return { triggerRef, menuRef };
}
