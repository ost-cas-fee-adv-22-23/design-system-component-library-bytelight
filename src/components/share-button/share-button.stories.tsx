import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ShareIcon } from '../icons/share';
import { ShareButton as ShareButtonComponent } from './share-button';

export default {
  title: 'Components/Action',
  component: ShareButtonComponent,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    labelTransition: {
      control: { type: 'text' },
    },
    icon: {
      control: false,
    },
    link: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof ShareButtonComponent>;

const Template: ComponentStory<typeof ShareButtonComponent> = ({ icon, label, labelTransition, link }) => (
  <ShareButtonComponent link={link} label={label} labelTransition={labelTransition} icon={icon} />
);

export const ShareButton = Template.bind({});

ShareButton.args = {
  label: 'Copy Link',
  labelTransition: 'Copied!',
};
