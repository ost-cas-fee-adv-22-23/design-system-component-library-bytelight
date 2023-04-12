import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { CommentEmptyIcon, CommentFilledIcon } from '../index';
import { CommentAction as CommentActionComponent } from './comment-action';

export default {
  title: 'Components/Action',
  component: CommentActionComponent,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    count: {
      control: { type: 'number', min: 0, max: 10000 },
    },
  },
} as ComponentMeta<typeof CommentActionComponent>;

const Template: ComponentStory<typeof CommentActionComponent> = ({ ...args }) => {
  const [comments, setComments] = useState(args.count);
  const [label, setLabel] = useState(args.label);

  useEffect(() => {
    setComments(args.count);
    setLabel(args.label);
  }, [args.count]);

  return (
    <CommentActionComponent
      {...args}
      className={`flex items-center ${
        comments === 0 ? 'text-slate-500' : 'text-violet-600'
      } hover:bg-violet-50 hover:rounded-2xl group`}
      label={`${args.count} ${args.label}`}
      icon={
        <span
          className={`${
            comments === 0 ? 'text-slate-500 group-hover:text-violet-600' : 'text-violet-500 group-hover:text-violet-600'
          }`}
        >
          {comments === 0 ? <CommentEmptyIcon size="16px" /> : <CommentFilledIcon size="16px" />}
        </span>
      }
    />
  );
};

export const CommentAction = Template.bind({});

CommentAction.args = {
  count: 0,
  label: 'Comments',
};
