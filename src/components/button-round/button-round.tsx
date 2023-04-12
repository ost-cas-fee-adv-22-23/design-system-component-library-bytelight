import React, { FC, ReactNode } from 'react';

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const ButtonRound: FC<Props> = ({ onClick, children }) => (
  <button
    className={
      'text-white rounded-full bg-slate-600 p-4 hover:bg-slate-700 active:bg-slate-700 hover:outline active:outline hover:outline-xs active:outline-s hover:outline-slate-100 active:outline-slate-200'
    }
    onClick={onClick}
  >
    {children}
  </button>
);
