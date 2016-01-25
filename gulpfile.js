var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var plato = require('plato');
var inject = require('gulp-inject');
var karma = require('karma').Server;

var paths = {
  sass: ['./scss/**/*.scss'],
  inject: [
    //'./www/lib/ionic/css/ionic.css',
    //'./www/css/style.css',
    './www/css/ionic.app.css',
    './www/js/components/**/*.css',

    './www/lib/ionic/js/ionic.bundle.js',
    './www/lib/ngCordova/dist/ng-cordova.js',
    'cordova.js',
    './www/js/app.js',
    './www/js/components/**/app.js',
    //'./www/js/common/**/app.js',
    './www/js/controllers.js',
    //'./www/js/common/**/**/*.js',
    //'./www/js/config/**/**/*.js',
    './www/js/components/**/src/*.js',
    '!./www/js/components/**/src/**/*.specs.js'
  ],
  specs: [
    './www/lib/ionic/js/ionic.bundle.js',

    './www/js/app.js',
    './www/js/controllers.js',
    './www/js/components/**/app.js',
    './www/js/components/**/src/**/*.js',
    './www/js/components/**/src/**/*.specs.js'
  ]
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('inject', [], function () {
  var target = gulp.src('./www/index.dev.html');
  var source = gulp.src(paths.inject, {read: false});
  return target
    .pipe(inject(source, {'ignorePath': './www', 'relative': true}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.inject, ['inject']);
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('quality', function () {
  var options = {
    title: 'ELECTRA quality reports'
  };
  var cb = function () {
    console.log('>> Plato done');
  }
  return plato.inspect('./www/js/**/*.js', './reports/quality-reports', options, cb);
});

gulp.task('test:karma', function (done) {
  new karma(
    {configFile: __dirname + '/karma.conf.js'},
    done)
    .start();
});
gulp.task('test:watch', function () {
  gulp.watch(paths.specs, ['test:karma']);
});
gulp.task('tests', ['test']);
gulp.task('test', ['test:karma','test:watch']);
