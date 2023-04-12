import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { LikeAction as LikeActionComponent } from './like-action';

export default {
  title: 'Components/Action',
  component: LikeActionComponent,
  argTypes: {
    count: {
      control: { type: 'number', min: 0, max: 10000 },
    },
    hasMyLike: { type: 'boolean' },
  },
} as ComponentMeta<typeof LikeActionComponent>;

const Template: ComponentStory<typeof LikeActionComponent> = ({ ...args }) => {
  const [likes, setLikes] = useState(args.count);
  const [hasMyLike, setHasMyLike] = useState(args.hasMyLike);

  useEffect(() => {
    setLikes(args.count);
    setHasMyLike(args.hasMyLike);
  }, [args.count, args.hasMyLike]);

  return (
    <LikeActionComponent
      {...args}
      hasMyLike={hasMyLike}
      count={likes}
      onClick={() => {
        if (hasMyLike) {
          setHasMyLike(false);
          setLikes(likes - 1);
          return;
        }
        setLikes(likes + 1);
        setHasMyLike(true);
      }}
    />
  );
};

export const LikeAction = Template.bind({});

LikeAction.args = {
  count: 0,
  hasMyLike: false,
};
