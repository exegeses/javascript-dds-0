let sol = document.getElementById('sol');
let grados = 0; //valor inicial

function rotar()
{
    grados++; //grados = grados + 1;
    sol.style.transform = 'rotate( '+ grados +'deg )';
}

rotar();
setInterval( rotar, 50 );