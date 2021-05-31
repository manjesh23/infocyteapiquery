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
    let input = document.querySelector('#evlogs');
    input.addEventListener('change', () => {
        let files = input.files;
        if (files.length == 0) return;
        const file = files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
            const file = e.target.result;
            var evlogs = file;
            if (evlogs.includes("InstanceID")) {
                var mapObj = {
                    "A service was installed in the system": "<span class=\"logsuccess\">A service was installed in the system</span>",
                    "The Infocyte HUNT Agent service is marked as an interactive service.": "<span class=\"logwarning\">The Infocyte HUNT Agent service is marked as an interactive service</span>",
                    "The Infocyte HUNT Agent service terminated unexpectedly.": "<span class=\"logdanger\">The Infocyte HUNT Agent service terminated unexpectedly.</span>",

                };
                let keys = Object.keys(mapObj);
                var regexkeys = JSON.stringify(keys).replace(/,/g, "|").replace(/\[|\]|\"/g, "");
                var keysmatch = new RegExp(regexkeys, "gi");
                finalevlogs = evlogs.replace(keysmatch, matched => mapObj[matched]);
                document.getElementById("results").innerHTML = finalevlogs;
            } else {
                alert("Please upload Event Viewer logs")
                window.location.reload();
            }

        };
        reader.onerror = (e) => alert(e.target.error.name);
    });
}

function alogs() {
    let input = document.querySelector('#alogs');
    input.addEventListener('change', () => {
        let files = input.files;
        if (files.length == 0) return;
        const file = files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
            var file = e.target.result.replace(/,/g, "");
            var lines = file.split(/\r\n|\n/);
            var alogs = lines.join(',').replace(/,/g, "<br>");
            if (alogs.includes("[agent::")) {
                var mapObj = {
                    "Results sent scan is complete": "<span class=\"logsuccess\">Results sent scan is complete</span>",
                    "Cannot execute jobs: Unable to post data: error sending request for url": "<span class=\"logdanger\">Cannot execute jobs: Unable to post data: error sending request for url</span>",
                    "Service stop signal received.": "<span class=\"logdanger\">Service stop signal received.</span>",
                    "Received stop signal from service controller": "<span class=\"logdanger\">Received stop signal from service controller</span>",
                    "error notifying wait possible future leak": "<span class=\"logdanger\">error notifying wait possible future leak</span>",
                    "Unable to put data: error sending request for url": "<span class=\"logdanger\">Unable to put data: error sending request for url</span>",
                    "Error communicating with API: Unable to post data: error sending request for url": "<span class=\"logdanger\">Error communicating with API: Unable to post data: error sending request for url</span>",
                    "Agent has started": "<span class=\"logsuccess\">Agent has started</span>",
                    "os error 10051": "<span class=\"oserror10051\">os error 10051</span>",
                    "os error 10060": "<span class=\"oserror10060\">os error 10060</span>",
                    "os error 10054": "<span class=\"oserror10054\">os error 10054</span>",
                    "Enabling RTS": "<span class=\"logwarning\">Enabling RTS</span>",
                    "RTS Enabled": "<span class=\"logwarning\">RTS Enabled</span>",
                    "Notifying service controller that HUNT Agent is shutting down": "<span class=\"logwarning\">Notifying service controller that HUNT Agent is shutting down</span>",
                    "Enumerating running processes": "<span class=\"logprimary\">Enumerating running processes</span>",
                    "Enumerating drivers": "<span class=\"logprimary\">Enumerating drivers</span>",
                    "Enumerating autostart locations": "<span class=\"logprimary\">Enumerating autostart locations</span>",
                    "Enumerating users": "<span class=\"logprimary\">Enumerating users</span>",
                    "Collecting important events": "<span class=\"logprimary\">Collecting important events</span>",

                };
                let keys = Object.keys(mapObj);
                var regexkeys = JSON.stringify(keys).replace(/,/g, "|").replace(/\[|\]|\"/g, "");
                var keysmatch = new RegExp(regexkeys, "gi");
                str = alogs.replace(keysmatch, matched => mapObj[matched]);
                document.getElementById("results").innerHTML = str;
            } else {
                alert("Please upload Agent logs")
                window.location.reload();
            }
        };
        reader.onerror = (e) => alert(e.target.error.name);
    });
}

function clogs() {
    let input = document.querySelector('#clogs');
    input.addEventListener('change', () => {
        let files = input.files;
        if (files.length == 0) return;
        const file = files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
            const file = e.target.result;
            const lines = file.split(/\r\n|\n/);
            var evlogs = lines.join('\n');
            console.log(evlogs)
        };
        reader.onerror = (e) => alert(e.target.error.name);
    });
}