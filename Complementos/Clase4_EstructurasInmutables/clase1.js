const osvaldo = {
    nombre: 'Osvaldo',
    apellido: 'Galvan',
    edad: 38
}

const jorge = {
    nombre: 'jorge',
    apellido: 'jorge',
    edad: 38
}


function saludar(saludo = 'Hola') {
    console.log(`${saludo} mi nombre es ${this.nombre}`)
}

const saludarAOsvaldo = saludar.bind(osvaldo,'wey')
const saludarAJorga = saludar.bind(jorge,'Que loco')

setTimeout(saludar.bind(osvaldo, 'Hola che'), 300)

saludar.call(osvaldo, 'Hola mano')
saludar.apply(osvaldo, ['Hola mano con parámetro'])