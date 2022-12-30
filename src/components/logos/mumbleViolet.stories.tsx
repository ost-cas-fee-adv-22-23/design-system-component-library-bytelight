import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MumbleViolet as Violet } from './mumbleViolet';
import { MumbleVioletRow } from './mumbleVioletRow';

export default {
  title: 'Components/Logos',
  component: Violet,
} as Meta;

const Template: Story = () => (
  <div className="flex flex-col gap-y-xl p-s">
    <Violet />
    <MumbleVioletRow />
  </div>
);

export const MumbleViolet = Template.bind({});