window.addEventListener("load", ()=>{
  const btnAgregar = document.getElementById("btn-agregar");
  const divAgregar = document.getElementById("contenedor-agregar");
  const btnEnviar = document.getElementById("btn-enviar");
  const buscador = document.getElementById("buscador");
  const divDatos = document.getElementById("contenedor-mostrar");
  const divResultados = document.getElementById("contenedor-resultados");
  const formNuevo = document.getElementById("form-nuevo");

  btnAgregar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "block";
    divDatos.style.display = "none";
  });

  btnEnviar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "none";
    evento.preventDefault();
    let datosForm = new FormData(formNuevo);
    fetch("dynamics/php/crear_pokemon.php", {
      method:"POST", 
      body: datosForm,
    }).then((response)=>{
      return response.json();
    }).then((datosJSON)=>{
      if(datosJSON.ok == true)
      {
        alert("Todo bien");
      } else {
        alert(datosJSON.texto);
      }
    })
  });

  fetch("dynamics/php/tipos.php")
    .then((response)=>{
      return response.json();
    })
    .then((datosJSON)=>{
      console.log(datosJSON);
      let selectTipos = document.getElementById("select-tipos");
      for(tipo of datosJSON){
        selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
      }
    });

  buscador.addEventListener("keyup", (evento)=>{
    let termino = buscador.value;
    divResultados.innerHTML = "";
    if(termino.length >= 3){
      fetch("dynamics/php/pokemon.php?q="+termino)
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          //Mostrar resultados
          console.log(datosJSON);
          for(pokemon of datosJSON)
          {
            let div = document.createElement("div");
            div.innerHTML = pokemon.pok_name;
            div.dataset.id = pokemon.pok_id;
            div.classList.add("coincidencia");
            divResultados.appendChild(div);
          }
        });
    }
  });

  divResultados.addEventListener("click", (evento)=>{
    if(evento.target.classList.contains("coincidencia")){
      let id = evento.target.dataset.id;

      fetch("dynamics/php/pokemon.php?id="+id)
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          if(datosJSON.ok == true){
            divDatos.innerHTML="<div class='dato'><strong>Nombre</strong>"+datosJSON.datos.nombre+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Altura</strong>"+datosJSON.datos.altura+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Peso</strong>"+datosJSON.datos.peso+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Tipo</strong>"+datosJSON.datos.tipo+"</div>";
            divDatos.innerHTML+="<button id='btn-eliminar'>Eliminar"+datosJSON.datos.tipo+"</button>";
            divDatos.style.display = "flex";
          }
        });
    }
  });
});