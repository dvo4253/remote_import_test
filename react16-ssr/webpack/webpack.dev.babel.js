import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import DiskPlugin from 'webpack-disk-plugin';
import common from './webpack.common.babel';

const fileRoot = process.cwd();

// Write out asset files to disk.
const writeToDisk = new DiskPlugin({
	output: {
		path: path.join(fileRoot, '/dist/public'),
	},
	files: [
		{ asset: 'assets.json' },
		{ asset: /app.[a-f0-9]{20}\.js/ },
		{ asset: /vendors.[a-f0-9]{20}\.js/ },
		{ asset: /runtime.[a-f0-9]{20}\.js/ },
		{ asset: /app.[a-f0-9]{20}\.css/ },
	],
});

const devConfig = merge({
	entry: {
		app: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			// './src/app/client.js',

			// './single-spa.config.js',
			'./src/app/styles/entry.scss',
			'./src/app/App.js',
		],
	},
	mode: 'development',
	// devtool: 'cheap-module-source-map',  // may speed up rebuild but no source maps
	// devtool: 'eval-source-map', // source maps
	// cache: true,
	devServer: {
		contentBase: path.join(fileRoot, 'dist/public'),
		compress: true,
		port: 3000,
	},
	resolve: {
		extensions: ['.js', '.scss', '.css'],
		modules: ['src/app', 'node_modules', 'src/app/styles'],
	},
	plugins: [
		new webpack.ProvidePlugin({
			createApp: '../src/app/App.js',
		}),
		writeToDisk,
		new webpack.optimize.ModuleConcatenationPlugin(),
		// new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// new BundleAnalyzerPlugin() // enable for the bundle analyzer to show in browser
	],
	output: {
		publicPath: 'http://localhost:3000/dist/public',
		library: 'MYVAR',
		// libraryTarget: 'global',
		// filename: 'MyLibrary.[name].js',
		// library: ['MyLibrary', '[name]'],
		libraryTarget: 'umd',
	},
	// optimization: {
	// 	runtimeChunk: 'single',
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			vendors: {
	// 				test: /[\\/]node_modules[\\/]/,
	// 				name: 'vendors',
	// 				enforce: true,
	// 				chunks: 'all',
	// 			},
	// 		},
	// 	},
	// },
}, common);

module.exports = devConfig;
