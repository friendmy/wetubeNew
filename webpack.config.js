const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
console.log(process.env.WEBPACK_ENV);

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
	entry: ["@babel/polyfill", ENTRY_FILE],
	mode: MODE,
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: "babel-loader"
					}
				]
			},
			{
				test: /\.(scss)$/,
				use: ExtractCSS.extract([
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							plugins() {
								return [autoprefixer({ overrideBrowserslist: "cover 99.5%" })];
							}
						}
					},
					"sass-loader"
				])
			}
		]
	},
	output: {
		path: OUTPUT_DIR,
		filename: "[name].js"
	},
	plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
