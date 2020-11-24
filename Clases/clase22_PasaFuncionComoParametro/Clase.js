
const PERSONA_ALTA = 1.8

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

        if (fn) {
            fn(this.nombre, this.apellido, false)
        }
    }
    soyAlto() {
        return this.altura >= PERSONA_ALTA
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre,apellido,altura)
    }
    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        var { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrolladore`)

        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}




function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)

    if (esDev) {
        console.log(`Y además eres desarrolaldor`)
    }
}

var sacha = new Desarrollador('Osvaldo', 'Galvan', 1.72)
var erika = new Persona('Erika', 'Lopez', 1.65)
var arturo = new Persona('Arturo', 'Perez', 1.89)

sacha.saludar(responderSaludo)
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)



// console.log(sacha.soyAlto())
// console.log(erika.soyAlto())
// console.log(arturo.soyAlto())

