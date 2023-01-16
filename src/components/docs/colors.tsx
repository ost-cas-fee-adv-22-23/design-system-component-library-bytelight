import React, { FC } from 'react';
import { Heading1 } from '../heading/heading1';
import { Paragraph } from '../paragraph/paragraph';

const violetColors: Record<string, string> = {
  '900': 'bg-violet-900',
  '800': 'bg-violet-800',
  '700': 'bg-violet-700',
  '600': 'bg-violet-600',
  '500': 'bg-violet-500',
  '400': 'bg-violet-400',
  '300': 'bg-violet-300',
  '200': 'bg-violet-200',
  '100': 'bg-violet-100',
  '50': 'bg-violet-50',
};

const pinkColors: Record<string, string> = {
  '900': 'bg-pink-900',
  '800': 'bg-pink-800',
  '700': 'bg-pink-700',
  '600': 'bg-pink-600',
  '500': 'bg-pink-500',
  '400': 'bg-pink-400',
  '300': 'bg-pink-300',
  '200': 'bg-pink-200',
  '100': 'bg-pink-100',
  '50': 'bg-pink-50',
};

const slateColors: Record<string, string> = {
  '900': 'bg-slate-900',
  '800': 'bg-slate-800',
  '700': 'bg-slate-700',
  '600': 'bg-slate-600',
  '500': 'bg-slate-500',
  '400': 'bg-slate-400',
  '300': 'bg-slate-300',
  '200': 'bg-slate-200',
  '100': 'bg-slate-100',
  '50': 'bg-slate-50',
};

export const Colors: FC = () => {
  const sizes = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '50'];

  return (
    <>
      <div className="pb-20">
        <Heading1>Colors</Heading1>
        <Paragraph fontSize="L">Base on the Tailwind colors "Slate", "Pink" and "Violet".</Paragraph>
      </div>{' '}
      <Paragraph fontSize="M">VIOLET</Paragraph>
      <div className="flex gap-x-xs my-s">
        {sizes.map((size) => (
          <div key={`violet-${size}`} className="flex flex-col items-center">
            <div className={[`w-[96px] h-[96px]`, violetColors[size]].join(' ')}></div>
            <div>{size}</div>
          </div>
        ))}
      </div>
      <Paragraph fontSize="M">PINK</Paragraph>
      <div className="flex gap-x-xs my-s">
        {sizes.map((size) => (
          <div key={`pink-${size}`} className="flex flex-col items-center">
            <div className={[`w-[96px] h-[96px]`, pinkColors[size]].join(' ')}></div>
            <div>{size}</div>
          </div>
        ))}
      </div>
      <Paragraph fontSize="M">SLATE</Paragraph>
      <div className="flex gap-x-xs my-s">
        {sizes.map((size) => (
          <div key={`slate-${size}`} className="flex flex-col items-center">
            <div className={[`w-[96px] h-[96px]`, slateColors[size]].join(' ')}></div>
            <div>{size}</div>
          </div>
        ))}
      </div>
    </>
  );
};
