module.exports = {
	webpack: {
		configure: (webpackConfig) => {
			webpackConfig.module.rules.push({
				test: /\.(glsl|vs|fs|vert|frag)$/,
				use: ['raw-loader']
			});
			return webpackConfig;
		}
	}
};
