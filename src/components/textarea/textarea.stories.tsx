import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Textarea as TextareaComponent } from './textarea';

export default {
  title: 'Components',
  component: TextareaComponent,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof TextareaComponent>;

const Template: ComponentStory<typeof TextareaComponent> = ({ ...args }) => (
  <>
    <TextareaComponent {...args} />
  </>
);

export const Textarea = Template.bind({});

Textarea.args = {
  placeholder: 'Placeholder',
};
