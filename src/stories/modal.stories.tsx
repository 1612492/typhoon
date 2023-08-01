import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';

import { Modal } from '../components/modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

function ModalContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Modal
      </Modal>
    </Fragment>
  );
}

export const Default: Story = {
  render: () => <ModalContainer />,
};
