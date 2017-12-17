module.exports = function(grunt){
  "use strict";

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
      process: {
        options: {
          paths: ['src/less'],
          plugins: [
            new (require('less-plugin-clean-css'))({advanced: true})
          ],
        },
        files: {
          'assets/css/main.css': 'src/less/main.less'
        }
      }
    },
    uglify: {
        js: {
            options: {
              preserveComments: false
            },
            files: {
              'assets/js/iniziativa.min.js': ['src/js/iniziativa.js']
            }
        }
    },

    watch: {
      less: {
        files: 'src/less/*',
        tasks: 'less:process'
      },
      uglify: {
          files: ['src/js/iniziativa.js'],
          tasks: 'uglify:js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

}
