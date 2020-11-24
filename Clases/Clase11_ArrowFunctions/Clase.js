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

var luis = {
    nombre: 'luis',
    apellido: 'Galvan',
    edad: 15
}
const MAYORIO_DE_EDAD = 18;

const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIO_DE_EDAD
}

const esMayorDeEdadArrow =  (persona) => {
    return persona.edad >= MAYORIO_DE_EDAD
}

const esMayorDeEdadArrowUnParam =  persona => {
    return persona.edad >= MAYORIO_DE_EDAD
}

const esMayor = persona => persona.edad >= MAYORIO_DE_EDAD

const esMayorDos = ({edad}) => edad >= MAYORIO_DE_EDAD


function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDos(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDos(persona)) {
        console.log("ACCESO DENEGADO")
    }
}

const permitirAccesoArrow = persona => !esMayorDos(persona) ? console.log("ACCESO DENEGADO") : console.log("ACCESO Permitido")