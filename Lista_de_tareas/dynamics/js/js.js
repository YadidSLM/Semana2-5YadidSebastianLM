const titulo = document.getElementById("titulo");
const materia = document.getElementById("materia");
const anadir = document.getElementById("anadir");
const tareas = document.getElementById("tareas");
const otraMateria = document.getElementById("otraMateria");

materia.addEventListener("click", (evento) =>{
    if(evento.target.value != "Otra")
    {
        otraMateria.style.display = "none";
    }
    else
    {
        console.log("Otra");
        otraMateria.style.display = "inline";
    }
});
anadir.addEventListener("click", (evento) =>{
    if(titulo.value != '')
    {
        console.log(tareas.innerHTML);
        console.log(tareas.outerHTML);
        if(otraMateria.style.display == "inline") // y que no se repite la materia)
        {
            materia.innerHTML += "<option value='" + otraMateria.value +"'>" + otraMateria.value + '</option>';    
            otraMateria.style.display = "none";
            materia.value = otraMateria.value;
        }
        //Creo que el div class tar es un problema para detectar los botones abajo.
        tareas.innerHTML = tareas.innerHTML + '<br/>' + '<div class="tar">'+ '<button id="marcar">Marcar como acabada</button>' + '<span> </span>' + '<button id="borrar">Eliminar</button>' + materia.value  + ': ' + titulo.value + '</div>';
    }
});
tareas.addEventListener("click", (evento) =>{
    const tar = document.getElementsByClassName("tar");
    if(evento.target.getElementsByClassName == "tar" && evento.target.getElementById == "marcar1")
    {
        tar.style.backgroundColor = "blue";
        console.log("Completada");
    }
    if(evento.target.getElementById == "borrar")
    {
        console.log("Borrar");
        evento.target.parentElement.outerHTML = '';
        // console.log(evento.target.parentElement.outerHTML);
        // console.log(evento.target.parentElement);
        // console.log(evento.target);
        // console.log(evento);
    }
});