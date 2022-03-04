let txtHoras = document.querySelector('#txtHoras');
let txtMinutos = document.querySelector('#txtMinutos');
let txtSegundos = document.querySelector('#txtSegundos');

//valores iniciales
let horas = 0;
let minutos = 0;
let segundos = 0;

function chrono()
{
    segundos++; // incremento
    txtSegundos.innerText = dosDigitos( segundos%60 );
    minutos = Math.floor( segundos/60 );
    txtMinutos.innerText = dosDigitos( minutos%60 );
    horas = Math.floor( minutos/60 );
    txtHoras.innerText = dosDigitos( horas );
}

function dosDigitos( numero )
{
    if( numero < 10 )
    {
        numero = '0' + numero;
    }
    return numero;
}

setInterval( chrono, 1000 );