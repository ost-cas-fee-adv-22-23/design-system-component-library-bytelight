import React, { ChangeEvent, FC } from 'react';

type Props = {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea: FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-full bg-slate-100 palceholder:text-slate-500 text-lg ease-in-out transition-all resize-none p-s rounded-lg border border-slate-200 outline outline-2 outline-transparent hover:border-transparent hover:outline-slate-300  focus:outline-violet-600"
      />
    </>
  );
};

export default Textarea;
