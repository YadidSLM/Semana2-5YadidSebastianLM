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
        tareas.innerHTML = tareas.innerHTML + '<div class="tar">' + titulo.value + '</div>' + '<br/>';
    }
});