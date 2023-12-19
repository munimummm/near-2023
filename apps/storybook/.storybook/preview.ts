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
    discussion: {
      supabase: {
        url: 'https://ztcvdzkqqrglziiavupe.supabase.co',
        secret:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0Y3ZkemtxcXJnbHppaWF2dXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5NTExOTYsImV4cCI6MjAwNjUyNzE5Nn0.bRBO6-QJxu-utYgU5hm9ZkpHSvKz9n0Pah-WEbSmAT4',
      },
    },
  },
};

export default preview;
