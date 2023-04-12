import 'tailwindcss/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Typography', 'Icons', 'Logos', 'Spacing', 'Colors', 'Components', ['Modal'], 'Card Example'],
    },
  },
};
