const iniciar = document.getElementById("iniciar");
const parar = document.getElementById("parar");
const registro = document.getElementById("registro");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
//==================== Del tiempo indicado a cero (Funciona los segundos cuando los minutos son 0)======================
let tempo;
let tempoS;
let tempoM;
let seg = segundos.value;
let min = minutos.value;
let passedS = 0;
let passedM = 0;
let pase = 0;

iniciar.addEventListener("click", (evento) =>{
    if(minutos.value != "" && segundos.value != "" && pase < 2 && minutos.value >= 0 && segundos.value >= 0)
    {
        pase++;
        min = minutos.value;
        seg = segundos.value;
        tempoS = setInterval(()=>{
            if(seg > 0)
                seg--;
            console.log(min + ":" + seg);
            if(seg == 0 && min == 0)
            {
                seg = 0;
                clearInterval(tempoS);
                clearInterval(tempoM);
                alert("Ring ring ha terminado el tiempo");
            }
            else if(seg == 0)
            {
                seg = 59;
                min--;
            }
            registro.innerHTML = " ";
            registro.innerHTML += "<p>" + min + " " + ":" + " "+ seg + "</p>";
        }, 1000)
    }
    else
    {
        segundos.value = 0;
        minutos.value = 0;
    }
    
});
parar.addEventListener("click", (evento)=>{
    clearInterval(tempoS);
    clearInterval(tempoM);

});

//====================== De cero al número indicado ==============================

// let tempo;
// let tempoS;
// let tempoM;
// let seg = 0;
// let min = 0;
// let passedS = 0;
// let passedM = 0;

// iniciar.addEventListener("click", (evento) =>{
//     if(minutos.value != "" && segundos.value != "")
//     {
//         tempoS = setInterval(()=>{
//             seg++;
//             console.log(segundos);
//             if(seg == 59)
//             {
//                 seg = 0;
//                 passedS++;
//                 if(passedS == segundos.value)
//                 {
//                     clearInterval(tempoS);
//                     clearInterval(tempoM);
//                 }
//             }
//         }, 1000)
//         tempoM = setInterval(()=>{
//             min++;
//             if(min == 59)
//             {
//                 min = 0;
//             }
//         }, 60000)
//         tempo = setInterval(()=>{
//             registro.innerHTML += "<p>" + min + " " + ":" + " "+ seg + "</p>";
//             registro.innerHTML = " ";
//             registro.innerHTML += "<p>" + min + " " + ":" + " "+ seg + "</p>";

//         }, 10000)
//     }
    
// });
// parar.addEventListener("click", (evento)=>{
//     clearInterval(tempoS);
//     clearInterval(tempoM);

// });