const canvas = document.getElementById("mi-canvas");
const ctx = canvas.getContext("2d");

const color = document.getElementById("color");
const relleno = document.getElementById("relleno");
const nPicos = document.getElementById("nPicos");
const picudez = document.getElementById("picudez");

// let longitudLinea = 50;
// // let anguloGrados = 360 / nPicos.value;
// let anguloGrados = 72;
// let anguloRadianes = (anguloGrados * Math.PI) / 180;
// let despX = longitudLinea * Math.cos(anguloRadianes);
// let despY = longitudLinea * Math.sin(anguloRadianes);

let longitudLinea = 50;
//let anguloGrados = 360 / nPicos.value;
let anguloGrados = nPicos.value;
let anguloRadianes = (anguloGrados * Math.PI) / 180;
let despX = longitudLinea * Math.cos(anguloRadianes);
let despY = longitudLinea * Math.sin(anguloRadianes);

// function valInicial()
// {
//     let longitudLinea = 50;
//     // let anguloGrados = 360 / nPicos.value;
//     let anguloGrados = 72;
//     let anguloRadianes = (anguloGrados * Math.PI) / 180;
//     let despX = longitudLinea * Math.cos(anguloRadianes);
//     let despY = longitudLinea * Math.sin(anguloRadianes);    
// }
// function dibujar()
// {
//     ctx.beginPath();

//     ctx.moveTo(150, 150);
//     ctx.lineTo(150 + despX, 150 + despY);

//     anguloGrados = 72 * 2;
//     anguloRadianes = (anguloGrados * Math.PI) / 180;
//     despX = longitudLinea * Math.cos(anguloRadianes);
//     despY = longitudLinea * Math.sin(anguloRadianes);
//     ctx.lineTo(150 + despX, 150 + despY);

//     anguloGrados = 72 * 3;
//     anguloRadianes = (anguloGrados * Math.PI) / 180;
//     despX = longitudLinea * Math.cos(anguloRadianes);
//     despY = longitudLinea * Math.sin(anguloRadianes);
//     ctx.lineTo(150 + despX, 150 + despY);

//     anguloGrados = 72 * 4;
//     anguloRadianes = (anguloGrados * Math.PI) / 180;
//     despX = longitudLinea * Math.cos(anguloRadianes);
//     despY = longitudLinea * Math.sin(anguloRadianes);
//     ctx.lineTo(150 + despX, 150 + despY);

//     anguloGrados = 72 * 5;
//     anguloRadianes = (anguloGrados * Math.PI) / 180;
//     despX = longitudLinea * Math.cos(anguloRadianes);
//     despY = longitudLinea * Math.sin(anguloRadianes);
//     ctx.lineTo(150 + despX, 150 + despY);
//     ctx.stroke();
    
//     ctx.closePath();
// }
// dibujar();

function dibujar()
{
    ctx.beginPath();

    ctx.moveTo(150, 150);
    ctx.lineTo(150 + despX, 150 + despY);
    ctx.stroke();
    
    ctx.closePath();
}

nPicos.addEventListener("changet", ()=>{
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
