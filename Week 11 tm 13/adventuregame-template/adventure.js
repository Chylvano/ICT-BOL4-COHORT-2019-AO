document.getElementById("title").innerHTML = "Welkom bij mijn game!";
document.getElementById("button1").onclick = function() {startspel()};
document.getElementById("button1").innerHTML = "start";
document.getElementById("description").innerHTML = "Klik op start om te beginnen.";
document.getElementById("button2").style.display = "none";
document.getElementById("button3").style.display = "none";
document.getElementById("inventoryItem").style.display = "none";
document.body.style.backgroundImage = "url('img/start.jpg')";
var munt = false
var ticket = false
document.getElementById("image").style.display = "none";

function startspel(){
    document.getElementById("title").innerHTML = "woestijn";
    document.getElementById("description").innerHTML = "Je bent in de woestijn wakker geworden zonder spullen wat ga je zoeken?";
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("button3").style.display = "inline-block";
    document.getElementById("button1").onclick = function() {level2a()};
    document.getElementById("button2").onclick = function() {level2b()};
    document.getElementById("button3").onclick = function() {level2c()};
    document.getElementById("button1").innerHTML = "zoeken naar water";
    document.getElementById("button2").innerHTML = "zoeken naar een stad";
    document.getElementById("button3").innerHTML = "zoeken naar mensen";
    document.getElementById("inventoryItem").style.display = "none";
    document.body.style.backgroundImage = "url('img/woestijn.jpg')";
}
function level2a(){
    document.body.style.backgroundImage = "url('img/oase.jpg')";
    document.getElementById("title").innerHTML = "oase";
    document.getElementById("description").innerHTML = "Je hebt de oase bereikt.";
    document.getElementById("button1").onclick = function() {level2a3a()};
    document.getElementById("button2").onclick = function() {level2b3b()};
    document.getElementById("button3").onclick = function() {level2c3c()};
    document.getElementById("button1").innerHTML = "water drinken";
    document.getElementById("button2").innerHTML = "zoeken voor spullen";
    document.getElementById("button3").innerHTML = "naar de stad gaan";
}

function level2a3a(){
    document.getElementById("description").innerHTML = "Je hebt water gedronken nu kan je naar de stad lopen.";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button1").innerHTML = "naar de stad";
    document.getElementById("button1").onclick = function() {level2b()};
}

function level2b3b(){
    document.getElementById("description").innerHTML = "Je hebt een kist gevonden.";
}

function level2c3c(){
    document.body.style.backgroundImage = "url('img/einde1.jpg')";
    document.getElementById("title").innerHTML = "Helaas";
    document.getElementById("button1").onclick = function() {startspel()};
    document.getElementById("description").innerHTML = "Je bent dood gegaan omdat je geen water had.";
    document.getElementById("button1").innerHTML = "Opnieuw beginnen";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function level2b(){
    document.body.style.backgroundImage = "url('img/stad.jpg')";
    document.getElementById("title").innerHTML = "stad";
    document.getElementById("description").innerHTML = "Je hebt de stad bereikt.";
    document.getElementById("button1").onclick = function() {level3a()};
    document.getElementById("button2").onclick = function() {level3b()};
    document.getElementById("button3").onclick = function() {level3c()};
    document.getElementById("button1").style.display = "inline-block";
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("button3").style.display = "inline-block";
    document.getElementById("button1").innerHTML = "de stad verkennen";
    document.getElementById("button2").innerHTML = "naar een winkel gaan";
    document.getElementById("button3").innerHTML = "naar het vliegveld gaan";

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
    document.getElementById("title").innerHTML = "stad";
    document.getElementById("inventoryItem").style.display = "inline-block";
    var munt = 1
    document.getElementById("description").innerHTML = "Je hebt een munt gevonden.";
    document.getElementById("button1").innerHTML = "Terug naar de stad";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button1").onclick = function() {level2b()};
    munt == true;
    document.getElementById("inventoryItem").src = "img/munt.png";
}

function level3b(){
    document.getElementById("title").innerHTML = "winkel";
    document.body.style.backgroundImage = "url('img/winkel.jpg')";
    document.getElementById("description").innerHTML = "Je bent bij een winkel";
    document.getElementById("button1").onclick = function() {winkel1()};
    document.getElementById("button2").onclick = function() {level5b()};
    document.getElementById("button3").onclick = function() {level2b()};
    document.getElementById("button1").innerHTML = "banaan kopen";
    document.getElementById("button2").innerHTML = "vliegticket kopen";
    document.getElementById("button3").innerHTML = "terug naar de stad";
}

function level3c(){

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
    if (munt == true
        ){
     einde2();
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
    if (munt == true
        ){
     ticket1();
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