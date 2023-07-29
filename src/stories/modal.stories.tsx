import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../components/modal';

const meta = {
  title: 'Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
