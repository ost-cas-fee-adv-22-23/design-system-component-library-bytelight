import React, { FC, ReactNode } from 'react';

type Props = {
  onClick: () => void;
  label: string;
  icon: ReactNode;
  className: string;
  count?: number;
};

export const CommentAction: FC<Props> = ({ onClick, label, icon, className }) => {
  return (
    <button onClick={onClick} className={className}>
      <div className="flex items-center gap-x-xs p-xs hover:text-violet-600">
        {icon}
        <span>{label}</span>
      </div>
    </button>
  );
};
