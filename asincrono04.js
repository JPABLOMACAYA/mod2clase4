function fizzBuzz2(multiplo1,multiplo2,conteoMax) {
    
    var conteoActual = 1;

    var conteoTotal = conteoMax

    var conjuntoNumeros = []

    while (conteoActual <= conteoTotal) {
                
        if ( (conteoActual%multiplo1 == 0) && (conteoActual%multiplo2 == 0) ) {

            conjuntoNumeros [(conteoActual-1)] = "BiperBaper";

        } else if (conteoActual%multiplo1 == 0) {

            conjuntoNumeros [(conteoActual-1)] = "Biper";

        } else if (conteoActual%multiplo2 == 0) {

            conjuntoNumeros [(conteoActual-1)] = "Baper";

        } else {

            conjuntoNumeros[(conteoActual-1)]= conteoActual;

        } 

        conteoActual ++;

    } 

    console.log(conjuntoNumeros.join());

    return console.log("El programa Biper-Baper ha finalizado. FizzBuzz envía saludos.");

}

var multiplosBiperBaper = fizzBuzz2(3,7,25);
