import React, { FC, useEffect, useState } from 'react';
import { HeartEmptyIcon, HeartFilledIcon } from '../index';

type Props = {
  onClick: () => void;
  count: number;
  hasMyLike: boolean;
};

export const LikeAction: FC<Props> = ({ onClick, count, hasMyLike }) => {
  const [isLiking, setIsLiking] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => {
          onClick();
          if (!hasMyLike) {
            setIsLiking(true);
            setTimeout(() => {
              setIsLiking(false);
            }, 2000);
          }
        }}
        className="flex items-center text-slate-600 hover:bg-pink-50 hover:rounded-2xl"
      >
        <div className="flex items-center gap-x-xs p-xs hover:text-pink-700 group">
          {hasMyLike ? (
            <>
              <span className="text-pink-500 animate-bounce-short">
                <HeartFilledIcon size="16" />
              </span>
              <span className="text-pink-900">
                {count} {isLiking ? 'Liked!' : count === 1 ? 'Like' : 'Likes'}
              </span>
            </>
          ) : (
            <>
              <span className="hover:text-pink-500 group-hover:animate-like-hover">
                <HeartEmptyIcon size="16" />
              </span>
              <span className={`${isLiking ? 'text-pink-900' : ''}`}>
                {count} {count === 1 ? 'Like' : 'Likes'}
              </span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};
