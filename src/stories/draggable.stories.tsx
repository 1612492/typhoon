import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { useDraggable } from '../hooks';

const meta: Meta = {
  title: 'Draggable',
};

export default meta;

type Story = StoryObj<typeof meta>;

function Container() {
  const ref = useDraggable();

  return <div ref={ref} style={{ width: 100, height: 100, border: '1px solid #000' }}></div>;
}

export const Default: Story = {
  render: () => <Container />,
};
