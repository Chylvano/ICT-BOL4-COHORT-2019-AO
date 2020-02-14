var stellingen = [	"Nederland moet terug naar de Gulden",
"Er moet meer geld naar ontwikkelingshulp",
"De overheid moet afslanken",
"De AOW leeftijd moet terug naar 67 jaar",
"Wietteelt moet worden gelegaliseerd",
"We moeten minder geld aan het leger uitgeven",
"Alle werkenden moeten minder loonbelasting betalen",
"De leeftijd voor autorijden moet worden verhoogd",
"Paracetamol moet gratis worden"];

var eenscount = 0;

function resultaat() {
    document.getElementById("btnEens").style.display = "none";
    document.getElementById("btnOneens").style.display = "none";
    document.getElementById("btnVolgende").style.display = "none";
    if (count= 0-2) {
        document.getElementById("stelling").innerHTML = ("U heeft " + eenscount + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is CDA");
    }
    else if(count= 2-4) {
        document.getElementById("stelling").innerHTML = ("U heeft " + eenscount + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is VVD");
    }
    if (count= 5-7) {
        document.getElementById("stelling").innerHTML = ("U heeft " + eenscount + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is PvdA");
    }
    else if (count= 8-10) {
        document.getElementById("stelling").innerHTML = ("U heeft " + eenscount + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is D66");
    } 
}

function eens9() {
    eenscount+= 1;
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").innerHTML = "voltooien";
    document.getElementById("btnVolgende").onclick = function() {resultaat()};
}

function oneens9() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").innerHTML = "VOLTOOIEN";
    document.getElementById("btnVolgende").onclick = function() {resultaat()};
}

function stelling9() {
document.getElementById("stelling").innerHTML = stellingen.slice(8, 9);
document.getElementById("btnEens").onclick = function() {eens9()};
document.getElementById("btnOneens").onclick = function() {oneens9()};
document.getElementById("btnVolgende").style.display = "none";
}

stelling1();

function eens8() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling9()};
    ++eenscount;
}

function oneens8() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling9()};
}


function stelling8() {
document.getElementById("stelling").innerHTML = stellingen.slice(7, 8);
document.getElementById("btnEens").onclick = function() {eens8()};
document.getElementById("btnOneens").onclick = function() {oneens8()};
document.getElementById("btnVolgende").style.display = "none";
}


function eens7() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling8()};
    eenscount+ 1;
}

function oneens7() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling8()};
}


function stelling7() {
document.getElementById("stelling").innerHTML = stellingen.slice(6, 7);
document.getElementById("btnEens").onclick = function() {eens7()};
document.getElementById("btnOneens").onclick = function() {oneens7()};
document.getElementById("btnVolgende").style.display = "none";
}

function eens6() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling7()};
    var eenscount= eenscount+ 1;
}

function oneens6() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling7()};
}

function stelling6() {
document.getElementById("stelling").innerHTML = stellingen.slice(5, 6);
document.getElementById("btnEens").onclick = function() {eens6()};
document.getElementById("btnOneens").onclick = function() {oneens6()};
document.getElementById("btnVolgende").style.display = "none";
}

function eens5() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling6()};
    eenscount++;
}

function oneens5() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling6()};
}

function stelling5() {
    document.getElementById("stelling").innerHTML = stellingen.slice(4, 5);
    document.getElementById("btnEens").onclick = function() {eens5()};
    document.getElementById("btnOneens").onclick = function() {oneens5()};
    document.getElementById("btnVolgende").style.display = "none";
    }

function eens4() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling5()};
    eenscount++;
}

function oneens4() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling5()};
}


function stelling4() {
    document.getElementById("stelling").innerHTML = stellingen.slice(3, 4);
    document.getElementById("btnEens").onclick = function() {eens4()};
    document.getElementById("btnOneens").onclick = function() {oneens4()};
    document.getElementById("btnVolgende").style.display = "none";
    }

function eens3() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling4()};
    eenscount++;
}

function oneens3() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling4()};
}


function stelling3() {
    document.getElementById("stelling").innerHTML = stellingen.slice(2, 3);
    document.getElementById("btnEens").onclick = function() {eens3()};
    document.getElementById("btnOneens").onclick = function() {oneens3()};
    document.getElementById("btnVolgende").style.display = "none";
    }

function eens2() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling3()};
    eenscount = eenscount + 1;
}

function oneens2() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling3()};
}


function stelling2() {
    document.getElementById("stelling").innerHTML = stellingen.slice(1, 2);
    document.getElementById("btnEens").onclick = function() {eens2()};
    document.getElementById("btnOneens").onclick = function() {oneens2()};
    document.getElementById("btnVolgende").style.display = "none";
    }

function eens1() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling2()};
    eenscount++;
}

function oneens1() {
    document.getElementById("btnVolgende").style.display = "block";
    document.getElementById("btnVolgende").onclick = function() {stelling2()};
}

function stelling1() {
document.getElementById("stelling").innerHTML = stellingen.slice(0, 1);
document.getElementById("btnEens").onclick = function() {eens1()};
document.getElementById("btnOneens").onclick = function() {oneens1()};
document.getElementById("btnVolgende").style.display = "none";
}

console.log(eenscount)