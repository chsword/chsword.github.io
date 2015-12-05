var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  gulp.src("./bower_components/**/*.min.js")
  .pipe(gulp.dest("./scripts/"));
});