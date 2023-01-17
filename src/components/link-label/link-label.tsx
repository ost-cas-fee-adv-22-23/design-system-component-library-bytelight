import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href: string;
};

export const LinkLabel: FC<Props> = ({ href, children }) => (
  <a className="text-violet-600 text-xs underline underline-offset-2 hover:decoration-slate-200" href={href}>
    {children}
  </a>
);
