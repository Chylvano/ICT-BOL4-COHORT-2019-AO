var frisprijs = 2.00;
var bierprijs = 1.50;
var wijnprijs = 4.00;
var bitterballenprijs12 = 5.00;
var bitterballenprijs24 = 7.50;

function menu(){
    var menu = prompt("Welke bestelling wilt u toevoegen? Kies 1 voor drinken en 2 voor snacks.")
    if (menu == 1){
        var hvlDrank = toevoegen();
    }
    else if(menu == 2){
        drankmenu = snackmenu();
    }  
}

function toevoegen(){
    var drank = prompt("Welke bestelling wilt u toevoegen? Kies 1 voor bier, 2 voor fris, 3 voor wijn of 'stop' om de bestelling te annuleren")
    if (drank == 1){
        var hvlDrank = prompt("Hoeveel bier wilt u toevoegen aan uw bestellingen?")
    }
    else if(drank == 2){
        hvlDrank = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
    }  
    else if(drank == 3){
        hvlDrank = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?") 
    }
}

function snackmenu(){
    var bitterballen = prompt("Hoeveel bitterballen wilt u bestellen typ 1 voor 12 stuks of 2 voor 24 stuks of 'stop' om de bestelling te annuleren")
    if (bitterballen == 1){
        var hvlbitterballen = alert("12 bitterballen zijn toegevoegd aan uw bestelling.")
    }
    else if(bitterballen == 2){
        hvlbitterballen = alert("24 bitterballen zijn toegevoegd aan uw bestelling.") 
    }
}

menu();
