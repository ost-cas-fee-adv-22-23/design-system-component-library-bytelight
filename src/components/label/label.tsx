import React, { FC, ReactNode } from 'react';
import { joinClassNames } from '../../helpers';

type Props = {
  children?: ReactNode;
  variant: 'XL' | 'L' | 'M' | 'Placeholder' | 'S';
};
const getVariantStyles = (variant: Props['variant']) => {
  switch (variant) {
    case 'XL':
      return 'text-xl font-semibold';
    case 'L':
      return 'text-lg font-semibold';
    case 'M':
      return 'text-sm font-semibold';
    case 'Placeholder':
      return 'text-sm text-slate-300 font-medium';
    case 'S':
      return 'text-xs font-semibold';
  }
};

export const Label: FC<Props> = ({ children, variant = 'L' }) => (
  <label className={joinClassNames(['text-slate-600', getVariantStyles(variant)])}>{children}</label>
);
