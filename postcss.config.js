const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const focusWithin = require('postcss-focus-within');
const focusVisible = require('postcss-focus-visible');
const { browserslist } = require('./package.json');

module.exports = {
	plugins: [
		focusWithin,
		focusVisible,
		process.env.NODE_ENV === 'production'
			? [
					require('postcss-clamp'),
					['postcss-font-display', { display: 'swap' }],
					require('postcss-flexbugs-fixes'),
					autoprefixer({
						overrideBrowserslist: browserslist.browsers
					}),
					cssnano({
						preset: [
							'default',
							{
								discardComments: { removeAll: true }
							}
						]
					})
			  ]
			: [autoprefixer({ overrideBrowserslist: browserslist.browsers })]
	].flat()
};
