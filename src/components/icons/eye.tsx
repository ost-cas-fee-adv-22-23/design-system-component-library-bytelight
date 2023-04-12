import React, { FC } from 'react';
import { IconProps, ICON_DEFAULT_SIZE } from './icon-props';

export const EyeIcon: FC<IconProps> = ({ size }) => (
  <svg
    width={size || ICON_DEFAULT_SIZE}
    height={size || ICON_DEFAULT_SIZE}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00013 12C12.7071 12 15.7441 6.716 15.8711 6.492C16.0421 6.188 16.0431 5.816 15.8721 5.512C15.7461 5.287 12.7311 0 8.00013 0C3.24513 0 0.251127 5.289 0.126127 5.514C-0.0428725 5.817 -0.0418725 6.186 0.128127 6.489C0.254128 6.713 3.26913 12 8.00013 12ZM8.00013 2C10.8391 2 13.0361 4.835 13.8181 6C13.0341 7.166 10.8371 10 8.00013 10C5.15913 10 2.96213 7.162 2.18113 5.999C2.95813 4.835 5.14613 2 8.00013 2Z"
      fill="currentColor"
    />
    <path
      d="M8.00013 8C9.1047 8 10.0001 7.10457 10.0001 6C10.0001 4.89543 9.1047 4 8.00013 4C6.89556 4 6.00013 4.89543 6.00013 6C6.00013 7.10457 6.89556 8 8.00013 8Z"
      fill="currentColor"
    />
  </svg>
);
