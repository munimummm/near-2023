module.exports = {
  'packages/**/*.{ts,tsx}': [
    // 모든 서브패키지의 타입을 체크
    () => 'npx tsc -p packages/ui/tsconfig.json --noEmit',
  ],
  '**/*.{ts,tsx}': [
    // 모든 서브패키지의 타입을 체크
    () => 'npx tsc -p apps/admin/tsconfig.json --noEmit',
    () => 'npx tsc -p apps/client/tsconfig.json --noEmit',
  ],
  '**/*.+{ts,tsx,js,jsx,json}': ['eslint --fix', 'prettier --write'],
};
