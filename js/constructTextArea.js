function constructTextArea(){
    window.onload = function() {
        var te_markdown = document.getElementById("code-markdown");
        
        today = new Date();
        fulldate = today.toDateString();
        
        te_markdown.value = "# " + fulldate + "\n" + "Get contents and edit in here.";
        
        window.editor_markdown = CodeMirror.fromTextArea(te_markdown, {
                                                         mode: "markdown",
                                                         lineNumbers: true,
                                                         lineWrapping: true,
                                                         extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
                                                         foldGutter: true,
                                                         gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
                                                         });
    };
}
