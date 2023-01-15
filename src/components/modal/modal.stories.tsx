import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../index';
import { Modal as MumbleModal } from './modal';

export default {
  title: 'Components/Modal',
  component: MumbleModal,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },


} as ComponentMeta<typeof MumbleModal>;

const Template: ComponentStory<typeof MumbleModal> = ({ onClose, children, title}) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
  <>  
  {isOpen? <MumbleModal onClose={() => setIsOpen(!isOpen)} title={title}>{children}</MumbleModal> : <Button as='button' onClick={() => setIsOpen(!isOpen)}>Open Modal</Button> }
  </>

)
};
export const Modal = Template.bind({});

Modal.args = {
  title: 'Einstellungen'
};
