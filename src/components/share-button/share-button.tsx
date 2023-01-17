import React, { FC, ReactNode } from 'react';

type Props = {
  onClick: () => void;
  icon: ReactNode;
  isActive: boolean;
  label: string;
  labelTransition: string;
};

export const ShareButton: FC<Props> = ({
  onClick,
  isActive = false,
  label = 'Copy Link',
  labelTransition = 'Link copied',
  icon,
}) => {
  return (
    <button onClick={onClick} className="flex items-center text-slate-600 hover:bg-slate-100 hover:rounded-2xl">
      <div className="flex items-center gap-x-xs p-xs hover:text-slate-700 focus:rounded-2xl focus:bg-slate-100">
        {icon}
        <span>{!isActive ? label : labelTransition}</span>
      </div>
    </button>
  );
};
