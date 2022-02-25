// ubicar elemento/s dentro del DOM
let campoN1 = document.querySelector('input[name="n1"]');
let campoN2 = document.querySelector('input[name="n2"]');
let txt = document.querySelector('#txt');

//declaramos función/es de control
function calcular( operacion )
{
    let resultado = 0; //valor inicial
    // capturamos los valores de los input
    let n1 = parseInt( campoN1.value );
    let n2 = parseInt( campoN2.value );

    if( operacion == 'sumar' ){
        resultado = sumar( n1, n2 );
    }
    else if( operacion == 'restar' ){
        resultado = restar( n1, n2 );
    }
    txt.innerText = resultado;
}
function sumar( valor1, valor2 )
{
    let resultado = valor1 + valor2;
    return resultado;
}
function restar( valor1, valor2 )
{
    let resultado = valor1 - valor2;
    return resultado;
}