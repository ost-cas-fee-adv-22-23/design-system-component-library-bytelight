import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { InputWithIcon as InputComponentWithIcon } from './input-with-icon';

export default {
  title: 'Components/Input',
  component: InputComponentWithIcon,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    labelVariant: {
      options: ['XL', 'L', 'M', 'S', 'Placeholder'],
      control: { type: 'select' },
    },
    isPasswordInput: {
      options: [false, true],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof InputComponentWithIcon>;

const Template: ComponentStory<typeof InputComponentWithIcon> = (args) => (
  <>
    <InputComponentWithIcon {...args} />
  </>
);
export const InputWithIcon = Template.bind({});

InputWithIcon.args = {
  label: 'Default Label',
  placeholder: 'Placeholder',
  labelVariant: 'M',
  isPasswordInput: false,
};
