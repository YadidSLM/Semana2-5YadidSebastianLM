const click1 = document.getElementById("uno");
const click2 = document.getElementById("dos");
var tiempo1;
var tiempo2;
var duracion;
fecha = new Date();
console.log(fecha);

click1.addEventListener("click", (evento) =>{
    tiempo1 = fecha.getTime();
    console.log(fecha.getTime());
})

click2.addEventListener("click", (evento) =>{
    tiempo2 = fecha.getTime();
    console.log(fecha.getTime());
    duracion = tiempo2 - tiempo1;
    console.log('duracion:' + duracion);
})
