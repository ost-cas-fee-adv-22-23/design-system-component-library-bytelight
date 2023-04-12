import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MumbleIcon } from '../icons/mumble';
import { ButtonRound as ButtonRoundComponent } from './button-round';

export default {
  title: 'Components/Button',
  component: ButtonRoundComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof ButtonRoundComponent>;

const Template: ComponentStory<typeof ButtonRoundComponent> = (args) => (
  <ButtonRoundComponent {...args}>
    <MumbleIcon size="16px" />
  </ButtonRoundComponent>
);

export const ButtonRound = Template.bind({});

ButtonRound.args = {};
