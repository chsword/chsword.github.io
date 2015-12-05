var gulp = require('gulp');
var path={
  bower:"./bower_components/"
};
gulp.task('scripts', function() {
  // 将你的默认的任务代码放在这
  gulp.src(path.bower+"**/*.min.js")
  .pipe(gulp.dest("./scripts/"));
});


gulp.task('bootstrap', function() {
  // 将你的默认的任务代码放在这
  gulp.src(path.bower+"bootstrap/dist/css/*.css")
  .pipe(gulp.dest("./content"));
});

gulp.task("default",["scripts","bootstrap"]);