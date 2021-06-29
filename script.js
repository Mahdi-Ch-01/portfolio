function printWeekDays(){
    var semaine = [ 'lun', 'mra', 'mer', 'jeu', 'ven', 'sam', 'ddi' ];


    var container = document.getElementById("techno");
    var br = document.createElement("br");
    console.log(br)
    console.log(typeof br)
    for (var i=0; i<semaine.length; i++) {
        container.appendChild(br.cloneNode(true));
        container.appendChild(document.createTextNode(semaine[i]));
    } 
    
    // var content1 = document.createTextNode(semaine[0]);
    // var content2 = document.createTextNode(semaine[1]);
    // container.appendChild(content1);
    // container.appendChild(br);
    // container.appendChild(content2);


    // semaine.pop();
    // document.open();
    // for (var i=0; i<semaine.length; i++) {
    //     document.write(semaine[i]+" ");
    // }
    // document.write("<br/>");
    // semaine.push("dim");
    // semaine[1]="mar";
    // document.write(semaine.length);
    // document.write("<br/>");
    // document.write(semaine[2]);
    // document.close();

}
// printWeekDays();


function submit(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);
    
    var d = "";
    if (a===b && a===c) {
        d=('Les trois variables sont identiques.');
    } else if ((a===b && a!==c) ||(a===c && a!==b) ||(b===c && b!==a)) {
        d=('deux des variables sont de valeurs égales.');
    } else {
        d=('Les trois variables sont differentes.');
    }
    console.log (`reponse= ${d}`);
}

// var cv = {
//     "prenom": "mahdi",
//     "nom": "Chaaouni",
//     "age": 21,
//     "languages": ["arabe", "français"],
//     "technologies": {
//       "javascript": "debutant",
//       "c++": "moyen"
//     },
//     "taille": 175,
//     "educationLevel": "2eme IG",
// };
var container = document.getElementById("techno");


function onSelectChange () {
    container.innerHTML = '';
    var selectedKey = document.getElementById("select").value;
    getRemoteData(selectedKey)
}


function getCV(data, selectedKey) {
    var technoKeys = Object.keys(data[0]);
    loadSelectOptions(technoKeys);
    console.log(data)

    var sortedData = data.sort(function(a, b){
        return a[selectedKey] > b[selectedKey] ? 1 : -1;
    });

    console.log(sortedData)
    var br = document.createElement("br");
    for(var j=0;j<sortedData.length;j++) {

        for(var i=0;i<technoKeys.length;i++) {

            container.appendChild(br.cloneNode(true));
            var b = document.createElement("b");
            var span = document.createElement("span");
            var prettyKey = technoKeys[i] + ": "
            //console.log(technoKeys[i]);
            b.appendChild(document.createTextNode(prettyKey));
            container.appendChild(b);
            //span.appendChild(document.createTextNode(data[technoKeys[i]]));
            var test = document.createTextNode(sortedData[j][technoKeys[i]]) ;
            span.appendChild(test);
            container.appendChild(span);
            
        }
        container.appendChild(br.cloneNode(true));
    }

    // b.appendChild(cleprenom);
    // span.appendChild(prenom);
    // 
    // container.appendChild(b);
    // container.appendChild(span);
}
// getCV();

function getRemoteData(selectedKey) {
    // https://jsonplaceholder.typicode.com/users/1
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // container.innerHTML = this.responseText;
        getCV(JSON.parse(this.responseText), selectedKey) 
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send();
    console.log(this.responseText)
}
getRemoteData()

function loadSelectOptions(keys) {
    for (var f=0;f< keys.length;f++){
        var x = document.getElementById("select");
        var option = document.createElement("option");
        option.setAttribute('value', keys[f]);

        
        console.log(keys[f]);
        option.appendChild(document.createTextNode(keys[f]));
        x.appendChild(option);
    }
}