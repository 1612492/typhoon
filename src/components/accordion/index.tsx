import './style.css';
import * as React from 'react';

import { clsx } from '../../utils';
import { ChevronIcon } from '../icons';

type Props = {
  summary: React.ReactNode;
  details: React.ReactNode;
};

export function Accordion({ summary, details }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="accordion">
      <button className="summary" onClick={() => setIsOpen((prevState) => !prevState)}>
        {summary}
        <ChevronIcon className={clsx('icon', isOpen ? 'icon--expanded' : 'icon--collapsed')} />
      </button>
      <div className={clsx('details', isOpen ? 'details--expanded' : 'details--collapsed')}>
        {details}
      </div>
    </div>
  );
}
