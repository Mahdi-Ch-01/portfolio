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
printWeekDays();


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
