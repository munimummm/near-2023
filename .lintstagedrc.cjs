module.exports = {
  '**/*.{ts,tsx}': [
    // 모든 서브패키지의 타입을 체크
    () => 'tsc --skipLibCheck --noEmit',
  ],
  '**/*.{ts,tsx,js,jsx,json,cjs}': [
    // 모든 서브패키지의 코딩 컨벤션을 체크
    'eslint --cache --fix',
    'prettier --write',
  ],
};
