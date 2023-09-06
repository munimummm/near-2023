import type { Preview } from '@storybook/react';
import { CUSTOM_VIEWPORT } from './CustomViewport';
import ko from 'axe-core/locales/ko.json';
import './globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: CUSTOM_VIEWPORT,
    },
    a11y: {
      config: {
        locale: ko,
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
};

export default preview;
