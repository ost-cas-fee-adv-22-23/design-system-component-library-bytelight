import React, { FC } from 'react';
import { HeadingProps } from './heading1';

export const Heading2: FC<HeadingProps> = ({ children }) => (
  <h2 className={'text-slate-600 text-3xl font-bold leading-tight'}>{children}</h2>
);
