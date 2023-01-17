import React, { FC } from 'react';

type Props = {
  onClick: () => void;
  isActive: boolean;
};

export const Switch: FC<Props> = ({ onClick, isActive = true }) => (
  <div className="inline-flex bg-slate-200 rounded-lg text-xl p-xxs">
    <button onClick={onClick} className="flex">
      <span
        className={`px-s py-xs rounded-md text-slate-600 ${isActive ? 'bg-white text-purple-600' : 'hover:text-slate-800'} `}
      >
        Deine Mumbles
      </span>
      <span
        className={`px-s py-xs rounded-md text-slate-600  ${
          !isActive ? 'bg-white text-purple-600' : 'hover:text-slate-800'
        } `}
      >
        Deine Likes
      </span>
    </button>
  </div>
);
