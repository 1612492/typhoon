import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
};

export default meta;

type Story = StoryObj<typeof meta>;

function Container() {
  return (
    <>
      <Modal.Container>
        <Modal.Backdrop />
        <Modal.Trigger className="border p-2 rounded">Click Me</Modal.Trigger>
        <Modal.Content className="w-max max-w-md p-2 rounded">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa
          sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
          excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
          elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
          cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem
          sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit
          enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa
          duis.
        </Modal.Content>
      </Modal.Container>
    </>
  );
}

export const Default: Story = {
  render: () => <Container />,
};
