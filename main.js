/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window, Mustache */

define(function (require, exports, module) {
    "use strict";
    var AppInit = brackets.getModule("utils/AppInit");
    //var CommandManager = brackets.getModule("command/CommandManager");
    //var Menus          = brackets.getModule("command/Menus");
    //var EditorManager  = brackets.getModule("editor/EditorManager");
    //var ProjectManager = brackets.getModule("project/ProjectManager");
    var FileUtils = brackets.getModule("file/FileUtils");    
    //var NativeApp = brackets.getModule("utils/NativeApp");
    //var Commands = brackets.getModule("command/Commands");
         function onDocumentSaved(event, doc) {
      var DocumentManager = brackets.getModule("document/DocumentManager");    
             
             var fname = DocumentManager.getCurrentDocument().file._name;
             // if current file == *.moustache
             if(fname.match('.*?\.moustache'))
             {
                 //find current path
                 var pname = DocumentManager.getCurrentDocument().file._path;
                 var file = FileUtils.getDirectoryPath(pname) + "project.json";
                 if (_openDocuments[file.fullPath]) {
                 }
                 //if current folder contains project.json && project.context
                    // read project.json
                    // if project.json => compile == true
                        // set output file based on project.json
                        // read project.context
                        // pass project.context & currentfile -> moustache...
             }
        }
    AppInit.appReady(function () {
      var DocumentManager = brackets.getModule("document/DocumentManager");    
        $(DocumentManager).on('documentSaved', onDocumentSaved);
    });
});



