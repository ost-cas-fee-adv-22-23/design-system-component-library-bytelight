import React, { FC } from 'react';
import { joinClassNames } from '../../helpers/index';

type Props = {
  src: string;
  alt: string;
  size: 'S' | 'M' | 'L' | 'XL';
};

const borderStyle = 'border-4 border-slate-100';

export const ProfilePicture: FC<Props> = ({ src, alt, size = 'M' }) => (
  <div
    className={joinClassNames([
      'flex items-center justify-center rounded-full bg-violet-200',
      size === 'S'
        ? 'w-10 h-10'
        : size === 'M'
        ? `h-16 w-16 ${borderStyle}`
        : size === 'L'
        ? `h-24 w-24 ${borderStyle}`
        : `h-40 w-40 ${borderStyle}`,
    ])}
  >
    <img src={src} alt={alt} sizes={size} className="rounded-full" />
  </div>
);
