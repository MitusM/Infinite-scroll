/* eslint-disable no-undef */
module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);
  const sass = require("node-sass");
  let config = {
    browserify: {
      dist: {
        files: {
          "temp/browserify-index.js": ["temp/index.js"],
        },
      },
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ["@babel/preset-env"],
      },
      dist: {
        files: {
          "dist/infinite.js": ["temp/browserify-index.js"],
        },
      },
    },
    concat: {
      options: {
        separator: ";",
      },
      temp: {
        options: {
          sourceMap: false,
        },
        src: [
          "src/sizes.js",
          "src/index.js"
        ],
        dest: "temp/index.js",
      },
    },
    sass: {
      // Task
      dist: {
        // Target options
        options: {
          implementation: sass,
          sourceMap: false,
        },
        files: {
          "dist/css/infinite.css": "sass/index.scss",
        },
      },
    },
    uglify: {
      options: {
        // Use these options when debugging
        // mangle: false,
        // compress: false,
        // beautify: true
      },
      dist: {
        files: {
          "dist/infinite.min.js": ["dist/infinite.js"],
        },
      },
    },
    //  Clean
    clean: {
      temp: {
        src: ["temp/"],
      },
    },
    watch: {
      js: {
        files: ["src/**/*"],
        tasks: ["js_compile"],
        options: {
          interrupt: false,
          spawn: false,
        },
      },
      sass: {
        files: ["sass/**/*"],
        tasks: ["sass_compile"],
        options: {
          interrupt: false,
          spawn: false,
        },
      },
    },
    // PostCss Autoprefixer
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({
            browsers: [
              "last 2 versions",
              "Chrome >= 30",
              "Firefox >= 30",
              "ie >= 10",
              "Safari >= 8",
            ],
          }),
        ],
      },
      expanded: {
        src: "dist/css/infinite.css",
      },
      // min: {
      //   src: 'dist/css/scroll.min.css'
      // }
    },
    notify: {
      watching: {
        options: {
          enabled: true,
          message: "Watching Files!",
          title: "infinite-scroll", // defaults to the name in package.json, or will use project directory's name
          success: true, // whether successful grunt executions should be notified automatically
          duration: 1, // the duration of notification in seconds, for `notify-send only
        },
      },
      sass_compile: {
        options: {
          enabled: true,
          message: "Sass Compiled!",
          title: "Task Complete",
          success: true,
          duration: 1,
        },
      },
      js_compile: {
        options: {
          enabled: true,
          title: "Task Complete", // optional
          message: "JS and Uglify finished running",
          success: true,
          duration: 1,
        },
      },
    },
  };
  grunt.initConfig(config);
  grunt.registerTask("default", ["babel"]); // 
  grunt.registerTask("js_compile", [
    "concat:temp",
    "browserify:dist",
    "babel:dist",
    "uglify:dist",
    "notify:js_compile",
    "clean:temp",
  ]);
  grunt.registerTask("sass_compile", [
    "sass:dist",
    // 'sass:min',
    "postcss:expanded",
    // 'postcss:min'
  ]);
};