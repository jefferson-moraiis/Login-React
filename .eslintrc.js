/* eslint-disable prettier/prettier */
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 11, sourceType: 'module' },
    ignorePatterns: ['node_modules/*', '.out/*', '!.prettierrc'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
			'@typescript-eslint/no-unused-vars': 'error',
			'no-console': 'warn',
			'prettier/prettier': ['warn', { usePrettierrc: true }],
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-explicit-any': "off",
			'prefer-rest-params': 'off',
			'no-useless-escape': 'off'
    },
};
