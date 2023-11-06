import * as React from 'react';

export function useDraggable() {
  const [node, setNode] = React.useState<HTMLElement>(null);
  const [{ dx, dy }, setOffset] = React.useState({
    dx: 0,
    dy: 0,
  });
  const ref = React.useCallback((node: HTMLElement) => {
    setNode(node);
  }, []);

  const handleMouseDown = React.useCallback(
    (e: MouseEvent) => {
      const startX = e.clientX - dx;
      const startY = e.clientY - dy;

      const handleMouseMove = (e: MouseEvent) => {
        setOffset({
          dx: e.clientX - startX,
          dy: e.clientY - startY,
        });
      };
      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [dx, dy]
  );

  React.useEffect(() => {
    if (!node) return;

    node.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  }, [node, dx, dy]);

  React.useEffect(() => {
    if (!node) return;

    node.addEventListener('mousedown', handleMouseDown);

    return () => {
      node.removeEventListener('mousedown', handleMouseDown);
    };
  }, [node, dx, dy, handleMouseDown]);

  return ref;
}
