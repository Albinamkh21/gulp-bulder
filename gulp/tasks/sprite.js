'use strict';

module.exports = function() {
    $.gulp.task('sprite', function() {
        var spriteData =  $.gulp.src('./source/images/icons/*.*')
            .pipe($.gp.spritesmith({
                    imgName: 'sprite.png',
                    cssName: 'sprite.css',
                    padding: 5
                }));
          //  .pipe($.gulp.dest($.config.root + '/assets/img/sprites'))
        spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img'));
        return spriteData.css.pipe($.gulp.dest($.config.root + '/assets/css'));

    })
};

