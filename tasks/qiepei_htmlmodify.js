/*
 * grunt-qiepei-htmlmodify
 * https://github.com/qiepei/qiepei-htmlmodify
 *
 * Copyright (c) 2014 qiepei.qp
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function (grunt) {
    grunt.registerMultiTask('qiepei_htmlmodify', 'Modified HTML', function () {
        this.files.forEach(function (file) {
            var src = file.src[0];

            if (!grunt.file.exists(src || ' ')) {
                return grunt.log.warn('Source file "' + src + '" not found.');
            }

            var input = grunt.file.read(src);

            var output = input.replace(/<script\s.*<\/script>/ig,'');
            var insertScript = '<script type="text/javascript" src="index-min.js"></script>'
            output = output.replace(/<\/body>/ig, insertScript+'</body>');

            grunt.file.write(file.dest, output);
            grunt.log.writeln('Modified ' + file.dest);

        });
    });
};
