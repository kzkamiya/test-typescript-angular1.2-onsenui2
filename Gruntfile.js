/*global module*/
module.exports = function (grunt) {
  grunt.initConfig({
    // typescriptタスクの定義
    typescript: {
      base: {
        src: ['js/**/*.ts']
      }
    },
    // watchタスクの定義
    watch: {
      // tsターゲットの定義
      ts: {
        files: ['**/*.ts'], // 監視するファイル
        tasks: ['typescript'] // 実行するタスク
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    // Webサーバ
    connect: {
      server: {
        options: {
          port: 8000,
          base: ''
        }
      }
    }
  });
  // Moduleロード
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-typescript');
  // タスク
  grunt.registerTask('default', ['connect', 'watch']);
};
