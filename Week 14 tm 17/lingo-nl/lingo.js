var vakjes;

const row1 = document.getElementById("row1");

for(vakjes = 0; vakjes < 25; vakjes++){
    var newDiv = document.createElement("input");
    row1.appendChild(newDiv);
    newDiv.style.fontFamily = 'Lato', 'sans-serif';
    newDiv.style.marginTop = 4;
    newDiv.style.verticalAlign = top;
    newDiv.style.height = '1.25em';
    newDiv.style.width = '1.25em';
    newDiv.style.textAlign = 'center';
    newDiv.style.fontSize = '3.5em';
    newDiv.style.display = "inline-block";
    newDiv.id += 'vakje'+ vakjes;
    newDiv.style.background = "white";
}



var woord = words[Math.floor(Math.random() * words.length)];



var currentRow = 1;

setFirstLetterOnBord();


function setFirstLetterOnBord(){
for (var i = 0; i < woord.length; i++) {
woord[4]
document.getElementById('vakje0').value = woord[i].toUpperCase();
}
currentRow++;
}

console.log(woord);

if(woord.length < 5){
    alert ("het woord moet 5 letters zijn")
}












function checkword(){
    raadword = document.getElementById("raadword");
    checkwoord = document.getElementById("checkwoord");
        console.log(raadword);
        console.log(checkwoord);
        for (i = 0; i < random.length; i++) {
            if(checkWoord[i] == random[i]) {
                document.getElementById("vakje_" + (i+1)).innerHTML = random[i];
                document.getElementById("vakje_" + (i+1)).style.backgroundColor = "green";
                raadWoord[i] = "*";
            } else if (raadWoord.indexOf(checkWoord[i])>-1) {
                document.getElementById("vakje_" + (i+1)).innerHTML = checkWoord[i];
                document.getElementById("vakje_" + (i+1)).style.backgroundColor = "yellow";
            } else {
                document.getElementById("vakje_" + (i+1)).innerHTML = checkWoord[i];
                document.getElementById("vakje_" + (i+1)).style.backgroundColor = "red";
            }
        }
    }