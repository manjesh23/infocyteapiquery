// tabs and landing page config

function opentab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        document.body.getElementsByClassName('landing').landing.innerHTML = ""
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
/* function regexmatch() {
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

    console.log("And: " + JSON.stringify(andyaml).replace(/\",\"/g, " && "))
    console.log("Or: " + JSON.stringify(oryaml).replace(/\",\"/g, " && "))
} */

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

// Another new try for YAML Tester
function regexmatch() {
    var yamltextArea = document.getElementById('yamlInput').value;
    var miniyaml = yamltextArea.replaceAll(/\n|\s/g, "");
    var yamldict = [];
    if (miniyaml.includes("hostOs")) {
        var trimyaml = yamltextArea.slice(yamltextArea.indexOf("&&") + 3).replace(/\n|\s|\"|\\/g, "").split("&&");
        for (var key in trimyaml) {
            console.log(trimyaml[key].split(/==|!=/))
        }
    }
}

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
        if (Math.round(file.size / 1048576) < 10) {
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                const file = e.target.result;
                var evlogs = file;
                if (evlogs.includes("InstanceID")) {
                    var mapObj = {
                        // Success Logs
                        "A service was installed in the system": "<span class=\"logsuccess\">A service was installed in the system</span>",
                        // Warning Logs
                        "The Infocyte HUNT Agent service is marked as an interactive service.": "<span class=\"logwarning\">The Infocyte HUNT Agent service is marked as an interactive service</span>",
                        // Danger Logs
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
        } else {
            alert("Keeping browser health in mind, file upload size is restricted to 10Meg")
            window.location.reload();
        }
    });
}

function alogs() {
    let input = document.querySelector('#alogs');
    input.addEventListener('change', () => {
        let files = input.files;
        if (files.length == 0) return;
        const file = files[0];
        if (Math.round(file.size / 1048576) < 10) {
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                var file = e.target.result.replace(/,/g, "");
                var lines = file.split(/\r\n|\n/);
                var alogs = lines.join(',').replace(/,/g, "<br>");
                if (alogs.includes("[agent::")) {
                    var mapObj = {
                        // Success logs
                        "Agent has started": "<span class=\"logsuccess loginfoh\">Agent has started</span>",
                        "Starting as windows service": "<span class=\"logsuccess loginfoh\">Starting as windows service</span>",
                        "Results sent scan is complete": "<span class=\"logsuccess\">Results sent scan is complete</span>",
                        "Found matches!": "<span class=\"logsuccess\">Found matches!</span>",
                        "Yara scan completed.": "<span class=\"logsuccess\">Yara scan completed.</span>",
                        "Result=Good.": "<span class=\"logsuccess\">Result=Good.</span>",
                        // Danger Logs
                        "Cannot execute jobs: Unable to post data: error sending request for url": "<span class=\"logdanger\">Cannot execute jobs: Unable to post data: error sending request for url</span>",
                        "Service stop signal received.": "<span class=\"logdanger\">Service stop signal received.</span>",
                        "Cannot save RTS data: unable to open database file": "<span class=\"logdanger\">Cannot save RTS data: unable to open database file</span>",
                        "Received stop signal from service controller": "<span class=\"logdanger\">Received stop signal from service controller</span>",
                        "error notifying wait possible future leak": "<span class=\"logdanger\">error notifying wait possible future leak</span>",
                        "Unable to put data: error sending request for url": "<span class=\"logdanger\">Unable to put data: error sending request for url</span>",
                        "unable to open database file": "<span class=\"logdanger\">unable to open database file</span>",
                        "Cannot finish fetching user accounts:": "<span class=\"logdanger\">Cannot finish fetching user accounts:</span>",
                        "Error communicating with API: Unable to post data: error sending request for url": "<span class=\"logdanger\">Error communicating with API: Unable to post data: error sending request for url</span>",
                        "Result=Suspicious.": "<span class=\"logdanger\">Result=Suspicious.</span>",
                        "Extension Error:": "<span class=\"logdanger\">Extension Error:</span>",
                        "callback error:": "<span class=\"logdanger\">callback error:</span>",
                        "runtime error:": "<span class=\"logdanger\">runtime error:</span>",
                        "cannot be accessed": "<span class=\"logdanger\">cannot be accessed</span>",
                        "Signal received to stop in-progress inspection": "<span class=\"logdanger\">Signal received to stop in-progress inspection</span>",
                        "Cannot wait for upload authorization": "<span class=\"logdanger\">Cannot wait for upload authorization</span>",
                        "Could not prune temp records: no such table: event_temp": "<span class=\"logdanger\">Could not prune temp records: no such table: event_temp</span>",
                        "Could not merge temp records: no such table: event_temp": "<span class=\"logdanger\">Could not merge temp records: no such table: event_temp</span>",
                        "no such table: user_temp": "<span class=\"logdanger\">no such table: user_temp</span>",
                        "no such table: memscan_temp": "<span class=\"logdanger\">no such table: memscan_temp</span>",
                        "Setting RTS status to disabled": "<span class=\"logdanger\">Setting RTS status to disabled</span>",
                        "Cannot get processes from system information": "<span class=\"logdanger\">Cannot get processes from system information</span>",
                        "database is locked": "<span class=\"logdanger\">database is locked</span>",
                        "Could not check RtsProcess for existence": "<span class=\"logdanger\">Could not check RtsProcess for existence</span>",
                        "Cannot check RTS data": "<span class=\"logdanger\">Cannot check RTS data</span>",
                        // OS Error logs
                        "os error 10051": "<span class=\"oserror10051 loginfoh\">os error 10051</span>",
                        "os error 10060": "<span class=\"oserror10060 loginfoh\">os error 10060</span>",
                        "os error 10054": "<span class=\"oserror10054 loginfoh\">os error 10054</span>",
                        "os error 10061": "<span class=\"oserror10061 loginfoh\">os error 10061</span>",
                        "os error 1450": "<span class=\"oserror1450 loginfoh\">os error 1450</span>",
                        "os error 104": "<span class=\"oserror104 loginfoh\">os error 104</span>",
                        "os error 11001": "<span class=\"oserror11001 loginfoh\">os error 11001</span>",
                        "Invalid server response: 500": "<span class=\"error500 loginfoh\">Invalid server response: 500</span>",
                        "Invalid server response: 404": "<span class=\"error404 loginfoh\">Invalid server response: 404</span>",
                        "Lua string": "<span class=\"Luastring loginfoh\">Lua string</span>",
                        // Warning Logs
                        "RTS Enabled": "<span class=\"logwarning\">RTS Enabled</span>",
                        "Enabling RTS": "<span class=\"logwarning\">Enabling RTS</span>",
                        "Notifying service controller that HUNT Agent is shutting down": "<span class=\"logwarning\">Notifying service controller that HUNT Agent is shutting down</span>",
                        "Cannot initialize package manager": "<span class=\"logwarning\">Cannot initialize package manager</span>",
                        // Primary logs
                        "Enumerating running processes": "<span class=\"logprimary\">Enumerating running processes</span>",
                        "Enumerating drivers": "<span class=\"logprimary\">Enumerating drivers</span>",
                        "Enumerating autostart locations": "<span class=\"logprimary\">Enumerating autostart locations</span>",
                        "Enumerating processes": "<span class=\"logprimary\">Enumerating processes</span>",
                        "Enumerating users": "<span class=\"logprimary\">Enumerating users</span>",
                        "System inspections complete": "<span class=\"logprimary\">System inspections complete</span>",
                        "Run keys": "<span class=\"logprimary\">Run keys</span>",
                        "AppInit_DLLs": "<span class=\"logprimary\">AppInit_DLLs</span>",
                        "WMI Persistence": "<span class=\"logprimary\">WMI Persistence</span>",
                        "Services": "<span class=\"logprimary\">Services</span>",
                        "Accessibility features": "<span class=\"logprimary\">Accessibility features</span>",
                        "Files": "<span class=\"logprimary\">Files</span>",
                        "Collecting important events": "<span class=\"logprimary\">Collecting important events</span>",
                        "Getting installed application list": "<span class=\"logprimary\">Getting installed application list</span>",
                        "Matched yara rule": "<span class=\"logprimary\">Matched yara rule</span>",

                    };
                    let keys = Object.keys(mapObj);
                    var regexkeys = JSON.stringify(keys).replace(/,/g, "|").replace(/\[|\]|\"/g, "");
                    var keysmatch = new RegExp(regexkeys, "gi");
                    finalalogs = alogs.replace(keysmatch, matched => mapObj[matched]);
                    if (finalalogs.includes("tzone:")) {
                        finalalogs = finalalogs.replace(/tzone:[a-zA-Z/_]{0,50}/g, '<spanb id="tzonehere">$&</spanb>')
                        document.getElementById("results").innerHTML = finalalogs.replace(/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}\.\d{1,12}\sUTC/g, '<spanb id="tzonehere">$&</spanb>');
                    } else {
                        document.getElementById("results").innerHTML = finalalogs.replace(/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}\.\d{1,12}\sUTC/g, '<spana id="tzoneconvert">$&</spana>');
                    }
                } else {
                    alert("Please upload Agent logs")
                    window.location.reload();
                }
            };
            reader.onerror = (e) => alert(e.target.error.name);
        } else {
            alert("Keeping browser health in mind, file upload size is restricted to 10Meg")
            window.location.reload();
        }
    });
}

function clogs() {
    let input = document.querySelector('#clogs');
    input.addEventListener('change', () => {
        let files = input.files;
        if (files.length == 0) return;
        const file = files[0];
        if (Math.round(file.size / 1048576) < 10) {
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                var clogs = e.target.result;
                if (clogs.includes("Discovery:") || clogs.includes("PSRemoting/WinRM") || clogs.includes("ing Subscribers") || clogs.includes("[Error]")) {
                    var mapObj = {
                        // Success Logs
                        "Starting Subscribers": "<span class=\"logsuccess\">Starting Subscribers</span>",
                        "Access Check SUCCEEDED": "<span class=\"logsuccess\">Access Check SUCCEEDED</span>",
                        "Access Check: SUCCEEDED!": "<span class=\"logsuccess\">Access Check: SUCCEEDED!</span>",
                        "Jobs loaded successfully": "<span class=\"logsuccess\">Jobs loaded successfully</span>",
                        "Target is live and accessible": "<span class=\"logsuccess\">Target is live and accessible</span>",
                        "Target is live": "<span class=\"logsuccess\">Target is live</span>",
                        "Successfully EXECUTED c:\\windows\\temp\\infocyte.exe": "<span class=\"logsuccess\">Successfully EXECUTED c:\\windows\\temp\\infocyte.exe</span>",
                        "Attempting transfer agent to c:\\windows\\temp\\infocyte.exe": "<span class=\"logsuccess\">Attempting transfer agent to c:\\windows\\temp\\infocyte.exe</span>",
                        "Successfully TRANSFERRED c:\\windows\\temp\\infocyte.exe": "<span class=\"logsuccess\">Successfully TRANSFERRED c:\\windows\\temp\\infocyte.exe</span>",
                        "Running with args:  --url https://askpentest.infocyte.com --auth f8861d03-1a63-4344-bb01-67e6bc676f77 --no-install": "<span class=\"logsuccess\">Running with args:  --url https://askpentest.infocyte.com --auth f8861d03-1a63-4344-bb01-67e6bc676f77 --no-install</span>",
                        // Warning Logs
                        "Connection to Infocyte API restored!": "<span class=\"logwarning\">Connection to Infocyte API restored!</span>",
                        "PSRemote Transfers may have issues unless you install Powershell": "<span class=\"logwarning\">PSRemote Transfers may have issues unless you install Powershell</span>",
                        "might be a duplicate host entry in Target Group": "<span class=\"logwarning\">might be a duplicate host entry in Target Group</span>",
                        // Danger Logs
                        "Heartbeat Rejected: Server responded with code Unauthorized:": "<span class=\"logdanger\">Heartbeat Rejected: Server responded with code Unauthorized:</span>",
                        "No Response to Heartbeat: An error occurred while sending the request": "<span class=\"logdanger\">No Response to Heartbeat: An error occurred while sending the request</span>",
                        "Access Check FAILED.": "<span class=\"logdanger\">Access Check FAILED.</span>",
                        "Access is denied.": "<span class=\"logdanger\">Access is denied.</span>",
                        "did not respond to probes or resolve in DNS": "<span class=\"logdanger\">did not respond to probes or resolve in DNS</span>",
                        "Unable to connect to the remote server": "<span class=\"logdanger\">Unable to connect to the remote server</span>",
                        "Could not find reverse DNS entry for": "<span class=\"logdanger\">Could not find reverse DNS entry for</span>",
                        "Host may not exist": "<span class=\"logdanger\">Host may not exist</span>",
                        "Access denied": "<span class=\"logdanger\">Access denied</span>",
                        "Dynamic Ports appear blocked or unavailable": "<span class=\"logdanger\">Dynamic Ports appear blocked or unavailable</span>",
                        "Target did not respond to any probes but was registered in DNS": "<span class=\"logdanger\">Target did not respond to any probes but was registered in DNS</span>",
                        "Requested registry access is not allowed.": "<span class=\"logdanger\">Requested registry access is not allowed.</span>",
                        "No such host is known": "<span class=\"logdanger\">No such host is known</span>",
                        "The network path was not found": "<span class=\"logdanger\">The network path was not found</span>",
                        "Discovery: Target did not respond to any probes and failed DNS resolution. Target MAY NOT EXIST on this network": "<span class=\"logdanger\">Discovery: Target did not respond to any probes and failed DNS resolution. Target MAY NOT EXIST on this network</span>",
                        "An error occurred while sending the request.. The request failed due to an underlying issue such as network connectivity or DNS failure": "<span class=\"logdanger\">An error occurred while sending the request.. The request failed due to an underlying issue such as network connectivity or DNS failure</span>",
                        "INACCESSIBLE": "<span class=\"logdanger\">INACCESSIBLE</span>",
                        "Access denied!": "<span class=\"logdanger\">Access denied!</span>",
                        "Permission denied": "<span class=\"logdanger\">Permission denied</span>",
                        "Stopping Subscribers": "<span class=\"logdanger\">Stopping Subscribers</span>",
                        "All transport options failed": "<span class=\"logdanger\">All transport options failed</span>",
                        "SMB <Transport>: Could not get agentId via Remote Registry Service.": "<span class=\"logdanger\">SMB <Transport>: Could not get agentId via Remote Registry Service.</span>",
                        // Hyper link Danger Logs
                        "0x800706BA": "<span><a class=\"logdanger\" href=\"https://support.infocyte.com/hc/en-us/articles/115000986908-Troubleshooting-WMI-RPC-Windows-\" target=\"_blank\">0x800706BA</a></span>",
                        // Primary Logs


                    };
                    let keys = Object.keys(mapObj);
                    var regexkeys = JSON.stringify(keys).replace(/,/g, "|").replace(/\[|\]|\"/g, "");
                    var keysmatch = new RegExp(regexkeys, "gi");
                    finalclogs = clogs.replace(keysmatch, matched => mapObj[matched]);
                    document.getElementById("results").innerHTML = finalclogs.replace(/<Transport>/g, "&lt;Transport&gt;").replace(/<None>/g, "&lt;None&gt;");
                } else {
                    alert("Please upload Controller logs")
                    window.location.reload();
                }
            };
            reader.onerror = (e) => alert(e.target.error.name);
        } else {
            alert("Keeping browser health in mind, file upload size is restricted to 10Meg")
            window.location.reload();
        }

    });
}

function guilogs() {
    document.getElementById('guilogs').className = "show";
}

function gui() {
    document.getElementById('guilogs').className = "hide";
    document.getElementById("selectfilename").innerHTML = "GUI Logs selected: "
    var gui = event.clipboardData.getData('text/plain').replace(/Timeline|[A-Z]{3}\s\d{1,2}|\d{1,2}:\d\d:\d\d\s(a|p)m/g, "");
    var mapObj = {
        // Success Logs
        "Completed": "<span class=\"logsuccess\">Completed</span>",
        "Incyte job check - completed!": "<span class=\"logsuccess\">Incyte job check - completed!</span>",
        "Incyte: Finished enrichment data load": "<span class=\"logsuccess\">Incyte: Finished enrichment data load</span>",
        "Finished database load": "<span class=\"logsuccess\">Finished database load</span>",
        // Warning Logs
        "Heartbeat": "<span class=\"logwarning\">Heartbeat</span>",
        "Executing via agent": "<span class=\"logwarning\">Executing via agent</span>",
        "might be a duplicate host entry in Target Group": "<span class=\"logwarning\">might be a duplicate host entry in Target Group</span>",
        // Danger Logs
        "Failed: Abandoned data load": "<span class=\"logdanger\">Failed: Abandoned data load</span>",
        // Hyper link Danger Logs
        "Failed: At least 300s since last heartbeat": "<span><a class=\"logdanger\" href=\"https://support.infocyte.com/hc/en-us/articles/360040640871-What-does-Failed-At-least-300s-since-last-heartbeat-mean-\" target=\"_blank\">Failed: At least 300s since last heartbeat</a></span>",
        "Failed: At least 600s since attempting upload": "<span><a class=\"logdanger\" href=\"https://support.infocyte.com/hc/en-us/articles/360040640871-What-does-Failed-At-least-300s-since-last-heartbeat-mean-\" target=\"_blank\">Failed: At least 600s since attempting upload</a></span>",
        // Primary Logs
        "Survey completed in ": "<span class=\"logprimary\">Survey completed in </span>",


    };
    let keys = Object.keys(mapObj);
    var regexkeys = JSON.stringify(keys).replace(/,/g, "|").replace(/\[|\]|\"/g, "");
    var keysmatch = new RegExp(regexkeys, "gi");
    if (gui.includes("agent-deploy job fetched")) {
        var host = gui.match(/by\scontroller\s.([^\s]+)/g)[0].split(" ")[2]
    } else if (gui.includes("Executing via agent")) {
        var host = gui.match(/on\shost\s.([^\s]+)/g)[0].split(" ")[2]
    } else if (gui.includes("host-access job fetched by controller")) {
        var host = gui.match(/enrichment\sof\s.([^\s]+)/g)[0].split(" ")[2]
    } else {
        var host = "Unknown"
    }
    guiresult = gui.replace(keysmatch, matched => mapObj[matched]);
    document.getElementById("results").innerHTML = "<h3>Scan logs for the host: <span style=\"color: #99b3ff\">" + host + "</span></h3>" + guiresult;
}