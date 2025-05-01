const path = require('path');
const glob = require('glob');
const slash = require('slash');
const weblog = require('webpack-log');
const childProcess = require('child_process');

// generation min-size-fonts ttf -> woff2
// main idea: https://github.com/pavel-mazhuga/portfolio/blob/main/subset-fonts.js

const logger = weblog({ name: 'fonts-subsets' });

const FONTS_SRC = './src/fonts/Iter/sources';
const FONTS_DIST = './src/fonts/Iter/size-mini-generation';
const SUBSETS_FILE = 'fonts-subsets.txt';

glob(`${FONTS_SRC}/**/*.{ttf,otf}`, { ignore: [] }, (error, files) => {
	if (error) {
		logger.error('Error finding font files:', error);
		process.exit(1);
	}

	if (files.length === 0) {
		logger.warn('No font files found to process.');
		return;
	}

	const subsetsFilePath = slash(path.resolve(SUBSETS_FILE));
	const subsetsCommandSuffix = ` --unicodes-file=${subsetsFilePath}`;

	files.forEach((filepath) => {
		const extname = path.extname(filepath);
		const relativeSource = slash(path.relative(__dirname, filepath));
		const targetPath = path.join(
			FONTS_DIST,
			path.relative(FONTS_SRC, filepath)
		);
		const targetDir = slash(path.dirname(targetPath));
		const basename = path.basename(targetPath, extname);
		const outputWoff2 = `${targetDir}/${basename}.woff2`;

		logger.info(`${relativeSource} → ${outputWoff2}`);

		try {
			childProcess.execSync(
				`pyftsubset "${relativeSource}" --output-file="${outputWoff2}" --flavor=woff2${subsetsCommandSuffix}`,
				{ stdio: 'inherit' }
			);
		} catch (err) {
			logger.error(`Failed to subset ${relativeSource}:`, err.message);
		}
	});
});
