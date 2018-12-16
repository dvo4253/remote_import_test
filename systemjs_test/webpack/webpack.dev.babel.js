import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const fileRoot = process.cwd();

module.exports = {
    entry: {
        system: './libs/system.js',
		app: './src/app.js',
	},
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(fileRoot, 'dist/public/assets'),
    },
    module: {
		rules: [
        { parser: { system: false } },
        {
            test: /.js$/,
            loader: 'babel-loader',
            include: path.join(fileRoot, 'src'),
        },
    ]},
    plugins: [
        new CleanWebpackPlugin([path.join(fileRoot, 'dist/public/assets')], {
			root: path.join(__dirname, '../'),
			verbose: true,
		}),
    ]
}