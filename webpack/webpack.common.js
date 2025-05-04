const HTMLWebpackPlugins = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	output: {
		path: path.resolve(__dirname, '..', './dist'),
		filename: production
			? 'static/scripts/[name].[contenthash].js'
			: 'static/scripts/[name].js',
		publicPath: process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/',
		chunkFilename: 'static/scripts/[name].[contenthash].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(pdf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/documents/[hash][ext][query]'
				}
			},
			{
				test: /\.[tj]sx?$/,
				use: [
					{
						loader: 'ts-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/images/[hash][ext][query]'
				}
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/fonts/[hash][ext][query]'
				}
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack', 'url-loader']
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName:
									'[name]__[local]__[hash:base64:5]',
								auto: /\.module\.\w+$/i
							},
							importLoaders: 2
						}
					},
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sassOptions: {
								includePaths: [
									path.resolve(__dirname, '..', 'src/styles')
								]
							}
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
		alias: {
			src: path.resolve(__dirname, '..', './src'),
			styles: path.resolve(__dirname, '..', 'src/styles'),
			// path.resolve(__dirname, '..', 'src/styles/'),
			fonts: path.resolve(__dirname, '..', './src/fonts'),
			components: path.resolve(__dirname, '..', './src/components'),
			'@pages': path.resolve(__dirname, '..', './src/pages'),
			'@components': path.resolve(__dirname, '..', './src/components'),
			'@ui': path.resolve(__dirname, '..', './src/components/ui'),
			'@ui-pages': path.resolve(
				__dirname,
				'..',
				'./src/components/ui/pages'
			),
			'@utils-types': path.resolve(__dirname, '..', './src/utils/types'),
			'@utils-constants': path.resolve(
				__dirname,
				'..',
				'./src/utils/constants'
			),
			'@utils-testing': path.resolve(
				__dirname,
				'..',
				'src/utils/testing-helpers'
			),
			'@api': path.resolve(
				__dirname,
				'..',
				'./src/utils/flv-test-api.ts'
			),
			'@slices': path.resolve(__dirname, '..', './src/services/slices'),
			'@selectors': path.resolve(
				__dirname,
				'..',
				'./src/services/selectors'
			),
			'@images': path.resolve(__dirname, '..', './src/image'),
			'@hooks': path.resolve(__dirname, '..', './src/hooks')
		}
	},
	plugins: [
		new HTMLWebpackPlugins({
			template: path.resolve(__dirname, '..', './public/index.html'),
			faviconIco: path.resolve(__dirname, '..', './public/favicon.ico'),
			faviconPng: path.resolve(
				__dirname,
				'..',
				'./public/apple-touch-icon.png'
			),
			faviconSvg: path.resolve(__dirname, '..', './public/favicon.svg'),
			googleSearchToken: path.resolve(
				__dirname,
				'..',
				'./public/google43ea805923c8c986.html'
			),
			robots: path.resolve(__dirname, '..', './public/robots.txt'),
			sitemap: path.resolve(__dirname, '..', './public/sitemap.xml')
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, '..', 'public'),
					to: '.',
					globOptions: {
						ignore: ['**/index.html']
					}
				}
			]
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: production
				? 'static/styles/[name].[contenthash].css'
				: 'static/styles/[name].css'
		}),
		new webpack.EnvironmentPlugin({
			PUBLIC_PATH: null,
			NODE_ENV: 'development'
		})
	],
	optimization: production
		? {
				splitChunks: {
					chunks: 'all'
				},
				runtimeChunk: 'single'
		  }
		: undefined
};
