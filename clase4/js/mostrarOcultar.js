//ubicar elemento/s dentor del DOM
let caja = document.getElementById('caja');

//declaramos función/es de control
function ocultar()
{
    caja.style.display = 'none';
    //caja.style.visibility = 'hidden';
}
function mostrar()
{
    caja.style.display = 'block';
    //caja.style.visibility = 'visible';
}
/*
//solución Martín Vicente
function mostrarOcultar()
{
    if( caja.style.display == 'block' )
    //if( caja.style.visibility == 'visible' )
    {
        ocultar();
    }
    else
    {
        mostrar();
    }
}
*/
// solución Cami Lázaro
let view = true;//flag booleano
function mostrarOcultar() {
    // si hace click ocultamos
    // si vuelve a hacer click mostramos
    if ( view ) {
        ocultar();
        //caja.style.visibility ='hidden';
        //view = false;
    }
    else {
        mostrar();
        //caja.style.visibility ='visible';
        //view = true;
    }
    view = !view; // si es true, le pongo false
    // si es false, le pongo true
};
