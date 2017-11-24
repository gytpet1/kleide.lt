var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sassSource = "stylesheets/**.sass";
var jsDependencies = [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/axios/dist/axios.js",
    "node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js",
    "node_modules/toastr/build/toastr.min.js",
    "public/javascripts/custom.js",
];
var fonts = [
    "node_modules/font-awesome/fonts/FontAwesome.otf",
    "node_modules/font-awesome/fonts/fontawesome-webfont.eot",
    "node_modules/font-awesome/fonts/fontawesome-webfont.svg",
    "node_modules/font-awesome/fonts/fontawesome-webfont.ttf",
    "node_modules/font-awesome/fonts/fontawesome-webfont.woff",
    "node_modules/font-awesome/fonts/fontawesome-webfont.woff2",
]

gulp.task('sass', function () {
    return gulp.src(sassSource)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("public/stylesheets"))
        .pipe(browserSync.stream());
});
gulp.task('js', function () {
    return gulp.src(jsDependencies)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/javascripts'));
})
gulp.task('fonts', function () {
    return gulp.src(fonts)
        .pipe(gulp.dest('public/fonts'));
})
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        proxy: "localhost:4000"
    });

    gulp.watch(sassSource, ['sass']);
    gulp.watch("**/*.twig").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers

gulp.task('default', ['serve']);
gulp.task('build', ['sass', 'js', 'fonts']);