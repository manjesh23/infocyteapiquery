function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
}

function opentab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function flowdiag() {
    document.getElementsByName('railroad')[0].src = "regexmap.html";
    window.scrollBy(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}

/* function regexmatch() {
    var yamltextArea = document.getElementById('yamlInput').value;
    var dataInput = document.getElementById("dataInput").value;
    var trimyaml = yamltextArea.slice(yamltextArea.indexOf("&&") + 3);
    console.log(trimyaml)
}
 */






// Still building | Another varient
function regexmatch() {
    var yamltextArea = document.getElementById('yamlInput').value;
    var miniyaml = yamltextArea.replaceAll(/\n|\s/g, "");
    if (miniyaml.includes("hostOs")) {
        var trimyaml = yamltextArea.slice(yamltextArea.indexOf("&&") + 3).replaceAll(/\n|\s/g, "");
    }
    var yamlpipe = trimyaml.split(/\|\|/);
    console.log(yamlpipe)
    var oryaml = "";
    var andyaml = yamlpipe[0].split(/&&/);
    if (yamlpipe.length > 1) {
        for (var i = 1; i < yamlpipe.length; i++) {
            if (yamlpipe[i].includes("\(\(")) {
                console.log("------> 1st if")
                var rnoryaml = yamlpipe[0].split(/&&/);
                var oryaml = rnoryaml.shift().concat(yamlpipe[1]);
            }
            if (yamlpipe[1].includes("\)\)")) {
                console.log("------> 2nd if")
                var rp1oryaml = yamlpipe[0];
                var oryaml = rp1oryaml.split("&&").slice(0, -1).concat(yamlpipe[1]);
            } else {
                console.log("------> 3rd if")
                var rporyaml = yamlpipe[0];
                var oryaml = rporyaml.split(/\(\(/).slice(0, -1).concat(yamlpipe[1]);
            }
        }
    } else {
        console.log("------> not if")
        var oryaml = "";
        //var rnoryaml = yamlpipe[0].split(/&&/);
        //var oryaml = rnoryaml.shift().concat("," + yamlpipe[1]);
    }

    console.log("And: " + andyaml)
    console.log("Or: " + oryaml)
}

/* 
function regexmatch() {
    var yamltextArea = document.getElementById('yamlInput');
    var trimyaml = yamltextArea.value.slice(yamltextArea.value.indexOf("&&") + 3);
    var iregex = /iregex|\(|\)/g;
    var regex = /&&|\|\|/g;
    var signature = (trimyaml.match(regex).reverse());
    var yaml = (trimyaml.replaceAll(iregex, ""));
    var yamldata = {};
    for (var i = signature.length - 1; i >= 0; i--) {
        var dsignature = signature.splice(i, 1);
        if (dsignature == "&&") {
            var yamldata = yaml;
            console.log(yamldata)
        }
    }
} */

function trimMe(textboxdata) {
    textboxdata.value = textboxdata.value.replace(/\s\s|iregex\(\"|\"\)|iregex\(\'|\'\)/gi, " ").replace(/\s==\s|\":\"|\":\s\"/g, " = ").replace(/\"|,$/g, "").replace(/\(\n/g, "(").replace(/\n\)/g, ")");
    //textboxdata.style.color = "red";
}

function buildrule() {
    var mandate = document.getElementById('mandate').value.replaceAll(/\n|,/g, " && ").replace(/=/g, " == iregex(\"");
    var logicand = document.getElementById('logicand').value.replaceAll(/\n|,/g, " && ").replace(/=/g, " == iregex(\"");
    var logicor = document.getElementById('logicor').value.replaceAll(/\n|,/g, " && ").replace(/=/g, " == iregex(\"");
    var fmandate = mandate.replaceAll(/\s&&\s/g, "\") && ").replaceAll(/\s\|\|\s/g, "\") || ");
    var flogicand = logicand.replaceAll(/\s&&\s/g, "\") && ").replaceAll(/\s\|\|\s/g, "\") || ");
    var flogicor = logicor.replaceAll(/\s&&\s/g, "\") && ").replaceAll(/\s\|\|\s/g, "\") || ");
    if (mandate == "") {
        var result = "Mandate field is Must"
    } else if (logicand == "" && logicor == "") {
        var result = (fmandate + "\")");
    } else if (logicor == "") {
        var result = (fmandate + "\") && " + flogicand + "\")");
    } else if (logicand == "") {
        var result = (fmandate + "\") || " + flogicor + "\")");
    } else {
        var result = (fmandate + "\") && " + flogicand + "\") || " + flogicor + "\")");
    }
    var fresult = result.replaceAll(/\)\"\)/g, "\"))").replaceAll(/\)\"\)\)/g, "\")))").replaceAll(/\)\"\)\)\)/g, "\"))))").replaceAll(/\b\s+\"|\"\s\b/g, "\"").replaceAll(/!\s==/g, " != ").replaceAll(/\"\s|\s\"/g, "\"").replaceAll(/\./g, "\\.").replaceAll(/\s&&\"\)/g, "").replaceAll(/iregex\(\"null\"\)/g, "null");
    document.getElementById("build").innerHTML = fresult;
}

function evlogs() {

};

function evlogs() {
    const evFileBtn = document.getElementById("ev-file");
    const evBtn = document.getElementById("ev-button");
    const evTxt = document.getElementById("ev-text");
    evBtn.addEventListener("click", function() {
        evFileBtn.click();
    });
    console.log("hello")
    evFileBtn.addEventListener("change", function() {
        if (evFileBtn.value) {
            evTxt.innerHTML = evFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            evTxt.innerHTML = "No file chosen, yet.";
        }
    });
    let input = document.querySelector('input');
    input.addEventListener('change', () => {
        let files = input.files;
        if (files.length == 0) return;
        const file = files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            const file = e.target.result;
            const lines = file.split(/\r\n|\n/);
            var evlogs = lines.join('\n');
            console.log(evlogs)
        };
        reader.onerror = (e) => alert(e.target.error.name);
        reader.readAsText(file);
    });
}