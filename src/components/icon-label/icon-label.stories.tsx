import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfileIcon } from '../index';
import { IconLabel as IconLabelComponent } from './icon-label';

export default {
  title: 'Components/Label',
  component: IconLabelComponent,
  argTypes : {
  variant: {
    options: ['violet', 'gray'],
    control: { type: 'select' },
  },
  value: {
    control: { type: 'text' },
  },
  icon: {
    control:false
  }
}
} as ComponentMeta<typeof IconLabelComponent>;

const Template: ComponentStory<typeof IconLabelComponent> = ({ value, variant, icon }) => (
  <>
   <IconLabelComponent value={value} variant={variant} icon={<ProfileIcon size="12" />}></IconLabelComponent>
  </>
);

export const IconLabel = Template.bind({});

IconLabel.args = {
  value: 'Username',
  variant: 'violet'
}
