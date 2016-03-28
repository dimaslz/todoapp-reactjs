var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './dist/'
		}
	});
});

gulp.task('browserify', function() {
	browserify('./src/test1.js')
	.transform("babelify", {presets: ["es2015", "react"]})
	.bundle()
	.pipe(source('index.js'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('copy',function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['browserify', 'copy', 'browser-sync'], function() {
  gulp.watch('*.js', ['browserify']).on('change', browserSync.reload());
});
