module.exports = {
	extends: ['@commitlint/config-conventional']
	rules: {
		'type-enum': [2, 'never', []],
	},
	parserPreset: {
		parserOpts: { headerPattern: '/^([^0-9]\\w*)(?:\\(([^0-9].*)\\))?!?: (.*)$/' },
	},
};
