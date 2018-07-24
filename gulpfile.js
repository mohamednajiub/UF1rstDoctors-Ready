const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');
// html
gulp.task('build', () => {
    gulp.src('index.html')
        .pipe(gulp.dest('./build/'));
});
// compiling sass to css
gulp.task('styles', () => {
    gulp.src([
            'node_modules/bootstrap/scss/bootstrap.scss',
            'sass/**/*.sass'
        ])
        .pipe(sass())
        .on('error', (err) => {
            console.log(err.message);
        })
        .pipe(gulp.dest('./build/css'));
});

// minifying js script
gulp.task('scripts', () => {
    gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js',
            'js/*.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

// compress images
gulp.task('image', () => {
    gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));
});

// font awesome
gulp.task('fontawesome', () => {
    gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('./build/css'));
});

// fonts
gulp.task('fonts', () => {
    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./build/fonts'))
});

// watching files
gulp.task('watch', () => {
    gulp.watch('index.html', ['build']);
    gulp.watch([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'sass/**/*.sass'
    ], ['styles']);
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('img/*', ['image']);
});



gulp.task('default', [
    'build',
    'styles',
    'scripts',
    'image',
    'fontawesome',
    'fonts',
    'watch'
])