import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Label as LabelComponent } from './label';

export default {
  title: 'Components/Label',
  component: LabelComponent,
  argTypes: {
    variant: {
      options: ['XL', 'L', 'M', 'Placeholder', 'S'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof LabelComponent>;

const Template: ComponentStory<typeof LabelComponent> = ({ variant, children }) => (
  <LabelComponent variant={variant}>{children}</LabelComponent>
);
export const Label = Template.bind({});

Label.args = {
  variant: 'L',
  children: 'Default Label',
};
