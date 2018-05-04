module.exports = function(grunt){
    pkg: grunt.file.readJSON('package.json'),

    grunt.initConfig({
        sass:{
            dist:{
                files: [{
                    expand: true,
                    cwd:'styles',
                    src:['main.scss'],
                    dest:'../build/css',
                    ext:'.css'
                }]
            }
        },
        postcss:{
            options:{
                map:true,
                processors:[
                    require('autoprefixer')({
                        browsers:'last 2 versions'
                    })
                ]
            },
            dist:{
                src:['../build/css/*.css','!*.css.map']
            }
        },
        cssmin:{
            target:{
                files:[{
                    expand:true,
                    cwd:'../build/css',
                    src:['*.css','!*.min.css','!*.css.map'],
                    dest:'../build/css',
                    ext:'.min.css'
                }]
            }
        },

        watch:{
            css:{
                files:'styles/**/*.scss',
                tasks:['sass','postcss','cssmin']
            },

        },

    })


    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-postcss')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-concat')
    
}