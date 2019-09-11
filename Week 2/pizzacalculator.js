var smallpizza = prompt ("Hoeveel small pizza's wilt u?","Aantal"); //vraagt aantal small pizza's
var smallprijs = 5.99; //variable instellen voor smallprijs
document.write("Totaal small pizza's: $", smallpizza*smallprijs,"<br/>"); //rekent prijs totaal small pizza's uit

var mediumpizza = prompt ("Hoeveel medium pizza's wilt u?","Aantal"); //vraagt aantal medium pizza's
var mediumprijs = 6.99; //variable instellen voor mediumprijs
document.write("Totaal medium pizza's: $", mediumpizza*mediumprijs,"<br/>"); //rekent prijs totaal medium pizza's uit

var largepizza = prompt ("Hoeveel large pizza's wilt u?","Aantal"); //vraagt aantal large pizza's
var largeprijs = 7.99; //variable instellen voor largeprijs
document.write("Totaal large pizza's: $", largepizza*largeprijs,"<br/>"); //rekent prijs totaal large pizza's uit

var totaalsmall = smallpizza*smallprijs;
var totaalmedium = mediumpizza*mediumprijs;
var totaallarge = largepizza*largeprijs
//variable voor elke totaalprijs

document.write("Eindtotaal: $",totaalsmall+totaalmedium+totaallarge); 
//totaal prijs word uitgerekend