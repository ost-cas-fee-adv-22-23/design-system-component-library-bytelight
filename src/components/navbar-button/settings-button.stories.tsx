import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LogoutIcon, SettingsIcon } from '../index';
import { NavbarButton as NavbarButtonComp } from './navbar-button';

export default {
  title: 'Components/Button',
  component: NavbarButtonComp,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof NavbarButtonComp>;

const Template: ComponentStory<typeof NavbarButtonComp> = ({label, onClick, children}) => {
  return (
    <div className="flex  gap-x-l text-white">
      <NavbarButtonComp onClick={onClick} label='Settings'><div className="group-hover:rotate-180 transition duration-1000 transform-none">
        <SettingsIcon size="16px" />
      </div></NavbarButtonComp>

      <NavbarButtonComp onClick={onClick} label='Log Out'><div>
        <LogoutIcon size="16px" />
      </div></NavbarButtonComp>
    </div>
  );
};

export const NavbarButton = Template.bind({});

