var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');

// Concat & Minify JS
gulp.task('build_assets', function () {
  var assets = useref.assets({
    searchPath: '.'
  });
  gulp.src('Views/**/*.cshtml', {
      base: './'
    })
    .pipe(assets)
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulpif('*.js', uglify()))
    .pipe(rev())
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(revReplace({
      replaceInExtensions: ['.cshtml']
    }))
    .pipe(gulp.dest('./obj/Release/Package/PackageTmp'));
});

// Default
gulp.task('default', ['build_assets']);