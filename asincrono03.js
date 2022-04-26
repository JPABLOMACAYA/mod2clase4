
function contarDeA_n(contar_de_a, contar_hasta) {
    
    var conteoActual = 1;

    console.log(conteoActual);                           //Recordar que ejercicio pide imprimir desde el número 1

    while (conteoActual < (contar_hasta - contar_de_a) ) {
        conteoActual = conteoActual + contar_de_a;
        console.log(conteoActual);
    } 
    
    console.log(contar_hasta);                          //Recordar que ejercicio pide imprimir hasta el número "contar_hasta". 

    return console.log("El conteo ha finalizado");      
    
}

var conteoSolicitado = contarDeA_n(3,28);      // El requisito de finalizar con n= "contar_hasta", tendrá el inconveniente de que no siempre la distancia entre el penúltimo número y el último sea de n="contar_de_a" para otros argumentos.