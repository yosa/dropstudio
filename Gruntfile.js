module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: {},
        less: {
            options: {
                compress: true
            },
            all: {
                files: {
                    'css/style.css': 'less/style.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'js/site.min.js': [
                        'js/site.js'
                    ]
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'css/site.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css', 
                        'node_modules/font-awesome/css/font-awesome.min.css',
                        'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
                        'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
                        'fonts/montserrat/stylesheet.css',
                        'css/style.css'
                    ]
                }
            }
        },
        watch: {
            files: ['less/**/*.less'],
            tasks: ['less']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', [
        'watch'
    ]);
    
};
