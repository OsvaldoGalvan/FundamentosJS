


var personaOsvaldo = {
    nombre : 'Osvaldo',
    apellido : 'Galvan',
    edad : 28
}

var personaOsvaldo = {
    nombre : 'Luis',
    apellido : 'Lopez',
    edad : 30
}

function imprimirNombreEnMayusculas(persona) {
    persona.nombre = persona.nombre.toUpperCase()
    console.log(persona.nombre)
}

function imprimirNombreEnMayusculasAtributos({nombre}) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(personaOsvaldo)
imprimirNombreEnMayusculasAtributos(personaOsvaldo)
imprimirNombreEnMayusculasAtributos({nombre : 'Pepito'})




var miObjeto = {
	//propiedad: 'valor'
	direccion: 'Alguna direccion, caracas, venezuela',
	//key:	     'value' (en ingles)
	codigoPostal: '1020'
}

let objeto2 = {
	'string' : 'Hola soy una cadena de texto',
	'int': 123,
	'boolTrue': true,
	'boolFalse': false,
	'sumar': 5+5,
	'minuscula': 'TEXTO'.toLowerCase()
}

function suma({n1,n2}){
	var operacion = n1 + n2
	console.log(operacion)
}

var miSuma = {
	n1: 5,
	n2: 10
}

suma(miSuma)
