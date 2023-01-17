import React, { FC, ReactNode } from 'react';
import { joinClassNames } from '../../helpers';

type Props = {
  children?: ReactNode;
  variant: 'XL' | 'L' | 'M' | 'Placeholder' | 'S';
};
const getVariantStyles = (variant: Props['variant']) => {
  switch (variant) {
    case 'XL':
      return 'text-2xl';
    case 'L':
      return 'text-lg';
    case 'M':
      return 'text-sm';
    case 'Placeholder':
      return 'text-base text-slate-300';
    case 'S':
      return 'text-xs';
  }
};

export const Label: FC<Props> = ({ children, variant = 'L' }) => (
  <label className={joinClassNames(['text-slate-600', getVariantStyles(variant)])}>{children}</label>
);
