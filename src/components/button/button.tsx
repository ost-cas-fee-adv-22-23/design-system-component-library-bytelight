import React, { FC, ReactNode } from 'react';
import { joinClassNames } from '../../helpers';

export type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'M' | 'L';
  as: 'button' | 'a';
  href?: string;
};

export const getVariantStyles = (variant: ButtonProps['variant'], size: ButtonProps['size']) => {
  switch (variant) {
    case 'primary':
      return 'text-white hover:bg-violet-700 hover:outline-violet-100 disabled:bg-gray-300 bg-violet-600 active:outline-violet-200';
    case 'secondary':
      return 'text-white hover:bg-slate-700 hover:outline-slate-100 disabled:bg-gray-300 bg-slate-600 active:outline-slate-200';
    case 'tertiary':
      return 'bg-gradient-50-50 hover:bg-gradient-30-70 active:bg-gradient-20-80 from-pink-500 to-violet-500 hover:outline-violet-100 active:outline-violet-200';
    default:
      return '';
  }
};

export const Button: FC<ButtonProps> = ({ onClick, children, variant = 'primary', size = 'M', as, href }) => (
  <>
    {as === 'button' ? (
      <button
        className={joinClassNames([
          'w-full rounded-lg font-semibold transition-colors hover:outline active:outline active:outline-s hover:outline-xs text-white',
          size === 'M' ? 'p-3' : 'px-6 py-4',
          getVariantStyles(variant, size),
        ])}
        onClick={onClick}
      >
        {children}
      </button>
    ) : (
      <a
        className={joinClassNames([
          'flex w-full justify-center rounded-lg font-semibold transition-colors hover:outline active:outline active:outline-s hover:outline-xs text-white cursor-pointer',
          size === 'M' ? 'p-3' : 'px-6 py-4',
          getVariantStyles(variant, size),
        ])}
        onClick={onClick}
        href={href}
      >
        {children}
      </a>
    )}
  </>
);
