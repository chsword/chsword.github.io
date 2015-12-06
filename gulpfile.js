var gulp = require('gulp');
var basePath="./wwwroot/"
var path={
  bower:"./bower_components/",
  npm:"./node_modules/",
  js:basePath+"scripts/",
  "static":basePath+"content/"
  
};
gulp.task('scripts', function() {
  gulp.src(path.bower+"**/*.min.js")
  .pipe(gulp.dest(path.js));
});


gulp.task('bootstrap', function() {
  gulp.src(path.bower+"bootstrap/dist/css/*.css")
  .pipe(gulp.dest(path.static));
});
gulp.task('angular', function() {
  gulp.src(path.npm+"angular2/bundles/*.*")
  .pipe(gulp.dest(path.js+"angular2/"));
  gulp.src(path.bower+"systemjs/build/*.js")
  .pipe(gulp.dest(path.js+"systemjs/"));
   
    gulp.src(path.bower+"es6-shim/dist/*.min.js")
  .pipe(gulp.dest(path.js+"es6-shim/"));
});
gulp.task("default",["scripts","bootstrap","angular"]);