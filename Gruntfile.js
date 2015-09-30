/* jshint camelcase: false */

'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'src',
    dist: 'dist'
  };

  // setup grunt config

  // job should watch files
  grunt.config('watch', (grunt.option('watch') !== void 0) ? true:false);

  // browsers to be used by Karma
  grunt.config('browsers', (grunt.option('browsers') !== void 0) ? grunt.option('browsers').split(','):null);

  // Define the configuration for all the tasks
  var gruntConfig = {

    // Project settings
    yeoman: appConfig,

    // The actual grunt server settings
    connect: {
      options: {
        hostname: 'localhost'
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/{,**/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['<%= yeoman.app %>/{,**/}*_test.js']
      }
    },

    copy: {
      test: {
        dest: 'test/karma.conf.js',
        src: 'test/karma.conf.base.js'
      }
    },

    wiredep: {
      test: {
        src: 'test/karma.conf.js',
        devDependencies: true,
        exclude: ['angular-scenario'],
        fileTypes: {
          js: {
            block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        }
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: !grunt.option('watch')
      }
    }
  };


  // KARMA CONDITIONAL CONFIG
  if (grunt.config('browsers') && grunt.config('browsers').length > 0) {
    gruntConfig.karma.unit.browsers = grunt.config('browsers');
  }

  // INITIALIZE CONFIG
  grunt.initConfig(gruntConfig);

  // REGISTER TASKS
  grunt.registerTask('test', [
    'copy:test',
    'wiredep:test',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('default', [
    'test'
  ]);

  grunt.registerTask('extract', ['nggettext_extract']);
  grunt.registerTask('compile', ['nggettext_compile']);
};
