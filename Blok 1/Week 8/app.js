const frisprijs = 2.00;
const bierprijs = 1.50;
const wijnprijs = 4.00;
const bitterballenprijs = 0.20;
var totaalFris = 0
var totaalBier = 0
var totaalWijn = 0

alert ("Welkom bij folenka")

alert("Type stop om naar de volgende bestelling te gaan.")

function keuze(){
    while(keuze = true){
    var keuze = prompt("Type 1 om uw bestelling te starten met dranken of type 2 om uw bestelling te starten met bitterballen");
        if(keuze == 1){
        drank = parseInt(prompt("Hoeveel aantal frisdranken wilt u bestellen?"))
        totaalFris = totaalFris+drank;

        drank2 = parseInt(prompt("Hoeveel bier wilt u bestellen?"))
        totaalBier = totaalBier+drank2;

        drank3 = parseInt(prompt("Hoeveel wijn wilt u bestellen?"))
        totaalWijn = totaalWijn+drank3;

        }
        else if(keuze == 2){
           var bitterballen = prompt("Hoeveel bitterballen wilt u bestellen.");

        }
        else if( keuze = "STOP"){
           keuze = false
            document.write("Aantal frisdrank: " + totaalFris +"<br>"+ "Prijs frisdrank:  $" + frisprijs*totaalFris + "<br>"+ "<br>");
            document.write("Aantal bier: " + totaalBier + "<br>"+ "Prijs bier:  $" + bierprijs*totaalBier + "<br>" + "<br>");
            document.write("Aantal wijn: " + totaalWijn + "<br>"+"Prijs wijn:  $" + wijnprijs*totaalWijn  +"<br>" +"<br>");
            document.write("Aantal bitterballen: " + bitterballen + "<br>"+"Prijs bitterballen:  $" + bitterballenprijs*bitterballen  +"<br>"+"<br>");
            return;
        }
    }
}

keuze();