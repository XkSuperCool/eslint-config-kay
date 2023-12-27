module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true
	},
	extends: [
    'standard',
		'plugin:import/recommended',
    'plugin:eslint-comments/recommended'
	],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
	ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
	plugins: [
		'kay',
    'unused-imports'
  ],
	rules: {
    // import
    'import/named': 'off',
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-named-as-default-member': 'off',
    'import/newline-after-import': ['error', { count: 1, considerComments: true }],

    // kay plugin
		"kay/no-template-curly-in-string-fix": "warn",
		"kay/vue-jsx-interpolation-spacing": "error",
    
    // Other
    // 'max-lines': ['error', { max: 800 }],
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'space-before-function-paren': ['error', 'never'],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'no-param-reassign': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-cond-assign': ['error', 'always'],
    'no-return-await': 'off',
    'no-var': 'error',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    'eqeqeq': ['error', 'smart'],
    'no-alert': 'warn',
    'operator-linebreak': ['error', 'before'],
    'max-statements-per-line': ['error', { max: 1 }],
	}
}
