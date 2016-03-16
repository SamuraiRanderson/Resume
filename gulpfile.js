var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	imageminJpegtran = require('imagemin-jpegtran'),
	notify = require('gulp-notify');

// Minify JS and store the minifies JS files in the js dist folder.
gulp.task('scripts', function() {
	gulp.src(['src/js/resumeBuilder.js', 'src/js/helper.js', 'src/js/interaction.js'])
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(notify({message: 'Gulp/Scripts complete!'}));
});

//Minify jpg images and stores the compressed files in the images dist folder.
gulp.task('JPGimages', function() {
	gulp.src('src/images/*.jpg')
		.pipe(imageminJpegtran({progressive: true})())
		.pipe(rename({
			extname: ".min.jpg"
		}))
		.pipe(gulp.dest('dist/images'))
		.pipe(notify({message: 'Gulp/JPG images complete!'}));
});

// Minify CSS and store the minified CSS files in the css dist folder.
gulp.task('styles', function() {
	gulp.src('src/css/style.css')
		.pipe(minifyCSS())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(notify({message: 'Gulp/Styles complete!'}));
});

// Watches JS & CSS files and
gulp.task('watch', function(){
	gulp.watch(['src/js/resumeBuilder.js', 'src/js/helper.js', 'src/js/interaction.js'], ['scripts']);
	gulp.watch('src/css/style.css', ['styles']);
});

gulp.task('default', ['scripts', 'JPGimages', 'styles', 'watch']);