import React, { FC } from 'react';
import { Props } from './heading1';

export const Heading4: FC<Props> = ({ children }) => <h4 className={'text-slate-600 text-2xl'}>{children}</h4>;
