import './style.css';
import * as React from 'react';

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

const Context = React.createContext<Props>({
  status: Status.Exited,
  onOpen: () => undefined,
  onClose: () => undefined,
});

function Container({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = React.useState(Status.Exited);

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
  const { onOpen } = React.useContext(Context);

  return <button onClick={onOpen}>{children}</button>;
}

function Backdrop() {
  const { status } = React.useContext(Context);

  if (status === Status.Exited) return null;

  return <div style={{ opacity: status === Status.Entered ? 1 : 0 }} className="backdrop" />;
}

function Content({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  const { status, onClose } = React.useContext(Context);
  const ref = useClickOutside(onClose);

  if (status === Status.Exited) return null;

  return (
    <div
      ref={ref}
      style={style}
      className={clsx('modal', status === Status.Entered ? 'modal--entered' : 'modal--exited')}
    >
      {children}
    </div>
  );
}

export const Modal = { Container, Trigger, Backdrop, Content };
