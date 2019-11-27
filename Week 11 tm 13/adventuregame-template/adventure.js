document.getElementById("title").innerHTML = "Welkom bij mijn game!";
document.getElementById("button1").onclick = function() {startspel()};
document.getElementById("button1").innerHTML = "start";
document.getElementById("description").innerHTML = "Klik op start om te beginnen.";
document.getElementById("button2").style.display = "none";
document.getElementById("button3").style.display = "none";
document.getElementById("inventoryItem").style.display = "none";

img.src= "img/start.jpg"
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
    document.getElementById("description").innerHTML = "Je hebt de stad bereikt.<br>1 - naar een winkel gaan<br>2 - de stad verkennen<br>3 - naar het vliegveld gaan.";
    document.getElementById("button1").onclick = function() {level2a3d()};
    document.getElementById("button2").onclick = function() {level2b3e()};
    document.getElementById("button3").onclick = function() {level2c3f()};
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

function level2b3e(){
    document.getElementById("title").innerHTML = "Level 3";
    document.getElementsByClassName("myImg")[0].src = "img/stadvliegveld.gif";
}

function level2a3d(){
    document.getElementsByClassName("myImg")[0].src = "img/winkel.jpg!d";
}