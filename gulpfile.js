var gulp = require("gulp"),
	shell = require("gulp-shell"),
	browserSync = require("browser-sync").create(),
	del = require("del");

/* Tasks cached */
gulp.task("cache:css", function() {
	del("./_site/assets/css/main.css")
});

// task for building blog when something changed. Choose port: 3000 because of bs
gulp.task("build", ["cache:css"], shell.task(['bundle exec jekyll serve --port 3000']));

//task for serving blog with browsersync
gulp.task("serve", function () {
	browserSync.init({
		server: { baseDir: '_site/' },
	});
	// Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
})

gulp.task("default", ["build", "serve"]);












