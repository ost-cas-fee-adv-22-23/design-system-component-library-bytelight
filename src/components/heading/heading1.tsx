import React, { FC, ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode;
};

export const Heading1: FC<HeadingProps> = ({ children }) => <h1 className={'text-slate-600 text-5xl'}>{children}</h1>;
