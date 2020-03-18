/*global module :true*/
module.exports=function(grunt){
  grunt.initConfig({
    htmlmin:{
      options:{
        collapseWhitespace:true,
        preserveLineBreaks:false
      },
  files:{
    src:'./baidu.html',
    dest:'./min/baidu.html'
  }
  },
  cssmin:{
    './min/baidu.css':'./baidu.css'
  },
  uglify:{
     './min/baidu.js':'./baidu.js'
  }
  });
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

   grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
};