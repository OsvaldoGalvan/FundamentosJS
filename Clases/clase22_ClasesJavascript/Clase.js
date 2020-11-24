
const PERSONA_ALTA = 1.8

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        // debugger
        return this.altura >= PERSONA_ALTA
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre,apellido,altura)
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolladore`)
    }
}





// var sacha = new Persona('Osvaldo', 'Galvan', 1.72)
// var erika = new Persona('Erika', 'Lopez', 1.65)
// var arturo = new Persona('Arturo', 'Perez', 1.89)

var sacha = new Persona('Osvaldo', 'Galvan', 1.72)

// console.log(sacha.soyAlto())
// console.log(erika.soyAlto())
// console.log(arturo.soyAlto())

