module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

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
                    "src/game/prefabs/*.js",
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
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    // Set to true to enable the following options…
                    expand: true,
                    // cwd is 'current working directory'
                    cwd: 'src/assets/',
                    src: ['*.png'],
                    // Could also match cwd line above. i.e. project-directory/img/
                    dest: 'deploy/assets/',
                    ext: '.png'
                }
              ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    // Set to true to enable the following options…
                    expand: true,
                    // cwd is 'current working directory'
                    cwd: 'src/assets/',
                    src: ['**/*.jpg'],
                    // Could also match cwd. i.e. project-directory/img/
                    dest: 'deploy/assets/',
                    ext: '.jpg'
                }]
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
    grunt.registerTask('min', ['imagemin']);

}