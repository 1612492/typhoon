import React, { createContext, useContext, useState } from 'react';

import { useClickOutside } from '../../hooks';
import { clsx } from '../../utils';

enum Status {
  Entering,
  Entered,
  Exiting,
  Exited,
}

type Props = {
  status: Status;
  onOpen: () => void;
  onClose: () => void;
};

const Context = createContext<Props>({
  status: Status.Exited,
  onOpen: () => undefined,
  onClose: () => undefined,
});

function Container({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState(Status.Exited);

  const onOpen = () => {
    setStatus(Status.Entering);
    setTimeout(() => setStatus(Status.Entered), 0);
  };
  const onClose = () => {
    setStatus(Status.Exiting);
    setTimeout(() => setStatus(Status.Exited), 500);
  };

  return (
    <Context.Provider
      value={{
        status,
        onOpen,
        onClose,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function Trigger({ children }: { children: React.ReactNode }) {
  const { onOpen } = useContext(Context);

  return <button onClick={onOpen}>{children}</button>;
}

function Backdrop() {
  const { status } = useContext(Context);

  if (status === Status.Exited) return null;

  return (
    <div
      className={clsx(
        'fixed inset-0 bg-black bg-opacity-80 transition-opacity',
        status === Status.Entered ? 'opacity-100' : 'opacity-0'
      )}
    />
  );
}

function Content({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  const { status, onClose } = useContext(Context);
  const ref = useClickOutside<HTMLDivElement>(onClose);

  if (status === Status.Exited) return null;

  return (
    <div
      ref={ref}
      style={style}
      className={clsx(
        'fixed top-1/2 left-1/2 bg-white transition-all -translate-x-1/2 -translate-y-1/2 duration-500',
        status === Status.Entered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      )}
    >
      {children}
    </div>
  );
}

export const Modal = { Container, Trigger, Backdrop, Content };
