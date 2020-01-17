var vakjes;
var attempts = 0
const row1 = document.getElementById("row1");

for(row = 0; row < 5; row++){
    for(col = 0; col < 5; col++){
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
    newDiv.id += 'vakje'+ row + col;
    newDiv.style.background = "white";
    }
}

var woord = words[Math.floor(Math.random() * words.length)];

var currentRow = 1;

console.log(woord)

var wordArray = woord.split("");
document.getElementById("vakje00").value = wordArray[0];
document.getElementById("vakje00").style.backgroundColor = "green";
console.log(wordArray) 

function green(){
    document.getElementById("vakje00").style.backgroundColor = "green";
}

function checkword(){
    if(woord == guess) {
        alert("gefeliciteerd je hebt het woord geraden!")
    }
    textArray = woord.split('');
    var guess = document.getElementById("guess");
    var guess = guess.value.split('');
    console.log(guess)

        for (i = 0; i < 5; i++) {
            document.getElementById("vakje" + attempts + i).value = guess[i];
        }
        
        for (i = 0; i < 5; i++) {
            if(textArray[i] == guess[i]) {
                document.getElementById("vakje" + attempts + i).style.backgroundColor = "yellow";
                document.getElementById("vakje00").style.backgroundColor = "green";
                guess[i] = "-";
                textArray[i] = "*";
            } 
        
        for (i = 0; i < 5; i++) {    
            if (guess[i] != "-") {
            if (textArray.indexOf(guess[i])>0) {
                document.getElementById("vakje" + attempts + i).style.backgroundColor = "green";

                var pos = textArray.indexOf(guess[i]);
                guess[pos] = "/";
                textArray[i] = "*";
            } else {
                document.getElementById("vakje" + attempts + i).style.backgroundColor = "red";
            }
        }
            if (attempts == 4) {
                alert("Helaas je hebt het woord niet geraden.")
            }
        }
        attempts++
    }                     
}

console.log(checkword)