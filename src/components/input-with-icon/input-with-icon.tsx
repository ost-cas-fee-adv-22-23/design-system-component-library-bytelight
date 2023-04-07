import React, { FC, ReactNode, useState } from 'react';
import { EyeIcon, MumbleIcon } from '../index';
import { Label } from '../label/label';

type Props = {
  placeholder: string;
  label: string;
  labelVariant: 'XL' | 'L' | 'M' | 'S' | 'Placeholder';
  isPasswordInput?: boolean;
  onInput: (input: string) => void;
  icon: ReactNode;
  value: string;
};

export const InputWithIcon: FC<Props> = ({
  placeholder,
  label,
  labelVariant = 'L',
  onInput,
  icon = <MumbleIcon size="16" />,
  isPasswordInput = false,
  value,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <Label variant={labelVariant}>{label}</Label>
      <div className=" flex items-center justify-end border border-slate-200 rounded-lg hover:border-violet-600">
        {!isPasswordInput ? (
          <>
            <input
              className="h-12 w-full text-slate-700 rounded-lg pr-10 py-4 pl-4 placeholder-slate-300 focus:outline-violet-600 focus:outline-2 border-none "
              type="text"
              placeholder={placeholder}
              onInput={(e) => onInput((e.target as HTMLInputElement).value)}
              value={value}
            />
            <div className="absolute p-4 text-slate-600">{icon}</div>
          </>
        ) : (
          <>
            <input
              className="h-12 w-full text-slate-700 rounded-lg pr-10 py-4 pl-4 placeholder-slate-300 focus:outline-violet-600 focus:outline-2 border-none "
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder={placeholder}
              onInput={(e) => onInput((e.target as HTMLInputElement).value)}
              value={value}
            />
            <button
              className="absolute p-4 text-slate-600 cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <EyeIcon size="16" />
            </button>
          </>
        )}
      </div>
    </>
  );
};
