const iniciar = document.getElementById("iniciar");
const parar = document.getElementById("parar");
const registro = document.getElementById("registro");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
//Toma como referencia el index.html
const audio  = new Audio("./statics/Audio/despertar.mp3");
//==================== Del tiempo indicado a cero ======================
let tempo;
let tempoS;
let tempoM;
let seg = segundos.value;
let min = minutos.value;
let passedS = 0;
let passedM = 0;
let pase = 0;
let aceptar;

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
                audio.volume = 0.1;
                audio.play();
                audio.loop = true;
                aceptar = confirm("Kikiriki ha terminado el tiempo");
                if(aceptar == false)
                {
                    audio.volume = 0.1;
                    audio.play();
                    audio.loop = true;
                }
                else
                {
                    audio.loop = false;
                }
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
    if(seg == 0 && min == 0)
    {
        aceptar = confirm("Kikiriki ha terminado el tiempo");
        if(aceptar == false)
        {
            audio.volume = 0.1;
            audio.play();
            audio.loop = true;
        }
        else
        {
            audio.loop = false;
        }
    }
});