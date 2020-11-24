var personaOsvaldo = {
    nombre : 'Osvaldo',
    apellido : 'Galvan',
    edad : 28
}

var personaLuis = {
    nombre : 'Luis',
    apellido : 'Lopez',
    edad : 30
}

function imprimirNombreEdad(persona){
	var {edad} = persona;

    console.log(`Hola, me llamo ${persona.nombre} y tengo ${edad} años`)
}
// function imprimirNombreEdad({nombre,edad}) {
//     console.log(`Hola, me llamo ${nombre} y tengo ${edad} años `)
// }

imprimirNombreEdad(personaOsvaldo)
imprimirNombreEdad(personaLuis)

// function imprimirNombreEnMayusculas(persona) {
//     // var nombre  =persona.nombre
//     var {nombre} =persona
//     persona.nombre =
//     console.log(persona.nombre.toUpperCase())
// }

// function imprimirNombreEnMayusculasAtributos({nombre}) {
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }

// imprimirNombreEnMayusculas(personaOsvaldo)
// imprimirNombreEnMayusculasAtributos(personaOsvaldo)
// imprimirNombreEnMayusculasAtributos({nombre : 'Pepito'})