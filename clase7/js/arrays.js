// declaramos variable con un array de datos
let italianos = [
                'Masseratti', 'Pagani', 'Lamborghini', 'Ferrari',
                'Alfa Romeo', 'Alpine', 'Abarth', 'Bugatti',
                'Fiat', 'Lancia', 'Fornasari'
                ];
console.log( italianos );

//document.write(italianos);
let txt = document.querySelector('#txt');
txt.innerText = italianos[1];
let cantidad = italianos.length;
console.log(cantidad);