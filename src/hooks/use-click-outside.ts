import { useCallback, useEffect, useState } from 'react';

export function useClickOutside<T extends HTMLElement>(handler: () => void) {
  const [node, setNode] = useState<T | null>(null);

  const ref = useCallback((node: T) => {
    setNode(node);
  }, []);

  const handleClick = useCallback(
    ({ target }: MouseEvent | TouchEvent) => {
      if (node && !node.contains(target as T)) {
        handler();
      }
    },
    [handler, node]
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
