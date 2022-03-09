// declaramos array con datos
let italianos = [
                'Masseratti', 'Pagani', 'Lamborghini', 'Ferrari',
                'Alfa Romeo', 'Alpine', 'Abarth', 'Bugatti',
                'Fiat', 'Lancia', 'Fornasari'
                ];

//document.write( italianos[0] );
let n = 0;
let cantidad = italianos.length;

//abrimos elemento ul
document.write('<ul>');
while ( n < cantidad )
    {
        document.write( '<li>' + italianos[ n ] + '</li>');
        n++;
    }
//cerramos elemento ul
document.write('</ul>');