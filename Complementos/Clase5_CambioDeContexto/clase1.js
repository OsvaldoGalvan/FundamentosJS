const osvaldo = {
    nombre: 'Osvaldo',
    apellido: 'Galvan',
    edad: 38
}

const cumpleanos = persona => persona.edad++
const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})