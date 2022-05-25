const iniciar = document.getElementById("iniciar");
const parar = document.getElementById("parar");
const registro = document.getElementById("registro");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

let tempoS;
let tempoM;
let seg = 0;
let min = 0;

iniciar.addEventListener("click", (evento) =>{
    tempoM = setInterval(()=>{
        min++;
        registro.innerHTML += "<p>" + min + " " + ":" + " "+"</p>";
        if(min == 59)
        {
            min = 0;
        }
    }, minutos)
    tempoS = setInterval(()=>{
        seg++;
        console.log(segundos);
        registro.innerHTML += "<p>" + seg +"</p>";
        if(seg == 59)
        {
            seg = 0;
        }
    }, segundos)
});
parar.addEventListener("click", (evento)=>{
    clearInterval(tempoS);
});