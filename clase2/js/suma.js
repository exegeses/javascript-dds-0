/*
    pedir al usuario que ingrese un número
            a ese numero guardarlo en una variable

    pedir al usuario que ingrese otro número
            a ese numero guardarlo en otra variable

    generar la suma de los valores de las variables

    mostrar ese resultado
*/
let numero1 = prompt('Ingresa un número');
let numero2 = prompt('Ingresa otro número');
let resultado = parseFloat( numero1 ) + parseFloat( numero2 );
document.write( resultado );

