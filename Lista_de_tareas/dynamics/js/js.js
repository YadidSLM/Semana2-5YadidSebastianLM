const titulo = document.getElementById("titulo");
const materia = document.getElementById("materia");
const anadir = document.getElementById("anadir");
const tareas = document.getElementById("tareas");


anadir.addEventListener("click", (evento) =>{
    if(titulo.value != '')
    {
        console.log(tareas.innerHTML);
        console.log(tareas.outerHTML);
        //console.log(evento.target.innerHTML);
        //tareas.innerHTML = tareas.outerHTML + tareas.innerHTML + titulo.value + ' ' + materia.value;
        //tareas.style.alignSelf = "center";
        tareas.innerHTML = tareas.innerHTML + '<br/>' + '<div class="tar">'+ '<button id="marcar">Marcar como acabada</button>' + '<button id="borrar">Eliminar</button>' + materia.value  + ': ' + titulo.value + '</div>';
    }
});
tareas.addEventListener("click", (evento) =>{
    if(evento.target.getElementById = "borrar")
    {
        evento.target.parentElement.outerHTML = '';
        console.log(evento.target.parentElement.outerHTML);
        console.log(evento.target.parentElement);
        console.log(evento.target);
        console.log(evento);
    }
    else if(evento.target.getElementById = "marca")
    {
        evento.target.style.color = "blue";
        
    }
})