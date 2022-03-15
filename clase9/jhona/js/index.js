let fotos=[
    '01','02','03','04','05','06','07','08'
];
let contenedornovedades=document.querySelector('.contenedornovedades')
let cantidadfotos=fotos.length
contenido=""
for (let index = 0; index < cantidadfotos; index++) {
    contenido=contenido+'<article><img src="img/'+fotos[index]+'.jpg"><h2>Obras completas H.P. Lovecraft</h2><a class="ar" href="">Ver mas</a></article>'
   
}
contenedornovedades.innerHTML=contenido