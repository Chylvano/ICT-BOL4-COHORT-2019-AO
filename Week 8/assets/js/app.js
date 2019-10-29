function vraag(){
    
    var menudrinken = prompt("Wat wilt u bestellen?")

    if(menudrinken == 'fris'){
        var fris = prompt('Hoeveel fris wilt u bestellen? 2 euro')
            document.write("kosten fris $" ,fris*prijs+ "<br>")
            if (meer == "1")
                var menudrinken = prompt("Dit is het menu van drinken. \n fris \n bier \n wijn\n wat wilt u bestellen")
    }
}

vraag();
