module.exports = {
  '*': 'prettier --ignore-unknown --write',
  '*.{js,jsx,ts,tsx}': 'eslint',
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json',
};
