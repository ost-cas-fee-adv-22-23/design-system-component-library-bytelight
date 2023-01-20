import React, { FC } from 'react';
import { HeadingProps } from './heading1';

export const Heading3: FC<HeadingProps> = ({ children }) => (
  <h3 className="text-slate-600 text-2xl font-semibold leading-tight">{children}</h3>
);
