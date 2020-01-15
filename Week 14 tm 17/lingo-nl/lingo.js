var vakjes;
var attempts = 0
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



console.log(woord)


var textArray = woord.split("");
document.getElementById("vakje0").value = textArray[0];
console.log(textArray) 

if(guess.length == 5){
   alert ("het woord moet 5 letters zijn")
}

function checkword(){
    var guess = document.getElementById("guess");
    var guess = guess.value.split('');
        for (i = 0; i < woord.length; i++) {
            if(woord[i] == guess[i]) {
                document.getElementById("vakje" + i).value = guess[i];
                document.getElementById("vakje" + i).style.backgroundColor = "green";
                guess[i] = "*";
            } else if (woord.indexOf(guess[i])>-1) {
                document.getElementById("vakje" + i).value = guess[i];
                document.getElementById("vakje" + i).style.backgroundColor = "yellow";
            } else {
                document.getElementById("vakje" + i).value = guess[i];
                document.getElementById("vakje" + i).style.backgroundColor = "red";
            }
            if (attempts == 4) {
                alert("Helaas je hebt het word niet geraden.")
            }
        }
    }                     

 