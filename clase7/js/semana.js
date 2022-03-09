// array con los días de la semana
let semana = new Array(
                    'Domingo', 'Lunes',
                           'Martes', 'Miércoles',
                            'Jueves', 'Viernes',
                            'Sábado'
                    );
let txt = document.querySelector('#txt');

// mostrar nombre del día de la semana
let fecha = new Date();

//ver el número del día de la semana
// tal que 0 para Domingo, 1 para Lunes
let nSemana = fecha.getDay();

txt.innerText = semana[nSemana];