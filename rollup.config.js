import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import postcss_plugin from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import postcss from 'postcss';
import cssnano from 'cssnano'
import tailwind from 'tailwindcss';
import purgecss from '@fullhuman/postcss-purgecss';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: [
    'src/popup/popup.js',
  ],
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		dir: 'dist/'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			preprocess: {
				style: async ({ content, filename }) => {
					const { css } = await postcss([
						tailwind
					]).process(content, { from: filename})
					return {code: css}
				}
			},
			// // we'll extract any component CSS out into
			// // a separate file — better for performance
			// css: css => {
			// 	css.write('dist/bundle.css');
			// }
		}),
		postcss_plugin({
			extract: true,
      plugins: [
				tailwind(),
				cssnano({
					preset: 'default',
				}),
				...(!production ? [] : [
					purgecss({
						// Specify the paths to all of the template files in your project
						content: [
							'./src/**/*.html',
							'./src/**/*.svelte',
							// etc.
						],
						// Include any special characters you're using in this regular expression
						defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
					})
				])
			]
    }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),
		globals(),
		builtins(),

		!production && livereload('dist'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),

		copy({
			targets: {
				static: 'dist'
			},
		})
	],
	watch: {
		clearScreen: false
	}
};