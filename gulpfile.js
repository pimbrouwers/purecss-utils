/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),    
    less = require("gulp-less");

gulp.task("less", function(){
	return gulp.src('./src/pure-extensions.less')
				.pipe(less({
					filename: 'pure-extensions-min.css',
					compress: true	
				}))
			    .pipe(gulp.dest('./dist/'));
});

gulp.task("default", ["less"]);
