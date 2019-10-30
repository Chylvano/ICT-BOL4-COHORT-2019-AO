function toevoegen(){
    var drank = prompt("Welke bestelling wilt u toevoegen? Kies 1 voor bies, 2 voor fris, 3 voor wijn of 'stop' om de bestelling te annuleren")
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

toevoegen();