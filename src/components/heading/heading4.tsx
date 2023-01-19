import React, { FC } from 'react';
import { HeadingProps } from './heading1';

export const Heading4: FC<HeadingProps> = ({ children }) => (
  <h4 className={'text-slate-600 text-xl font-semibold leading-tight'}>{children}</h4>
);
