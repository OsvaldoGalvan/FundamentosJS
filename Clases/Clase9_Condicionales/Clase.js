var osvaldo = {
    nombre: 'Osvaldo',
    apellido: 'Galvan',
    edad: 38,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarra: true,
    drone:false
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)

    if (persona.ingeniero === true) {
        console.log('ingeniero')
    }

    if (persona.cocinero) {
        console.log('cocinero')
    }
    else {
        console.log('No es ingeniero')
    }

    if (persona.cantante) {
        console.log('cantante')
    }

    if (persona.dj) {
        console.log('dj')
    }

    if (persona.guitarra) {
        console.log('guitarra')
    }

    if (persona.drone) {
        console.log('drone')
    }
}

function mayorDeEdad(persona) {
    console.log(`${persona.nombre} es ${persona.edad >= 18 ? 'mayor':'menor'} de edad `);
}