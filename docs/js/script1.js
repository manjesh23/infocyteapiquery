//<div class="textbox" id="mandate" name="mandate" contenteditable="true" type="text" onkeyup="trimMe(this)"></div>
//<div class="textbox" id="logicand" name="logicand" contenteditable="true" type="text" onkeyup="trimMe(this)"></div>
//<div class="textbox" id="logicor" name="logicor" contenteditable="true" type="text" onkeyup="trimMe(this)"></div>

//<script>
// Infocyte keywords
var keywords = ["hostOs", "raw", "processName", "commandLine", "path", "parentProcessName", "grandParentProcessName", "decodedPayload", "state", "name", "remote_addr", "destination_ip", "remote_port", "params"];
// all 3 textbox
document.querySelector('#mandate').addEventListener('keyup', e => {
    // Space key pressed
    if (e.keyCode == 32) {
        var newHTML = "";
        // Loop through words
        str = e.target.innerText;
        chunks = str
            .split(new RegExp(
                keywords
                .map(w => `(${w})`)
                .join('|'), 'i'))
            .filter(Boolean),
            markup = chunks.reduce((acc, chunk) => {
                acc += keywords.includes(chunk) ?
                    `<span class="statement">${chunk}</span>` :
                    `<span class='other'>${chunk}</span>`
                return acc
            }, '')
        e.target.innerHTML = markup;

        // Set cursor postion to end of text
        //    document.querySelector('#mandate').focus()
        var child = e.target.children;
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(child[child.length - 1], 1);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        this.focus();

    }
});
document.querySelector('#logicand').addEventListener('keyup', e => {
    // Space key pressed
    if (e.keyCode == 32) {
        var newHTML = "";
        // Loop through words
        str = e.target.innerText;
        chunks = str
            .split(new RegExp(
                keywords
                .map(w => `(${w})`)
                .join('|'), 'i'))
            .filter(Boolean),
            markup = chunks.reduce((acc, chunk) => {
                acc += keywords.includes(chunk) ?
                    `<span class="statement">${chunk}</span>` :
                    `<span class='other'>${chunk}</span>`
                return acc
            }, '')
        e.target.innerHTML = markup;

        // Set cursor postion to end of text
        //    document.querySelector('#logicand').focus()
        var child = e.target.children;
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(child[child.length - 1], 1);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        this.focus();

    }
});
document.querySelector('#logicor').addEventListener('keyup', e => {
    // Space key pressed
    if (e.keyCode == 32) {
        var newHTML = "";
        // Loop through words
        str = e.target.innerText;
        chunks = str
            .split(new RegExp(
                keywords
                .map(w => `(${w})`)
                .join('|'), 'i'))
            .filter(Boolean),
            markup = chunks.reduce((acc, chunk) => {
                acc += keywords.includes(chunk) ?
                    `<span class="statement">${chunk}</span>` :
                    `<span class='other'>${chunk}</span>`
                return acc
            }, '')
        e.target.innerHTML = markup;

        // Set cursor postion to end of text
        //    document.querySelector('#logicor').focus()
        var child = e.target.children;
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(child[child.length - 1], 1);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        this.focus();

    }
});
//</script>

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
//<div id="editor" contenteditable="true"></div>