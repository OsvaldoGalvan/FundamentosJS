function crearSaludos(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludos('che')
const saludoMexicano = crearSaludos('guey')
const saludoColombiano = crearSaludos('amigo')

saludoArgentino('Osvaldo')
saludoMexicano('Osvaldo')
saludoColombiano('Osvaldo')