import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MumbleGradient } from './mumble-gradient';
import { MumbleGradientRow } from './mumble-gradient-row';
import { MumbleViolet } from './mumble-violet';
import { MumbleVioletRow } from './mumble-violet-row';
import { MumbleWhite } from './mumble-white';
import { MumbleWhiteRow } from './mumble-white-row';
import { NavbarMumble } from './navbar-mumble';

export default {
  title: 'Logos',
} as Meta;

const Template: Story = () => (
  <>
    <div className="flex flex-col mb-l p-s max-w-[450px]">
      <div className="flex flex-col p-s gap-y-s">
        <MumbleGradientRow />
        <MumbleVioletRow />
        <div className="flex flex-col bg-slate-600 gap-y-s p-s">
          <MumbleWhiteRow />
          <NavbarMumble />
        </div>
        <MumbleGradient />
        <MumbleViolet />
        <div className="flex flex-col bg-slate-600 gap-y-s p-s">
          <MumbleWhite />
        </div>
      </div>
    </div>
  </>
);

export const Logos = Template.bind({});
