const { series, watch, src } = require("gulp"),
	  browserSync = require("browser-sync").create(),
	  del = require("del");
const siteRoot = "_site";
const exec = require('gulp-exec')

/* Tasks cached */
async function cleanCssCache() {
	await del("./_site/assets/css/main.css")
}

// task for building blog when something changed.
function build() {
	return src ('./**/**')
	.pipe(exec("bundle exec jekyll clean && bundle exec jekyll build"))
}

// task for building blog dev mode
function dev() {
	return src('./**/**')
	.pipe(exec("bundle exec jekyll serve --livereload --config '_config.yml,_config_dev.yml' "))
}

//task for serving blog with browsersync
async function serve() {
	await browserSync.init({
		port: 4000,
		server: { baseDir: siteRoot },
		notify: true,
	});
	// Reloads page when some of the already built files changed:
	setTimeout(function () {
		watch('_site/**/*.*').on('change', browserSync.reload);
	}, 5000);
}

exports.default = build
exports.devMode = dev
exports.clean = cleanCssCache
exports.serveStatic = serve
