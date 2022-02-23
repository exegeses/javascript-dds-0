// mostrar un reloj digital
// con formato 21:11:46

//ubicamos elemento/s dentro del DOM
let txt = document.getElementById('txt');

//declaramos función/es de control
function clock()
{
    //creamos un objeto de fecha
    let fecha = new Date();

    //obtenemos las horas
    let horas = fecha.getHours();

    //obtenemos los minutos
    let minutos = fecha.getMinutes();
    if ( minutos < 10 ){
        minutos = '0'+ minutos
    }

    //obtenemos los segundos
    let segundos = fecha.getSeconds();
    if ( segundos < 10 ){
        segundos = '0'+ segundos
    }

    //imprimimos texto dentro del span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}
//llamamos a la función reloj
clock();
//actualizamos llamado a la función
setInterval( clock, 1000 );