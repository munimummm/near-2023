module.exports = {
  extends: [
    'next',
    'turbo',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['jsx-a11y'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/react-in-jsx-scope': 'off', // react 17부턴 import 안해도돼서 기능 끔
    // 경고표시, 파일 확장자를 .ts나 .tsx 모두 허용함
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  ignorePatterns: ['node_modules/'],
};
