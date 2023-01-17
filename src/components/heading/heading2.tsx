import React, { FC } from 'react';
import { Props } from './heading1';

export const Heading2: FC<Props> = ({ children }) => <h2 className={'text-slate-600 text-4xl '}>{children}</h2>;
