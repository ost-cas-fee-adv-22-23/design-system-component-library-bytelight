import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import { ShareIcon } from '../icons/share';

type Props = {
  icon?: ReactNode;
  label: string;
  labelTransition: string;
  link: string;
};

export const ShareButton: FC<Props> = ({
  label = 'Copy Link',
  labelTransition = 'Link copied',
  link,
  icon = <ShareIcon size="16px" />,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    setTimeout(() => setIsCopied(false), 2000);
  }, [isCopied]);

  return (
    <button
      onClick={() => {
        setIsCopied(true);
        copyToClipboard(link);
      }}
      className="flex items-center text-slate-600 hover:bg-slate-100 hover:rounded-2xl"
    >
      <div className="flex items-center gap-x-xs p-xs hover:text-slate-700 focus:rounded-2xl focus:bg-slate-100">
        {icon}
        <span>{!isCopied ? label : labelTransition}</span>
      </div>
    </button>
  );
};
