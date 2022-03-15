let articulo=document.querySelector('#articulo');
let fotos=[
    '01','02','03','04' 
];
let titulos = [
    'Complete fiction', 'Chronicles of Conan', 'Children of Húrin', 'Silmarillion'
];
let links = [
    'enlace1.html', 'enlace2.html', 'enlace3.html', 'enlace4.html'
];
let numerofotos=fotos.length;
contenido="";


for (let index = 0; index < numerofotos; index++){
   contenido = contenido +'<article>' +
                            '<img src="img/'+fotos[index]+'.jpg" alt="">' +
       '                    <h2>'+ titulos[index] +'</h2>' +
       '                    <a class="ar" href="'+links[index]+'">Ver mas</a>' +
       '                </article>';

}
articulo.innerHTML=contenido;
