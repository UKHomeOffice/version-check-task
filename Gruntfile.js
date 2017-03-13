// Gruntfile.js
// This creates a task to check the govuk_frontend_toolkit version 
// The task is forced to prevent it from exiting with an error code when the version is out of date
module.exports = function (grunt) {
        grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        versioncheck: {
            target: {
                options: {
                    skip: ["grunt",
                        "grunt-version-check",
                        "grunt-force-task"
                    ]
                }
            }
        }
        });
    grunt.loadNpmTasks('grunt-version-check');
    grunt.loadNpmTasks('grunt-force-task');
    grunt.registerTask('checkVersion', ['force:versioncheck']);
};


