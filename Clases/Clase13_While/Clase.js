var osvaldo={
	nombre:'Diego',
	apellido:'Aguilera',
	peso:'55'
}
const META = osvaldo.peso + 3

const aumentarDePeso = persona => persona.peso += 0.4

const bajarDePeso = persona => persona.peso -= 0.4

var cont = 0

function simular(persona){

	while (persona.peso < META) {
		var random = Math.random()
		if (random < 0.75) {
			aumentarDePeso(persona)
		} else if (random < 1) {
			bajarDePeso(persona)
		}
		cont++
	}
}

simular(diego)
console.log(`${diego.nombre} duró ${cont} dias`)