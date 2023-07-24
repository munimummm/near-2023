module.exports = {
  root: true,
  extends: ['custom'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
  parser: '@typescript-eslint/parser',
  env: {
    // 전역객체를 eslint가 인식하는 구간
    browser: true, // document나 window 인식되게 함
    node: true,
    es6: true,
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'jsx-a11y',
    'react-hooks',
  ],
  ignorePatterns: ['node_modules/'],
  extends: [
    'custom',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended', // ts 권장
    'plugin:prettier/recommended', // eslint의 포매팅을 prettier로 사용.
    'prettier', // eslint-config-prettier prettier와 중복된 eslint 규칙 제거
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // react 17부턴 import 안해도돼서 기능 끔

    // 경고표시, 파일 확장자를 .ts나 .tsx 모두 허용함
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
    'no-useless-catch': 'off', // 불필요한 catch 못쓰게 하는 기능 끔
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
