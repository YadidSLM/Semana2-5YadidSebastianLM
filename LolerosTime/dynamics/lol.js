class tirador
{
    //propiedades generales del tirador
    constructor(nombre, estadisticas, habilidades)
    {
        this.nombre = nombre;
        this.estadisticas = estadisticas;
        this.habilidades = habilidades;
    }
    //Las cosas que puede hacer un tirador
    ataque()
    {
        console.log(this.nombre + 'tiene un ataque de 50% por sus habilidades' + this.habilidades);
    }
}
const gabi = new tirador('gabi', '80% ganado', 'Corta distancia rápida');