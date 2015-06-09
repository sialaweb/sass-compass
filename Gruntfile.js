module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.initConfig({

			uglify: {
				my_target: {
					files: {
						'_/js/script.js': ['_/components/js/*.js']
					}  // files
				}  // target
			}, // uglify

			watch: {
				options: {livereload: true},
				scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
				},  // scripts

				html: {
					files: ['*.html']
				}
			}

		}) // initConfig

	grunt.registerTask('default', 'watch');  // watch con solo colocar en la terminal grunt
	}  //   exports