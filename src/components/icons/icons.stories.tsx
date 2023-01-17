import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconProps } from './icon-props';

import * as Icons from './index';

const colors = [
  'black',
  'white',
  'violet900',
  'violet800',
  'violet700',
  'violet600',
  'violet500',
  'violet400',
  'violet300',
  'violet200',
  'violet100',
  'violet50',
  'pink900',
  'pink800',
  'pink800',
  'pink700',
  'pink600',
  'pink500',
  'pink400',
  'pink300',
  'pink200',
  'pink100',
  'pink50',
  'slate900',
  'slate800',
  'slate800',
  'slate700',
  'slate600',
  'slate500',
  'slate400',
  'slate300',
  'slate200',
  'slate100',
  'slate50',
] as const;
export default {
  title: 'Iconography',
  component: Icons,
  argTypes: {
    color: {
      options: colors,
      control: { type: 'select' },
    },
  },
} as unknown as ComponentMeta<(typeof Icons)['ArrowDownIcon']>;

const COLORS: Record<(typeof colors)[number], string> = {
  black: 'text-black',
  white: 'text-white',
  violet900: 'text-violet-900',
  violet800: 'text-violet-800',
  violet700: 'text-violet-700',
  violet600: 'text-violet-600',
  violet500: 'text-violet-500',
  violet400: 'text-violet-400',
  violet300: 'text-violet-300',
  violet200: 'text-violet-200',
  violet100: 'text-violet-100',
  violet50: 'text-violet-50',
  pink900: 'text-pink-900',
  pink800: 'text-pink-800',
  pink700: 'text-pink-700',
  pink600: 'text-pink-600',
  pink500: 'text-pink-500',
  pink400: 'text-pink-400',
  pink300: 'text-pink-300',
  pink200: 'text-pink-200',
  pink100: 'text-pink-100',
  pink50: 'text-pink-50',
  slate900: 'text-slate-900',
  slate800: 'text-slate-800',
  slate700: 'text-slate-700',
  slate600: 'text-slate-600',
  slate500: 'text-slate-500',
  slate400: 'text-slate-400',
  slate300: 'text-slate-300',
  slate200: 'text-slate-200',
  slate100: 'text-slate-100',
  slate50: 'text-slate-50',
};

const Template: ComponentStory<(typeof Icons)['ArrowDownIcon']> = (args) => {
  return (
    <div className="flex flex-wrap">
      {Object.values(Icons).map((icon) => (
        <div
          className={`outline outline-1 outline-slate-300 rounded-sm m-2 flex justify-center items-center p-2 ${
            COLORS[(args as IconProps & { color: (typeof colors)[number] }).color as (typeof colors)[number]]
          }`}
        >
          {icon({ ...args })}
        </div>
      ))}
    </div>
  );
};

export const Iconography = Template.bind({});

Iconography.args = {
  size: '16px',
};
