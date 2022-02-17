/*
    pedirle al usuario que ingrese un número
        guardar ese número en una variable

    si el número es menor que 100
            mostrar un texto que diga: "Es menor"

    si no lo es
            mostrar un texto que diga: "NO es menor"
 */

//let numero = prompt('Ingrese un número');
let numero = parseInt( prompt('ingrese un número') );

if ( numero < 100 ) {
    document.write("el numero es menor que 100");
}else{
    document.write("el numero NO es menor que 100");
}

