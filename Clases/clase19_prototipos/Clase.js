
const personaAlta = 1.8

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    this.altura >= personaAlta ?
        console.log(`${this.nombre} es alto`) :
        console.log(`${this.nombre} es bajo`)
}


var sacha = new Persona('Osvaldo', 'Galvan', 1.7)
var erika = new Persona('Erika', 'Lopez', 1.8)
var arturo = new Persona('Arturo', 'Perez', 1.5)