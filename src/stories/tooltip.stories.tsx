import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '../';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof meta>;

function Container() {
  return <Tooltip hint="A sample tip content">Hover Me</Tooltip>;
}

export const Default: Story = {
  render: () => <Container />,
};
