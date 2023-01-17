import React, { FC, ReactNode } from 'react';
import { joinClassNames } from '../../helpers';

type Props = {
  value: string;
  variant: 'violet'| 'gray';
  icon?: ReactNode
};



export const IconLabel: FC<Props> = ({ value, variant, icon }) => (
  <label className={joinClassNames(['flex items-center gap-x-xxs cursor-pointer text-xs', variant === 'violet'? 'text-violet-600 hover:text-violet-900' : 'text-slate-400 hover:text-slate-600'])}>{icon}{value}</label>
);
