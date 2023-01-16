import React, { FC, ReactNode } from 'react';

type Props = {
  label?: string;
  onClick: () => void;
  children: ReactNode;
};

export const NavbarButton: FC<Props> = ({ label, onClick, children }) => {
  return (
    <button
      className=" bg-violet-600 hover:bg-violet-700 rounded-lg group flex flex-col items-center p-2 gap-1"
      onClick={onClick}
    >
   {children}
      {label && label}
    </button>
  );
};
