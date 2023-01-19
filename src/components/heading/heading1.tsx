import React, { FC, ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode;
};

export const Heading1: FC<HeadingProps> = ({ children }) => (
  <h1 className="text-slate-600 text-4xl font-bold leading-tight">{children}</h1>
);
