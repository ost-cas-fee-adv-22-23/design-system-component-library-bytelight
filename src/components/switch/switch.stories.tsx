import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Switch as SwitchComponent } from './switch';

export default {
  title: 'Components/Button',
  component: SwitchComponent,
  argTypes: {
    labelLeft: {
      control: { type: 'text' },
    },
    labelRight: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof SwitchComponent>;

const Template: ComponentStory<typeof SwitchComponent> = ({ onClick, isActive, labelLeft, labelRight }) => {
  return <SwitchComponent onClick={() => {}} isActive={isActive} labelLeft={labelLeft} labelRight={labelRight} />;
};

export const Switch = Template.bind({});

Switch.args = {
  labelLeft: 'Deine Mumbles',
  labelRight: 'Deine Likes',
};
