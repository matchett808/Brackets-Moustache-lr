/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window, Mustache */

define(function (require, exports, module) {
    "use strict";
var AppInit = brackets.getModule("utils/AppInit");
//var CommandManager = brackets.getModule("command/CommandManager");
//var Menus          = brackets.getModule("command/Menus");
//var EditorManager  = brackets.getModule("editor/EditorManager");
var ProjectManager = brackets.getModule("project/ProjectManager");
var FileUtils = brackets.getModule("file/FileUtils");    
var  FileSystem = brackets.getModule("filesystem/FileSystem");
//var NativeApp = brackets.getModule("utils/NativeApp");
//var Commands = brackets.getModule("command/Commands");
var NativeFileSystem    = brackets.getModule("file/NativeFileSystem").NativeFileSystem;
var DocumentManager = brackets.getModule("document/DocumentManager");    
    
    
    
 function onDocumentSaved(event, doc) {
     var fname = DocumentManager.getCurrentDocument().file._name;
     // if current file == *.moustache
     if(fname.match('.*?\.moustache') || true)
     {
        //find current path
        var pname = DocumentManager.getCurrentDocument().file._path;
        var project_file = FileUtils.getDirectoryPath(pname) + "project.json";
        var context_file = FileUtils.getDirectoryPath(pname) + "context.json";
        var projectRoot = ProjectManager.getProjectRoot();
        console.log("pre-if");
         //if current folder contains project.json && project.context
         if (
             FileSystem.getFileForPath(project_file)._stat != null && 
             FileSystem.getFileForPath(context_file)._stat !=null
            ){
             console.log("payload");
            // read project.json
            // if project.json => compile == true
                // set output file based on project.json
                // read project.context
                // pass project.context & currentfile -> moustache...
         }
     }
}
    AppInit.appReady(function () {
        $(DocumentManager).on('documentSaved', onDocumentSaved);
    });
});



