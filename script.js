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

var cv = {
    "prenom": "mahdi",
    "nom": "Chaaouni",
    "age": 21,
    "languages": ["arabe", "français"],
    "technologies": {
      "javascript": "debutant",
      "c++": "moyen"
    },
    "taille": 175,
    "educationLevel": "2eme IG",
  };
function getCV() {
    var technoKeys = ["prenom", "nom", "age"];
    var container = document.getElementById("techno");

    console.log(cv.technologies.javascript)
    var br = document.createElement("br");
    // b.style.color = "blue";
    // var cleprenom = document.createTextNode("prenom: ");
    

    for(var i=0;i<technoKeys.length;i++) {
        container.appendChild(br.cloneNode(true));
        var b = document.createElement("b");
        var span = document.createElement("span");
    
        var prettyKey = technoKeys[i] + ": "
        b.appendChild(document.createTextNode(prettyKey));
        container.appendChild(b);
        
        span.appendChild(document.createTextNode(cv[technoKeys[i]]));
        container.appendChild(span);
        
    }
    // b.appendChild(cleprenom);
    // span.appendChild(prenom);
    // 
    // container.appendChild(b);
    // container.appendChild(span);
}
getCV();