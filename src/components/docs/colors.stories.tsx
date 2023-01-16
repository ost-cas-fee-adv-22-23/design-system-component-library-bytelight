import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Colors } from './colors';

export default {
  title: 'Colors',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
} as Meta;

const Template: Story = () => (
  <>
    <Colors />
  </>
);

export const colors = Template.bind({});
