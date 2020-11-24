var osvaldo = {
    nombre: 'Osvaldo',
    apellido: 'Galván',
    edad:38
}

function esMayorDeEdad(persona) {
    if (persona.edad > 18) {
        var mensaje = 'Es mayor de edad'
    } else {
        var mensaje = 'Es menor de edad'
        var mensaje2 = 'Este es otro mensaje'
    }
    console.log(mensaje)
    console.log(mensaje2)
}

function esMayorDeEdadLet(persona) {
    let mensaje

    if (persona.edad > 18) {
        mensaje = 'Es mayor de edad'
    } else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}

function esMayorDeEdadConst(persona) {
    let mensaje
    const MaYORIA_DE_EDAD = 18

    if (persona.edad > MaYORIA_DE_EDAD) {
        mensaje = 'Es mayor de edad'
    } else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}


// esMayorDeEdad(osvaldo)
// esMayorDeEdadLet(osvaldo)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log(`Terminó el for, el valro de i es ${i}`)