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
const MAYORIO_DE_EDAD = 18;

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIO_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}