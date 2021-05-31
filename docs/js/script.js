function display_c() { mytime = setTimeout("display_ct()", 1e3) }

function display_ct() { var e = new Date;
    document.getElementById("ct").innerHTML = e, display_c() }

function opentab(e, n) { var s, l, r; for (l = document.getElementsByClassName("tabcontent"), s = 0; s < l.length; s++) l[s].style.display = "none"; for (r = document.getElementsByClassName("tablinks"), s = 0; s < r.length; s++) r[s].className = r[s].className.replace(" active", "");
    document.getElementById(n).style.display = "block", e.currentTarget.className += " active" }

function flowdiag() { document.getElementsByName("railroad")[0].src = "regexmap.html", window.scrollBy(0, document.body.scrollHeight || document.documentElement.scrollHeight) }

function regexmatch() { var e = document.getElementById("yamlInput").value; if (e.replaceAll(/\n|\s/g, "").includes("hostOs")) var n = e.slice(e.indexOf("&&") + 3).replaceAll(/\n|\s/g, ""); var s = n.split(/\|\|/);
    console.log(s); var l = "",
        r = s[0].split(/&&/); if (s.length > 1)
        for (var a = 1; a < s.length; a++) { if (s[a].includes("((")) { console.log("------\x3e 1st if");
                l = s[0].split(/&&/).shift().concat(s[1]) } if (s[1].includes("))")) { console.log("------\x3e 2nd if");
                l = s[0].split("&&").slice(0, -1).concat(s[1]) } else { console.log("------\x3e 3rd if");
                l = s[0].split(/\(\(/).slice(0, -1).concat(s[1]) } } else { console.log("------\x3e not if");
            l = "" }
    console.log("And: " + r), console.log("Or: " + l) }

function trimMe(e) { e.value = e.value.replace(/\s\s|iregex\(\"|\"\)|iregex\(\'|\'\)/gi, " ").replace(/\s==\s|\":\"|\":\s\"/g, " = ").replace(/\"|,$/g, "").replace(/\(\n/g, "(").replace(/\n\)/g, ")") }

function buildrule() { var e = document.getElementById("mandate").value.replaceAll(/\n|,/g, " && ").replace(/=/g, ' == iregex("'),
        n = document.getElementById("logicand").value.replaceAll(/\n|,/g, " && ").replace(/=/g, ' == iregex("'),
        s = document.getElementById("logicor").value.replaceAll(/\n|,/g, " && ").replace(/=/g, ' == iregex("'),
        l = e.replaceAll(/\s&&\s/g, '") && ').replaceAll(/\s\|\|\s/g, '") || '),
        r = n.replaceAll(/\s&&\s/g, '") && ').replaceAll(/\s\|\|\s/g, '") || '),
        a = s.replaceAll(/\s&&\s/g, '") && ').replaceAll(/\s\|\|\s/g, '") || '); if ("" == e) var t = "Mandate field is Must";
    else if ("" == n && "" == s) t = l + '")';
    else if ("" == s) t = l + '") && ' + r + '")';
    else if ("" == n) t = l + '") || ' + a + '")';
    else t = l + '") && ' + r + '") || ' + a + '")'; var o = t.replaceAll(/\)\"\)/g, '"))').replaceAll(/\)\"\)\)/g, '")))').replaceAll(/\)\"\)\)\)/g, '"))))').replaceAll(/\b\s+\"|\"\s\b/g, '"').replaceAll(/!\s==/g, " != ").replaceAll(/\"\s|\s\"/g, '"').replaceAll(/\./g, "\\.").replaceAll(/\s&&\"\)/g, "").replaceAll(/iregex\(\"null\"\)/g, "null");
    document.getElementById("build").innerHTML = o }

function evlogs() { let e = document.querySelector("#evlogs");
    e.addEventListener("change", () => { let n = e.files; if (0 == n.length) return; const s = n[0]; let l = new FileReader;
        l.readAsText(s), l.onload = (e => { var n = e.target.result; if (n.includes("InstanceID")) { var s = { "A service was installed in the system": '<span class="logsuccess">A service was installed in the system</span>', "The Infocyte HUNT Agent service is marked as an interactive service.": '<span class="logwarning">The Infocyte HUNT Agent service is marked as an interactive service</span>', "The Infocyte HUNT Agent service terminated unexpectedly.": '<span class="logdanger">The Infocyte HUNT Agent service terminated unexpectedly.</span>' }; let e = Object.keys(s); var l = JSON.stringify(e).replace(/,/g, "|").replace(/\[|\]|\"/g, ""),
                    r = new RegExp(l, "gi");
                finalevlogs = n.replace(r, e => s[e]), document.getElementById("results").innerHTML = finalevlogs } else alert("Please upload Event Viewer logs"), window.location.reload() }), l.onerror = (e => alert(e.target.error.name)) }) }

function alogs() { let e = document.querySelector("#alogs");
    e.addEventListener("change", () => { let n = e.files; if (0 == n.length) return; const s = n[0]; let l = new FileReader;
        l.readAsText(s), l.onload = (e => { var n = e.target.result.replace(/,/g, "").split(/\r\n|\n/).join(",").replace(/,/g, "<br>"); if (n.includes("[agent::")) { var s = { "Results sent scan is complete": '<span class="logsuccess">Results sent scan is complete</span>', "Cannot execute jobs: Unable to post data: error sending request for url": '<span class="logdanger">Cannot execute jobs: Unable to post data: error sending request for url</span>', "Service stop signal received.": '<span class="logdanger">Service stop signal received.</span>', "Received stop signal from service controller": '<span class="logdanger">Received stop signal from service controller</span>', "error notifying wait possible future leak": '<span class="logdanger">error notifying wait possible future leak</span>', "Unable to put data: error sending request for url": '<span class="logdanger">Unable to put data: error sending request for url</span>', "Error communicating with API: Unable to post data: error sending request for url": '<span class="logdanger">Error communicating with API: Unable to post data: error sending request for url</span>', "Agent has started": '<span class="logsuccess">Agent has started</span>', "os error 10051": '<span class="oserror10051">os error 10051</span>', "os error 10060": '<span class="oserror10060">os error 10060</span>', "os error 10054": '<span class="oserror10054">os error 10054</span>', "Enabling RTS": '<span class="logwarning">Enabling RTS</span>', "RTS Enabled": '<span class="logwarning">RTS Enabled</span>', "Notifying service controller that HUNT Agent is shutting down": '<span class="logwarning">Notifying service controller that HUNT Agent is shutting down</span>', "Enumerating running processes": '<span class="logprimary">Enumerating running processes</span>', "Enumerating drivers": '<span class="logprimary">Enumerating drivers</span>', "Enumerating autostart locations": '<span class="logprimary">Enumerating autostart locations</span>', "Enumerating users": '<span class="logprimary">Enumerating users</span>', "Collecting important events": '<span class="logprimary">Collecting important events</span>' }; let e = Object.keys(s); var l = JSON.stringify(e).replace(/,/g, "|").replace(/\[|\]|\"/g, ""),
                    r = new RegExp(l, "gi");
                str = n.replace(r, e => s[e]), document.getElementById("results").innerHTML = str } else alert("Please upload Agent logs"), window.location.reload() }), l.onerror = (e => alert(e.target.error.name)) }) }

function clogs() { let e = document.querySelector("#clogs");
    e.addEventListener("change", () => { let n = e.files; if (0 == n.length) return; const s = n[0]; let l = new FileReader;
        l.readAsText(s), l.onload = (e => { var n = e.target.result.split(/\r\n|\n/).join("\n");
            console.log(n) }), l.onerror = (e => alert(e.target.error.name)) }) }