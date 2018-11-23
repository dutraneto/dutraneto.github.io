const gulp = require("gulp"),
	  shell = require("gulp-shell"),
	  browserSync = require("browser-sync").create(),
	  del = require("del");
const siteRoot = "_site";

/* Tasks cached */
gulp.task("cache:css", function() {
	del("./_site/assets/css/main.css")
});

// task for building blog when something changed.
gulp.task("build", shell.task(["jekyll clean && bundle exec jekyll build --incremental --watch"]));

// task for building blog dev mode
gulp.task("dev", shell.task(["bundle exec jekyll serve --livereload --config '_config.yml,_config_dev.yml' "]));

//task for serving blog with browsersync
gulp.task("serve", function () {
	browserSync.init({
		port: 4000,
		server: { baseDir: siteRoot },
		notify: true,
	});
	// Reloads page when some of the already built files changed:
	setTimeout(function () {
		gulp.watch('_site/**/*.*').on('change', browserSync.reload);
	}, 5000);
});

gulp.task("default", ["build", "serve"]);









