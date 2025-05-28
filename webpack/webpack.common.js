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
				test: /\.(glsl|vs|fs|vert|frag)$/,
				use: ['raw-loader']
			},
			{
				test: /\.(exr)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(wgsl)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(exr)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(glb)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			},
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
			styles: path.resolve(__dirname, '..', './src/shared/styles'),
			fonts: path.resolve(__dirname, '..', './src/shared/assets/fonts'),
			components: path.resolve(__dirname, '..', './src/components'),

			'@pages': path.resolve(__dirname, '..', './src/pages'),
			'@widgets': path.resolve(__dirname, '..', './src/widgets'),
			'@features': path.resolve(__dirname, '..', './src/features'),

			'@meta': path.resolve(__dirname, '..', './src/shared/meta'),
			'@lib': path.resolve(__dirname, '..', './src/shared/lib'),
			'@styles': path.resolve(__dirname, '..', './src/shared/styles'),
			'@ui': path.resolve(__dirname, '..', './src/shared/ui'),
			'@config': path.resolve(__dirname, '..', './src/shared/config'),
			'@fonts': path.resolve(
				__dirname,
				'..',
				'./src/shared/assets/fonts'
			),
			'@images': path.resolve(
				__dirname,
				'..',
				'./src/shared/assets/images'
			),

			'@layouts': path.resolve(__dirname, '..', './src/app/layouts'),
			'@providers': path.resolve(__dirname, '..', './src/app/providers')
		}
	},
	plugins: [
		new HTMLWebpackPlugins({
			template: path.resolve(__dirname, '..', './public/index.html'),
			favicon: path.resolve(__dirname, '..', './public/favicon.ico'),
			favicon: path.resolve(
				__dirname,
				'..',
				'./public/apple-touch-icon.png'
			),
			favicon: path.resolve(__dirname, '..', './public/favicon.svg')
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
