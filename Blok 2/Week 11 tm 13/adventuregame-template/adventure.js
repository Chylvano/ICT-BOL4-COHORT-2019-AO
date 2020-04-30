document.getElementById("title").innerHTML = "Welkom bij mijn game!";
document.getElementById("button1").onclick = function() {startspel()};
document.getElementById("button1").innerHTML = "start";
document.getElementById("description").innerHTML = "Klik op start om te beginnen";
document.getElementById("button2").style.display = "none";
document.getElementById("button3").style.display = "none";
document.getElementById("inventoryItem").style.display = "none";
document.body.style.backgroundImage = "url('img/start.jpg')";
var munt = false
var ticket = false
var kist = false
document.getElementById("image").style.display = "none";

function intro(){
document.getElementById("title").innerHTML = "Welkom bij mijn game!";
document.getElementById("button1").onclick = function() {startspel()};
document.getElementById("button1").innerHTML = "start";
document.getElementById("description").innerHTML = "Klik op start om te beginnen";
document.getElementById("button2").style.display = "none";
document.getElementById("button3").style.display = "none";
document.getElementById("inventoryItem").style.display = "none";
document.body.style.backgroundImage = "url('img/start.jpg')";
var munt = false
var ticket = false
var kist = false
document.getElementById("image").style.display = "none";
}

intro();

function startspel(){
    document.getElementById("title").innerHTML = "woestijn";
    document.getElementById("description").innerHTML = "Je bent in de woestijn wakker geworden zonder spullen wat ga je zoeken?";
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("button3").style.display = "inline-block";
    document.getElementById("button1").onclick = function() {oase()};
    document.getElementById("button2").onclick = function() {einde()};
    document.getElementById("button3").onclick = function() {eindemensen()};
    document.getElementById("button1").innerHTML = "zoeken naar water";
    document.getElementById("button2").innerHTML = "zoeken naar een stad";
    document.getElementById("button3").innerHTML = "zoeken naar mensen";
    document.getElementById("inventoryItem").style.display = "none";
    document.body.style.backgroundImage = "url('img/woestijn.jpg')";
}
function oase(){
    document.body.style.backgroundImage = "url('img/oase.jpg')";
    document.getElementById("title").innerHTML = "oase";
    document.getElementById("description").innerHTML = "Je hebt de oase bereikt";
    document.getElementById("button1").onclick = function() {drink()};
    document.getElementById("button2").onclick = function() {zoekenspullen()};
    document.getElementById("button3").onclick = function() {einde()};
    document.getElementById("button1").innerHTML = "water drinken";
    document.getElementById("button2").innerHTML = "zoeken voor spullen";
    document.getElementById("button3").innerHTML = "naar de stad gaan";
}

function drink(){
    document.getElementById("description").innerHTML = "Je hebt water gedronken nu kan je naar de stad lopen";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button1").innerHTML = "naar de stad";
    document.getElementById("button1").onclick = function() {stad()};
}

function zoekenspullen(){
    document.getElementById("description").innerHTML = "Je hebt een kist gevonden.<br> Wil je hem meenemen?";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button1").innerHTML = "ja";
    document.getElementById("button2").innerHTML = "nee";
    document.getElementById("button1").onclick = function() {geeftkist()};
    document.getElementById("button2").onclick = function() {geenkist()};
    document.getElementById("button1").style.display = "inline-block";
    document.getElementById("button2").style.display = "inline-block";
}



function geeftkist(){
 document.getElementById("description").innerHTML = "Wat wil je nu doen?";
 kist === true
 document.getElementById("button1").innerHTML = "water drinken";
 document.getElementById("button2").innerHTML = "naar de stad gaan";
 document.getElementById("button1").onclick = function() {eindekist()};
 document.getElementById("button2").onclick = function() {eindekist()};
 document.getElementById("button3").style.display = "none";
 document.getElementById("inventoryItem").src = "img/kist.png";
 document.getElementById("inventoryItem").style.display = "inline-block";
}

function geenkist(){
 kist === false
 document.getElementById("description").innerHTML = "Wat wil je nu doen?";
 document.getElementById("button1").innerHTML = "water drinken";
 document.getElementById("button2").innerHTML = "naar de stad gaan";
 document.getElementById("button1").onclick = function() {drink()};
 document.getElementById("button2").onclick = function() {einde()};
 document.getElementById("button3").style.display = "none";
}

function eindekist(){
    document.body.style.backgroundImage = "url('img/einde1.jpg')";
    document.getElementById("title").innerHTML = "Helaas";
    document.getElementById("button1").onclick = function() {startspel()};
    document.getElementById("description").innerHTML = "Je kwam mensen tegen en ze hebben je beroofd en je kist gestolen";
    document.getElementById("button1").innerHTML = "Opnieuw beginnen";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function einde(){
    document.body.style.backgroundImage = "url('img/einde1.jpg')";
    document.getElementById("title").innerHTML = "Helaas";
    document.getElementById("button1").onclick = function() {startspel()};
    document.getElementById("description").innerHTML = "Je bent dood gegaan omdat je geen water had";
    document.getElementById("button1").innerHTML = "Opnieuw beginnen";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function stad(){
    document.body.style.backgroundImage = "url('img/stad.jpg')";
    document.getElementById("title").innerHTML = "stad";
    document.getElementById("description").innerHTML = "Je bent in de stad";
    document.getElementById("button1").onclick = function() {checkmunt()};
    document.getElementById("button2").onclick = function() {winkel()};
    document.getElementById("button3").onclick = function() {vliegveld()};
    document.getElementById("button1").style.display = "inline-block";
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("button3").style.display = "inline-block";
    document.getElementById("button1").innerHTML = "de stad verkennen";
    document.getElementById("button2").innerHTML = "naar een winkel gaan";
    document.getElementById("button3").innerHTML = "naar het vliegveld gaan";

}

function eindemensen(){
    document.body.style.backgroundImage = "url('img/einde1.jpg')";
    document.getElementById("title").innerHTML = "Helaas";
    document.getElementById("button1").onclick = function() {startspel()};
    document.getElementById("description").innerHTML = "Je hebt niemand kunnen vinden en bent dood gegaan omdat je geen water had";
    document.getElementById("button1").innerHTML = "Opnieuw beginnen";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";

}

function checkmunt(){
    if (munt == false){
        level3a();
    } else {
        algedaan(); 
    }
}

   function algedaan(){
    document.getElementById("title").innerHTML = "stad";
    document.getElementById("button1").onclick = function() {stad()};
    document.getElementById("description").innerHTML = "Je hebt de stad al verkent";
    document.getElementById("button1").innerHTML = "verder";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
   }


function level3a(){
    document.getElementById("title").innerHTML = "stad";
    document.getElementById("inventoryItem").style.display = "inline-block";
    document.getElementById("description").innerHTML = "Je hebt een munt gevonden";
    document.getElementById("button1").innerHTML = "Terug naar de stad";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button1").onclick = function() {stad()};
    munt = true;
    document.getElementById("inventoryItem").src = "img/munt.png";
}

function winkel(){
    document.getElementById("title").innerHTML = "winkel";
    document.body.style.backgroundImage = "url('img/winkel.jpg')";
    document.getElementById("description").innerHTML = "Je bent bij een winkel";
    document.getElementById("button1").onclick = function() {level5b()};
    document.getElementById("button2").onclick = function() {stad()};
    document.getElementById("button1").innerHTML = "vliegticket kopen";
    document.getElementById("button2").innerHTML = "terug naar de stad";
    document.getElementById("button3").style.display = "none";
}

function vliegveld(){
    document.body.style.backgroundImage = "url('img/airport.jpg')";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button1").innerHTML = "naar huis gaan";
    document.getElementById("button2").innerHTML = "terug naar de stad";
    document.getElementById("button1").onclick = function() {levelx()};
    document.getElementById("button2").onclick = function() {stad()};
   }

   function levelx(){
    if (ticket == true
        ){
     win();
    } else {
     levelv1();
      }
   }

function levelv1(){
    document.getElementById("button1").innerHTML = "Terug naar de stad";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("title").innerHTML = "Helaas";
    document.getElementById("description").innerHTML = "Je hebt geen ticket dus je kan niet het vliegtuig in";
    document.getElementById("button1").onclick = function() {stad()};  
}

function geengeld(){
    document.getElementById("title").innerHTML = "Helaas";
    document.getElementById("button1").onclick = function() {stad()};
    document.getElementById("description").innerHTML = "Je hebt niet genoeg geld";
    document.getElementById("button1").innerHTML = "terug naar de stad";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}

function level5b(){
    if (munt == true
        ){
     levelsk();
    } else {
     geengeld();
      }
   }

   function levelsk(){
    if (ticket == true
        ){
     algedaan2();
    } else {
     ticket1();
      }
   }

   function algedaan2(){
    document.getElementById("title").innerHTML = "winkel";
    document.getElementById("button1").onclick = function() {stad()};
    document.getElementById("description").innerHTML = "Je hebt al een ticket gekocht";
    document.getElementById("button1").innerHTML = "verder";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
   }

function ticket1(){
    document.getElementById("title").innerHTML = "Gekocht";
    document.getElementById("button1").onclick = function() {stad()};
    document.getElementById("description").innerHTML = "Je hebt een vliegticket gekocht";
    document.getElementById("button1").innerHTML = "terug naar de stad";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").src = "img/ticket.png";
    ticket = true;
}

function win(){
    document.getElementById("title").innerHTML = "Gefeliciteerd je hebt gewonnen";
    document.getElementById("button1").onclick = function() {intro()};
    document.getElementById("button1").innerHTML = "opnieuw beginnen";
    document.getElementById("description").innerHTML = "Klik op 'opnieuw beginnen' als je opnieuw wilt beginnen";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.body.style.backgroundImage = "url('img/geinde.jpg')";
    document.getElementById("inventoryItem").style.display = "none";
}
