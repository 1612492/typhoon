import { ReactNode, useEffect, useState } from 'react';
import style from './style.module.css';
import { mergeStyles } from '../../utils/style';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  backdropClassName?: string;
  modalClassName?: string;
};

export function Modal({
  isOpen,
  onClose,
  children,
  backdropClassName,
  modalClassName,
}: ModalProps) {
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
      style={{ opacity: isMounted && isOpen ? 1 : 0 }}
      className={mergeStyles(style.backdrop, backdropClassName)}
    >
      <div
        role="presentation"
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: isMounted && isOpen ? 1 : 0,
          transform: isMounted && isOpen ? 'scale(1)' : 'scale(0)',
        }}
        className={mergeStyles(style.modal, modalClassName)}
      >
        {children}
      </div>
    </div>
  );
}
