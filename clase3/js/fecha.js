//ubicar elemento dentro del DOM
let txt = document.getElementById('txt');

/*
*  mostrar la fecha con formato:   17/02/2022
* */

//crear un objeto de fecha y guardarlo en una variable
let fecha = new Date();

//obtenemos el número del día del mes
let diaMes = fecha.getDate();

//obtenemos el número del mes actual
let mes = fecha.getMonth() + 1;
if ( mes < 10 ){
    mes = '0'+ mes;
}

//obtenemos el número del año
let anio = fecha.getFullYear();

//imprimimos la fecha obtenida en el txt
txt.innerText = diaMes +'/'+ mes +'/'+ anio;
