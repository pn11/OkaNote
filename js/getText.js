//cf:http://codemirror.net/doc/manual.html

function getText() {
    var output = document.getElementById('log');
    
    window.editor_markdown.save();
    
    //    output.textContent = window.editor_markdown.getTextArea().value;
    text = window.editor_markdown.getValue();
    log.textContent = 'Saved.';
    //    output.textContent = window.editor_markdown.getCode();
    return text;
}

//window.addEventListener( 'load', init, false );
