/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif'],
    },
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      base: '1.125rem',
      lg: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.4',
      normal: '1.45',
      relaxed: '1.625',
      loose: '2',
    },
    fontWeight: {
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {
      outlineWidth: {
        xs: '3px',
        s: '4px',
      },
      backgroundImage: {
        'gradient-50-50': 'linear-gradient(90deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%);',
        'gradient-30-70': 'linear-gradient(90deg, var(--tw-gradient-from) -12.56%, var(--tw-gradient-to) 62.92%);',
        'gradient-20-80': 'linear-gradient(90deg, var(--tw-gradient-from) -15.33%, var(--tw-gradient-to) 38.87%);',
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '64px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
      },
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 2',
        'like-hover': 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
