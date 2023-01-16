import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Spacing',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
} as Meta<{}>;

const Template: Story<{}> = () => (
  <div className="gap-2 flex flex-col">
    <div className="p-2 inline-flex  items-center">
      <span className="bg-violet-100 p-xxs border border-violet-600" />
      <span className="ml-5">xxs - 4px</span>
    </div>
    <div className="p-2 inline-flex items-center">
      <span className="bg-violet-100 p-xs border border-violet-600" />
      <span className="ml-5">xs - 8px</span>
    </div>
    <div className=" p-2 inline-flex items-center">
      <span className="bg-violet-100 p-s border border-violet-600" />
      <span className="ml-5">s - 16px</span>
    </div>
    <div className=" p-2 inline-flex items-center">
      <span className="bg-violet-100 p-m border border-violet-600" />
      <span className="ml-5">m - 24px</span>
    </div>
    <div className=" p-2 inline-flex items-center">
      <span className="bg-violet-100 p-l border border-violet-600" />
      <span className="ml-5">l - 32px</span>
    </div>
    <div className=" p-2 inline-flex items-center">
      <span className="bg-violet-100 p-xl border border-violet-600" />
      <span className="ml-5"> xl - 48px</span>
    </div>
    <div className="p-2 inline-flex items-center">
      <span className="bg-violet-100 p-xxl border border-violet-600 " />
      <span className="ml-5">xl - 64px</span>
    </div>
  </div>
);
export const Spacing = Template.bind({});
