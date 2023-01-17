import React, { FC } from 'react';
import { Label } from '../label/label';

type Props = {
  placeholder: string;
  label: string;
  labelVariant: 'XL' | 'L' | 'M' | 'S';
  onInput: (input: string) => void;
};

export const TextInput: FC<Props> = ({ placeholder, label, labelVariant = 'L', onInput }) => (
  <>
    <Label variant={labelVariant}>{label}</Label>
    <div className=" flex items-center justify-end border border-slate-200 rounded-lg hover:border-violet-600">
      <input
        className="h-12 w-full text-slate-700 rounded-lg pr-10 py-4 pl-4 placeholder-slate-300 focus:outline-violet-600 focus:outline-2 border-none "
        type="text"
        placeholder={placeholder}
        onInput={(e) => onInput((e.target as HTMLInputElement).value)}
      />
    </div>
  </>
);
