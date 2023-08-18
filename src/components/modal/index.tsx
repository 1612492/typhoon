import { ReactNode, useEffect, useState } from 'react';
import './style.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  backdropColor?: string;
};

export function Modal({ isOpen, onClose, children, backdropColor }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsMounted(false);
    setTimeout(() => onClose(), 500);
  };

  if (!isOpen) return null;

  return (
    <div
      role="presentation"
      onClick={handleClose}
      style={{
        opacity: isMounted && isOpen ? 1 : 0,
        background: backdropColor ?? 'rgb(31 41 55/0.9)',
      }}
      className="backdrop"
    >
      <div
        role="presentation"
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: isMounted && isOpen ? 1 : 0,
          transform: isMounted && isOpen ? 'scale(1)' : 'scale(0)',
        }}
        className="modal"
      >
        {children}
      </div>
    </div>
  );
}
