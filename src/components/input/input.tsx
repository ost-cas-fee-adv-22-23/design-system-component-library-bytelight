import React, { ChangeEvent, FC } from 'react';
import { Label } from '../label/label';

type Props = {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  labelVariant: 'XL' | 'L' | 'M' | 'S';
};

export const Input: FC<Props> = ({ placeholder, label, labelVariant = 'L', value, onChange }) => (
  <>
    <Label variant={labelVariant}>{label}</Label>
    <div className=" flex items-center justify-end border border-slate-200 rounded-lg hover:border-violet-600">
      <input
        className="h-12 w-full text-slate-700 rounded-lg pr-10 py-4 pl-4 placeholder-slate-300 focus:outline-violet-600 focus:outline-2 border-none "
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  </>
);
