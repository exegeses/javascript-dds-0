// declaramos array con datos
let italianos = [
    'Masseratti', 'Pagani', 'Lamborghini', 'Ferrari',
    'Alfa Romeo', 'Alpine', 'Abarth', 'Bugatti',
    'Fiat', 'Lancia', 'Fornasari'
];
let cantidad = italianos.length;


document.write('<ul>');

//fórmula
    // for ( inicio; condicion; incremento )
for ( let n = 0; n < cantidad; n++ )
    {
        document.write( '<li>'+ italianos[n] +'</li>' );
    }

document.write('</ul>');