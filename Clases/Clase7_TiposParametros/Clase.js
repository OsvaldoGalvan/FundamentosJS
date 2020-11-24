var personaOsvaldo = {
    nombre : 'Osvaldo',
    apellido : 'Galvan',
    edad : 38
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


function cumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}