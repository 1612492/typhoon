import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '../';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof meta>;

function Container() {
  return (
    <Accordion
      summary="A sample content"
      details={
        <div style={{ padding: '0.5rem' }}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </div>
      }
    />
  );
}

export const Default: Story = {
  render: () => <Container />,
};
