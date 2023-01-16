import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import { ShareIcon } from '../icons/share';
import { ShareButton as ShareButtonComponent } from './share-button';

export default {
  title: 'Components/Action',
  component: ShareButtonComponent,
} as ComponentMeta<typeof ShareButtonComponent>;

const Template: ComponentStory<typeof ShareButtonComponent> = (args) => {
  const [isCopied, setIsCopied] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();
  const link = 'https://smartive.ch/';

  useEffect(() => {
    setTimeout(() => setIsCopied(false), 2000);
  }, [isCopied]);

  return (
    <ShareButtonComponent
      {...args}
      onClick={() => {
        setIsCopied(true);
        copyToClipboard(link);
      }}
      isActive={isCopied}
      icon={<ShareIcon size="16px" />}
    />
  );
};

export const ShareButton = Template.bind({});

ShareButton.args = {
  label: 'Copy Me pls',
  labelTransition: 'Thanks!',
};
