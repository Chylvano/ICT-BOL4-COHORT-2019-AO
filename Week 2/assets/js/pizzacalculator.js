php
round($getal, 1);

var smallPizza = prompt ("Hoeveel small pizza's wilt u?","Aantal"); //vraagt aantal small pizza's
var smallPrijs = 5.99; //variable instellen voor smallprijs
document.write("Totaal small pizza's: $", smallPizza*smallPrijs,"<br/>"); //rekent prijs totaal small pizza's uit

var mediumPizza = prompt ("Hoeveel medium pizza's wilt u?","Aantal"); //vraagt aantal medium pizza's
var mediumPrijs = 6.99; //variable instellen voor mediumprijs
document.write("Totaal medium pizza's: $", mediumPizza*mediumPrijs,"<br/>"); //rekent prijs totaal medium pizza's uit

var largePizza = prompt ("Hoeveel large pizza's wilt u?","Aantal"); //vraagt aantal large pizza's
var largePrijs = 7.99; //variable instellen voor largeprijs
document.write("Totaal large pizza's: $", largePizza*largePrijs,"<br/>"); //rekent prijs totaal large pizza's uit

var totaalSmall = smallPizza*smallPrijs;
var totaalMedium = mediumPizza*mediumPrijs;
var totaalLarge = largePizza*largePrijs
//variable voor elke totaalprijs

document.write("Eindtotaal: $",totaalSmall+totaalMedium+totaalLarge); 
//totaal prijs word uitgerekend

<html>
<style>
div {height:50px;width:100%;}
</style>
<body>

<h1>Colors can be set using RGB values</h1>

<div style="background-color:rgb(255,0,0)"></div>
<div style="background-color:rgb(255,255,0)"></div>
<div style="background-color:rgb(0,255,0)"></div>
<div style="background-color:rgb(0,255,255)"></div>
<div style="background-color:rgb(0,0,255)"></div>

<h1 style="color:rgb(255,0,0)">Heading</h1>
<h1 style="color:rgb(255,255,0)">Heading</h1>
<h1 style="color:rgb(0,255,0)">Heading</h1>
<h1 style="color:rgb(0,255,255)">Heading</h1>
<h1 style="color:rgb(0,0,255)">Heading</h1>

</body>
</html>
