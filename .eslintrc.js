module.exports = {
	extends: ['plugin:@woocommerce/eslint-plugin/recommended'],
	rules: {
		// temporary conversion to warnings until the below are all handled.
		'@wordpress/i18n-translator-comments': 'warn',
		'@wordpress/valid-sprintf': 'warn',
		'jsdoc/check-tag-names': [
			'error',
			{ definedTags: ['jest-environment'] },
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
			{
				printWidth: 180,
			},
		],
	},
};
