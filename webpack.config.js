const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		port: 9000
	},
	entry: ['./src/styles/app.scss', './src/scripts/app.ts'],
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].min.css',
						},
					},
					{ loader: 'extract-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [autoprefixer()],
						},
					},
					{
						loader: 'sass-loader',
						options: {
							includePaths: ['./node_modules'],
						},
					}
				]
			}
		]
	},
	resolve: {
        extensions: ['.tsx', '.ts', '.js']
	},
	
	mode: 'development',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	plugins: [
        new CopyWebpackPlugin([
            {context: 'src', from: '**/*.html'},
			{from: 'src/**/*.ttf', to: 'fonts/', flatten: true},
			{from: 'src/**/*.eot', to: 'fonts/', flatten: true},
			{from: 'src/**/*.woff2', to: 'fonts/', flatten: true},
			{from: 'src/**/*.woff', to: 'fonts/', flatten: true},
            {from: 'src/**/*.png', to: 'img/', flatten: true},
			{from: 'src/**/*.svg', to: 'img/', flatten: true},
			{from: 'src/**/*.js', to: 'scripts/', flatten: true},
            {from: 'LICENSE', flatten: true},
            {from: 'README.md', flatten: true}
        ]),
        new OptimizeCssAssetsPlugin()
    ]
};
