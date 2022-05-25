const canvas = document.getElementById("mi-canvas");
const ctx = canvas.getContext("2d");

const color = document.getElementById("color");
const relleno = document.getElementById("relleno");
const nPicos = document.getElementById("nPicos");
const picudez = document.getElementById("picudez");

let longitudLinea = picudez.value;
let anguloGrados = 360 / nPicos.value;
let anguloRadianes = (anguloGrados * Math.PI) / 180;
let despX = 100 * Math.cos(anguloRadianes);
let despY = 100 * Math.sin(anguloRadianes);


function dibujar()
{
    ctx.beginPath();

    ctx.moveTo(150, 150);
    ctx.lineTo(150 + despX, 150 + despY);
    ctx.stroke();
    
    ctx.closePath();
}

nPicos.addEventListener("focusout", ()=>{
    console.log(nPicos.value);
    longitudLinea = picudez.value;
    anguloGrados = 360 / nPicos.value;
    anguloRadianes = (anguloGrados * Math.PI) / 180;
    despX = 100 * Math.cos(anguloRadianes);
    despY = 100 * Math.sin(anguloRadianes);
    dibujar();
});
picudez.addEventListener("change", ()=>{
    console.log(picudez.value);
    longitudLinea = picudez.value;
    anguloGrados = 360 / nPicos.value;
    anguloRadianes = (anguloGrados * Math.PI) / 180;
    despX = 100 * Math.cos(anguloRadianes);
    despY = 100 * Math.sin(anguloRadianes);
    dibujar();
});
