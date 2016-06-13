var setting = '{"CodeMirrorPath" : "/Users/oka/git/CodeMirror", "JQueryPath" : "/Users/oka/git/jquery"}';


var json = JSON.parse(setting);
var path =  json["JQueryPath"];
var jquery_min = path + "/dist/jquery.min.js";
var jquery = path + "/dist/jquery.js";

var codemirror = json["CodeMirrorPath"];
document.write("<script type='text/javascript' src='" + jquery_min + "'></script>");

document.write("<link rel='stylesheet' href='" + codemirror + "/doc/docs.css' />");
document.write("<link rel='stylesheet' href='" + codemirror + "/lib/codemirror.css' />");
document.write("<link rel='stylesheet' href='" + codemirror + "/addon/fold/foldgutter.css' />");
document.write("<script src='" + codemirror + "/lib/codemirror.js'></script>");
document.write("<script src='" + codemirror + "/addon/fold/foldcode.js'></script>");
document.write("<script src='" + codemirror + "/addon/fold/foldgutter.js'></script>");
document.write("<script src='" + codemirror + "/addon/fold/brace-fold.js'></script>");
document.write("<script src='" + codemirror + "/addon/fold/xml-fold.js'></script>");
document.write("<script src='" + codemirror + "/addon/fold/markdown-fold.js'></script>");
document.write("<script src='" + codemirror + "/addon/fold/comment-fold.js'></script>");
document.write("<script src='" + codemirror + "/mode/javascript/javascript.js'></script>");
document.write("<script src='" + codemirror + "/mode/xml/xml.js'></script>");
document.write("<script src='" + codemirror + "/mode/markdown/markdown.js'></script>");
document.write("<style type='text/css'> .CodeMirror {border-top: 1px solid black; border-bottom: 1px solid black;}</style>");

// My JS from here.
document.write("<script type='text/javascript' src='js/constructTextArea.js'></script>");
document.write("<script type='text/javascript' src='js/getText.js'></script>");
document.write("<script type='text/javascript' src='js/fileIO.js'></script>");

