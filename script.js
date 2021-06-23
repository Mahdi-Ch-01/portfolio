function printWeekDays(){
    var semaine = [ 'lun', 'mra', 'mer', 'jeu', 'ven', 'sam', 'ddi' ];
    semaine.pop();
    document.open();
    for (var i=0; i<semaine.length; i++) {
        document.write(semaine[i]+" ");
    }
    document.write("<br/>");

    semaine.push("dim");
    semaine[1]="mar";
    document.write(semaine.length);
    document.write("<br/>");
    document.write(semaine[2]);
    document.close();


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
