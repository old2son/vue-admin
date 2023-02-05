module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
	},
	plugins: ['vue'],
	rules: {
		'vue/multi-word-component-names': 'off',	// 要求组件名称始终为 “-” 链接的单词
	},
};
