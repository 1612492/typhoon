import { useCallback, useEffect, useRef } from 'react';

export function useClickOutside<T extends HTMLElement>(handler: () => void) {
  const ref = useRef<T | null>(null);

  const handleClick = useCallback(
    ({ target }: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(target as T)) {
        handler();
      }
    },
    [handler]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    document.addEventListener('touchstart', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('touchstart', handleClick, true);
    };
  }, [handleClick]);

  return ref;
}
