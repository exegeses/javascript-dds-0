/*let x = document.getElementById('contenedor');
x.innerText = 'centenido donde ya quiera';*/
// array con nombres de las imágenes
let fotos = [
                'anto', 'bruno', 'dani', 'gery',
                'killq', 'lu', 'maiten', 'maqui',
                'marce', 'marco', 'marco2', 'solsteiz'
            ];
let cantidad = fotos.length;

//ubicar elemento dentro del DOM
let contenedor = document.querySelector('#contenedor');

let contenido = '';
for( let i = 0; i < cantidad; i++ )
    {
        //console.log(contenido);
        contenido = contenido + '<article><img src="fotos/'+fotos[i]+'.png"></article>';
    }

contenedor.innerHTML = contenido;