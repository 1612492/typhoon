import * as React from 'react';

export function useClickOutside(handler: () => void) {
  const [node, setNode] = React.useState<HTMLElement>(null);

  const ref = React.useCallback((node: HTMLElement) => {
    setNode(node);
  }, []);

  const handleClick = React.useCallback(
    ({ target }: MouseEvent) => {
      if (node && !node.contains(target as HTMLElement)) {
        handler();
      }
    },
    [handler, node]
  );

  React.useEffect(() => {
    document.addEventListener('click', handleClick, true);
    document.addEventListener('touchstart', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('touchstart', handleClick, true);
    };
  }, [handleClick]);

  return ref;
}
