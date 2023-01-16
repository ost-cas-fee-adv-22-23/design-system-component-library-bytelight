import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MumbleIcon } from '../icons/mumble';
import { Button as ButtonComponent } from './button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    children: { control: { type: 'text' } },
    as: {
      options: ['button', 'a'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    size: {
      options: ['M', 'L'],
      control: { type: 'select' },
    },
    href: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = ({ children, ...args }) => (
  <div className="inline-flex">
    <ButtonComponent {...args}>
      <div className="flex items-center gap-x-3">
        {children}
        <MumbleIcon size="16px" />
      </div>
    </ButtonComponent>
  </div>
);

export const Button = Template.bind({});

Button.args = {
  variant: 'primary',
  size: 'M',
  children: 'Button Label',
  href: '#',
  as: 'button'
};
