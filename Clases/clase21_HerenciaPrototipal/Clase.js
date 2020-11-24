
const PERSONA_ALTA = 1.8

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

function heredaDe(PrototipoHijo, PrototipoPadre) {
    var noop = function () { } // funcion domi
    noop.prototype = PrototipoPadre.prototype
    PrototipoHijo.prototype = new noop
    PrototipoHijo.prototype.constructor = PrototipoHijo
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    // debugger
    return this.altura>= PERSONA_ALTA
}

Persona.prototype.soyAltoArrow = () => {
    // debugger
    return this.altura>= PERSONA_ALTA
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar  = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolladore` )
}



// var sacha = new Persona('Osvaldo', 'Galvan', 1.72)
// var erika = new Persona('Erika', 'Lopez', 1.65)
// var arturo = new Persona('Arturo', 'Perez', 1.89)

var sacha = new Persona('Osvaldo', 'Galvan', 1.72)

// console.log(sacha.soyAlto())
// console.log(erika.soyAlto())
// console.log(arturo.soyAlto())

