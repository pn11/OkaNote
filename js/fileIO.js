function readFile(){
    var filename = document.forms["filename_form"].elements["filename"].value;
    const fs = require('fs');
    fs.readFile(filename, 'utf-8', (err, data) => {
                if (err) throw err;
//                console.log(data);
                window.editor_markdown.setValue(data);
                });
}
// http://stackoverflow.com/questions/8378678/how-can-i-set-the-value-of-a-codemirror-editor-by-javascript

function writeToFile(filename, text){
    const fs = require('fs');
    var file = fs.createWriteStream(filename);
//    file.write('');
    file.end(text);
    // writing more now is not allowed!
}

// https://nodejs.org/api/fs.html#fs_file_system
// https://nodejs.org/api/stream.html#stream_event_readable
