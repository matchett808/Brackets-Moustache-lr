/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window, Mustache */

define(function (require, exports, module) {
    "use strict";
    var AppInit = brackets.getModule("utils/AppInit");
    var CommandManager = brackets.getModule("command/CommandManager");
    var Menus          = brackets.getModule("command/Menus");
    //var EditorManager  = brackets.getModule("editor/EditorManager");
    //var ProjectManager = brackets.getModule("project/ProjectManager");
    //var FileUtils = brackets.getModule("file/FileUtils");    
    var DocumentManager = brackets.getModule("document/DocumentManager");    
    //var NativeApp = brackets.getModule("utils/NativeApp");
    //var Commands = brackets.getModule("command/Commands");
         function _onDocumentSaved(event, doc) {
            alert("magic");
        }

    AppInit.appReady(function () {
    });
});




  