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

function getInputValue() {
    var yamlInput = document.getElementById("yamlInput").value;
    var dataInput = document.getElementById("dataInput").value;
    var result = yamlInput.match(dataInput);
    document.getElementById("demo").innerHTML = result;

}

function regexmatch() {
    var yamltextArea = document.getElementById('yamlInput');
    var dataInput = document.getElementById("dataInput").value;
    // lines is an array of YAML data
    var yamllines = yamltextArea.value.split(/&&|\|\|/);
    console.log(yamllines)
        //var yamlclean = yamltextArea.value.replace(/\b(\\)\b/gm, "\\\\");
        //console.log(yamltextArea.value)
    var tdatalines = dataInput.replaceAll("\"", " ");
    var datal = tdatalines.split(",");
    var datalines = datal.slice(1, -1);
    // Loop through all lines in YAML data
    var yamldata = {};
    var nyamldata = {};
    for (var j = 0; j < yamllines.length; j++) {
        if (yamllines[j].indexOf("==") !== -1) {
            var cyamlmatches = yamllines[j].match(/(\"(.*?)\"|'(.*?)')/);
            if (cyamlmatches) {
                var csubmatch = cyamlmatches[1];
                var cbeforeyaml = yamllines[j].split("==").shift();
                yamldata[cbeforeyaml.replaceAll(/\r?\n|\r|\s/g, "")] = csubmatch.replaceAll(/\"/g, "");
                console.log(yamldata)
                    //console.log('= ' + cbeforeyaml + ' = ' + csubmatch)
            }
        } else {
            var nyamlmatches = yamllines[j].match(/(\"(.*?)\"|'(.*?)')/);
            if (nyamlmatches) {
                var nsubmatch = nyamlmatches[1];
                var nbeforeyaml = yamllines[j].split("!=").shift();
                nyamldata[nbeforeyaml] = nsubmatch;
                //console.log('! ' + nbeforeyaml + ' = ' + nsubmatch)
            }
        }
    }
    var ndjson = {};
    for (var i = 0; i < datalines.length; i++) {
        var cdatamatches = datalines[i].split("\s:\s");
        if (cdatamatches) {
            var datasubmatch = cdatamatches[0];
            var beforedata = datasubmatch.split(/\s:/g)[0]
            var actualdata = datasubmatch.split(/\s:/g)[1]
            var newactualdata = JSON.stringify(actualdata, function(key, value) { return (value === undefined) ? "" : value });
            ndjson[beforedata] = newactualdata.replaceAll(/\s/g, "");
            //console.log(beforedata + ' = ' + actualdata)
        }
    }

    function compare(Obj1, Obj2) {
        var equivalent = [];
        var keys = Object.keys(Obj1);
        keys.forEach(k => {
            if (Obj1.hasOwnProperty(k) && Obj2.hasOwnProperty(k)) {
                if (Obj1[k] === Obj2[k]) {
                    equivalent.push(Obj1[k]);
                }
            }
        });

        console.log(equivalent);
    }

    compare(yamldata, ndjson);
}

//console.log(yamlkey, yamldata[yamlkey])


function flowdiag() {
    document.getElementsByName('railroad')[0].src = "regexmap.html";
}