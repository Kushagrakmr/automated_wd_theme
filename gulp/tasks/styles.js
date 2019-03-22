var gulp = require("gulp"),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');




gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end') //this'll tell the gulp task that the task had been finished even it the error occured and so that the gulp will be working as it should be.
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
