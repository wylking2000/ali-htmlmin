'use strict';
var chalk = require('chalk');
var prettyBytes = require('pretty-bytes');
var minify = require('html-minifier').minify;
var $ = require('cheerio');

console.log('htmlmin ing')

module.exports = function (grunt) {
    grunt.registerMultiTask('htmlmin', 'Minify HTML', function () {
        var options = this.options();
        var count = 0;
        console.log('htmlmin task: ' + this.files.length)

        this.files.forEach(function (file) {
            var min;
            var src = file.src[0];

            if (!src) {
                console.log('empty file' + JSON.stringify(file))
                return;
            }

            console.log('htmlmining: ' + src)

            var max = grunt.file.read(src);
            var $html = $.load(max, {decodeEntities : false});
            var juicers = $html(options.tplSelector);

            juicers.each(function (idx, item) {
                var snippet = $(item).html();
                try{
                    snippet = minify(snippet, options);
                    $(item).html(snippet);
                }catch(err){
                    console.log('htmlmin error file: ' + src + ',error detail:' + err)
                }
            });


            try {
                min = minify($html.html(), options);
                //min = minify(max, options);
                count++;

                grunt.file.write(file.dest, min);
                grunt.verbose.writeln('Minified ' + chalk.cyan(file.dest) + ' ' + prettyBytes(max.length) + ' → ' + prettyBytes(min.length));

            } catch (err) {
                grunt.warn(src + '\n' + err);
                console.log('error file:' + src + ':' + err)
            }


        });

        grunt.log.writeln('Minified ' + chalk.cyan(count) + ' files' + (this.files.length !== count ? ' (' + chalk.red(this.files.length - count) + ' failed)' : ''));
    });
};
