/*
 * grunt-confluence-attachments
 * https://github.com/Richard-Walker/grunt-confluence-attachments
 *
 * Copyright (c) 2015 Richard Walker
 * Licensed under the GPL-3.0 license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    confluence_attachments: {
      options: {
        baseUrl: 'https://share.emakina.net'
      },
      test_simple: {
        files: {
          '104693766': 'test/fixtures/*.txt'
        }
      },
      test_with_expand: {
        expand: true,
        cwd:'test/fixtures/',
        dest: '104693766/',
        src: '*.txt'
      }

    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'confluence_attachments', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
  //grunt.registerTask('default', ['jshint', 'confluence_attachments:default_options']);

};
