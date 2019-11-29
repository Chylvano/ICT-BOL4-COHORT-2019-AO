document.getElementById("title").innerHTML = "Welkom bij mijn game!";
document.getElementById("button1").onclick = function() {startspel()};
document.getElementById("button1").innerHTML = "start";
document.getElementById("description").innerHTML = "Klik op start om te beginnen.";
document.getElementById("button2").style.display = "none";
document.getElementById("button3").style.display = "none";
document.getElementById("inventoryItem").style.display = "none";
document.body.style.backgroundImage = "url('img/start.jpg')";
var munt = 0

function startspel(){
    document.getElementById("title").innerHTML = "Level 1";
    document.getElementById("description").innerHTML = "Je bent in de woestijn wakker geworden zonder spullen wat ga je zoeken?<br> 1 - zoeken naar water<br> 2 - zoeken naar een stad<br> 3 - zoeken naar mensen";
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("button3").style.display = "inline-block";
    document.getElementById("button1").onclick = function() {level2a()};
    document.getElementById("button2").onclick = function() {level2b()};
    document.getElementById("button3").onclick = function() {level2c()};
    document.getElementById("button1").innerHTML = "1";
    document.getElementById("button2").innerHTML = "2";
    document.getElementById("button3").innerHTML = "3";
    document.getElementById("inventoryItem").style.display = "none";
    document.body.style.backgroundImage = "url('img/woestijn.jpg')";
}
function level2a(){
    document.body.style.backgroundImage = "url('img/oase.jpg')";
    document.getElementById("title").innerHTML = "Level 2";
    document.getElementById("description").innerHTML = "Je hebt de oase bereikt.";
    document.getElementById("button1").onclick = function() {level2a3a()};
    document.getElementById("button2").onclick = function() {level2b3b()};
    document.getElementById("button3").onclick = function() {level2c3c()};
}

function level2b(){
    document.body.style.backgroundImage = "url('img/stad.jpg')";
    document.getElementById("title").innerHTML = "Level 2";
    document.getElementById("description").innerHTML = "Je hebt de stad bereikt.<br>1 - de stad verkennen <br>2 - naar een winkel gaan<br>3 - naar het vliegveld gaan.";
    document.getElementById("button1").onclick = function() {level3a()};
    document.getElementById("button2").onclick = function() {level3b()};
    document.getElementById("button3").onclick = function() {level3c()};
    document.getElementById("button1").style.display = "inline-block";
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("button3").style.display = "inline-block";
    document.getElementById("button1").innerHTML = "1";
    document.getElementById("button2").innerHTML = "2";
    document.getElementById("button3").innerHTML = "3";

}

function level2c(){
    document.body.style.backgroundImage = "url('img/einde1.jpg')";
    document.getElementById("title").innerHTML = "Helaas";
    document.getElementById("button1").onclick = function() {startspel()};
    document.getElementById("description").innerHTML = "Je hebt niemand kunnen vinden en bent dood gegaan omdat je geen water had.";
    document.getElementById("button1").innerHTML = "Opnieuw beginnen";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";

}

function level3a(){
    document.getElementById("title").innerHTML = "Level 3";
    document.getElementById("inventoryItem").style.display = "inline-block";
    var munt = 1
    document.getElementById("description").innerHTML = "Je hebt een munt gevonden.";
    document.getElementById("button1").innerHTML = "Terug naar de stad";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button1").onclick = function() {level2b()};
}

function level3b(){
    document.getElementById("title").innerHTML = "Level 3";
    document.body.style.backgroundImage = "url('img/winkel.jpg!d')";
    document.getElementById("button3").onclick = function() {level2b()};
    document.getElementById("description").innerHTML = "Je bent bij een winkel<br> 1 - banaan kopen<br> 2 - vliegticket kopen<br> 3 - terug naar de stad";
    document.getElementById("button1").onclick = function() {winkel1()};
    document.getElementById("button2").onclick = function() {level5b()};
    document.getElementById("button3").onclick = function() {level2b()};
}

function level3c(){
    if (inventoryItem == 1
        ){
     levelv2();
    }
    else{
        levelv1();
    }
   }

function level4a(){
    document.getElementById("title").innerHTML = "Level 4";
    
}

function levelv1(){
    document.getElementById("button1").innerHTML = "Terug naar de stad";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("title").innerHTML = "Helaas";
    document.getElementById("description").innerHTML = "Je hebt geen ticket dus je kan niet naar binnen";
    document.getElementById("button1").onclick = function() {level2b()};  
}

function levelv2(){
    
}

function winkel1(){
    if (inventoryItem == 1
        ){
     einde2();
    }
    else{
        geengeld();
    }
   }

function einde2(){
    document.getElementById("title").innerHTML = "Helaas";
    document.getElementById("button1").onclick = function() {startspel()};
    document.getElementById("description").innerHTML = "De banaan was giftig nu ben je dood.";
    document.getElementById("button1").innerHTML = "Opnieuw beginnen";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function geengeld(){
    document.getElementById("title").innerHTML = "Helaas";
    document.getElementById("button1").onclick = function() {level2b()};
    document.getElementById("description").innerHTML = "Je hebt niet genoeg geld.";
    document.getElementById("button1").innerHTML = "terug naar de stad";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function level5b(){
    if (inventoryItem == 1
        ){
     ticket1();
    }
    else{
        geengeld();
    }
   }

function ticket1(){
    document.getElementById("title").innerHTML = "Gekocht";
    document.getElementById("button1").onclick = function() {level2b()};
    document.getElementById("description").innerHTML = "Je hebt een vliegticket gekocht.";
    document.getElementById("button1").innerHTML = "terug naar de stad";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}