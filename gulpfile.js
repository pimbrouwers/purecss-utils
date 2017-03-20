/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),    
    less = require("gulp-less"),
	sass = require("gulp-sass");

gulp.task("less", function(){
	return gulp.src('./less/pure-extensions.less')
				.pipe(less({
					filename: 'pure-extensions-less-min.css',
					compress: true	
				}))
			    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/pure-extensions.scss')
        .pipe(sass({
        	file: 'pure-extensions-sass-min.css',
			outputStyle: 'compressed'
		}).on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task("default", ["sass"]);
