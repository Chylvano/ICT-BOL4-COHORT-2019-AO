var stellingen = [	"Nederland moet terug naar de Gulden",
"Er moet meer geld naar ontwikkelingshulp",
"De overheid moet afslanken",
"De AOW leeftijd moet terug naar 67 jaar",
"Wietteelt moet worden gelegaliseerd",
"We moeten minder geld aan het leger uitgeven",
"Alle werkenden moeten minder loonbelasting betalen",
"De leeftijd voor autorijden moet worden verhoogd",
"Paracetamol moet gratis worden"];

var count = 0;
var slice1 = 0;
var slice2 = 1;
console.log(count);


function resultaat() {
    document.getElementById("btnEens").style.display = "none";
    document.getElementById("btnOneens").style.display = "none";
    document.getElementById("btnVolgende").style.display = "none";
    if (count >= 0 && count <= 2) {
        document.getElementById("stelling").innerHTML = ("U heeft " + count + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is CDA");
    }
    else if(count >= 3 && count <= 4) {
        document.getElementById("stelling").innerHTML = ("U heeft " + count + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is VVD");
    }
    if (count >= 5 && count <= 7) {
        document.getElementById("stelling").innerHTML = ("U heeft " + count + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is PvdA");
    }
    else if (count >= 8 && count <= 10) {
        document.getElementById("stelling").innerHTML = ("U heeft " + count + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is D66");
    } 
}

if(slice1==8){
    stelling2();
}
stelling1();

function eens2() {
    count++;
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").innerHTML = "voltooien";
    document.getElementById("btnVolgende").onclick = function() {resultaat()};
}

function oneens2() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").innerHTML = "VOLTOOIEN";
    document.getElementById("btnVolgende").onclick = function() {resultaat()};
}

function stelling2() {
document.getElementById("stelling").innerHTML = stellingen.slice(slice1, slice2);
document.getElementById("btnEens").onclick = function() {eens1()};
document.getElementById("btnOneens").onclick = function() {oneens2()};
document.getElementById("btnVolgende").style.display = "none";
}


function eens1() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling1()};
    count++;
    slice1++;
    slice2++;
}

function oneens1() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling1()};
    slice1++;
    slice2++;
}

function stelling1() {
document.getElementById("stelling").innerHTML = stellingen.slice(slice1, slice2);
document.getElementById("btnEens").onclick = function() {eens1()};
document.getElementById("btnOneens").onclick = function() {oneens1()};
document.getElementById("btnVolgende").style.display = "none";
}