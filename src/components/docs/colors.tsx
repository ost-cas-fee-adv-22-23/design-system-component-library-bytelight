import React, { FC } from 'react';
import { Heading1 } from '../heading/heading1';
import { Paragraph } from '../paragraph/paragraph';

export const Colors: FC = () => {
  const sizes = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '50'];

  return (
    <>
      <Heading1>Colors</Heading1>
      <Paragraph fontSize="L">Base on the Tailwind colors "Slate", "Pink" and "Violet".</Paragraph>
      <Paragraph fontSize="M">VIOLET</Paragraph>
      <div className="flex gap-x-xs my-s">
        {sizes.map((size) => (
          <div className="flex flex-col items-center">
            <div className={`w-[96px] h-[96px] bg-violet-${size}`}></div>
            <div>{size}</div>
          </div>
        ))}
      </div>

      <Paragraph fontSize="M">PINK</Paragraph>
      <div className="flex gap-x-xs my-s">
        {sizes.map((size) => (
          <div className="flex flex-col items-center">
            <div className={`w-[96px] h-[96px] bg-pink-${size}`}></div>
            <div>{size}</div>
          </div>
        ))}
      </div>

      <Paragraph fontSize="M">SLATE</Paragraph>
      <div className="flex gap-x-xs my-s">
        {sizes.map((size) => (
          <div className="flex flex-col items-center">
            <div className={`w-[96px] h-[96px] bg-slate-${size}`}></div>
            <div>{size}</div>
          </div>
        ))}
      </div>
    </>
  );
};
