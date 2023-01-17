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
  },
} as ComponentMeta<typeof ShareButtonComponent>;

const Template: ComponentStory<typeof ShareButtonComponent> = ({ icon, label, labelTransition }) => (
  <ShareButtonComponent icon={<ShareIcon size="16px" />} label="Copy Link" labelTransition="Copied!" />
);

export const ShareButton = Template.bind({});
