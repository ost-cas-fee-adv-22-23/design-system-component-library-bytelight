import React, { FC } from 'react';
import { Props } from './heading1';

export const Heading3: FC<Props> = ({ children }) => <h3 className={'text-slate-600 text-3xl '}>{children}</h3>;
