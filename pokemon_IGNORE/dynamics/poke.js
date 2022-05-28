const mas = document.getElementById("mas");
const form = document.getElementById("form");
form.addEventListener("click", () =>{
    console.log(form.innerHTML);
    form.innerHTML += '<label><h1>Agregar un Pokemón</h1></label>' + '<label>Nombre</label> + <input type="text">' + '<br/><br/>';
    form.innerHTML += '<label>Altura</label>' + '<input type="text">' + '<br/><br/>';
    form.innerHTML += '<label>Peso</label>' + '<input type="text">' + '<br/><br/>';
    form.innerHTML += '<label>Experiencia base</label>' + '<input type="text">' + '<button type="submit">Enviar</button>';
});