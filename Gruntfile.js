module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'public/assets/css',
                    imagesDir: 'public/assets/img',
                    fontDir: 'public/assets/fonts',
                    outputStyle: 'compact',
                    force: true,
                    noLineComments: true
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/assets/js/app.min.js': ['js/app.js']
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            },
            js: {
                files: 'js/*.js',
                tasks: ['uglify']
            }
        }
    });

    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['watch']);
    grunt.registerTask('build', ['compass', 'uglify']);
};
