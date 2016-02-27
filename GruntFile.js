module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './deploy'
                }
            }
        },
        concat: {
            dist: {
                src: [  
                    "src/lib/**/*.js",
                    "src/game/states/*.js",
                    "src/game/ui/*.js",
                    "src/game/main.js"
                     ],
                dest: 'deploy/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            build: {
                src: 'deploy/js/<%= pkg.name %>.js',
                dest: 'deploy/js/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            files: 'src/**/*.js',
            tasks: ['concat']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.registerTask('default', ['concat', 'connect', 'open', 'watch']);
    grunt.registerTask('compress', ['uglify']);

}