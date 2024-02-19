import { ReactNode, cloneElement, useState } from 'react';

import { clsx } from '../../utils';

type Props = {
  summary: ReactNode;
  details: ReactNode;
  icon: JSX.Element;
};

export function Accordion({ summary, details, icon }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-hidden rounded border">
      <button
        className="w-full flex justify-between items-center gap-x-4 bg-gray-300 p-2"
        onClick={() => setIsOpen((p) => !p)}
      >
        {summary}
        {cloneElement(icon, {
          className: clsx(
            'w-6 h-6 transition-transform duration-500',
            isOpen ? 'rotate-180' : 'rotate-0'
          ),
        })}
      </button>
      <div className={clsx('transition-all duration-500', isOpen ? 'max-h-screen' : 'max-h-0')}>
        {details}
      </div>
    </div>
  );
}
