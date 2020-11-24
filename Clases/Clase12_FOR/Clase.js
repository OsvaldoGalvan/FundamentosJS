// const numMax = 10
// const numMin = 1

// const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin)
// // redondeamos el decimal que nos devuelve envolviendo todo en Math.round

// numRandom() // 8
// numRandom() // 5
// numRandom() // 1
// numRandom() // 10


/*

Mis principios de programacion:
1. Un programador divide problemas grandes en problemas chiquitos
2. Cada 4 lineas de codigo comento mi codigo
*/

//Imprimiendo algo en la consola
console.log("inicializando archivo");

/*Declaración de objetos
=========================================*/

//Creando el objeto persona
var osvaldo = {
	nombre: "osvaldo",
	apellido: "Páez",
	edad: 18,
	peso: 99
}

/*Declaración de variables
=========================================*/
const DIAS_DEL_ANIO = 365;
const INCREMENTO_PESO = 0.211 //0.200 gramos


/*Declaración de funciones
=========================================*/

/**/

//Funcion donde se aumenta el valor del peso del objeto persona
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
//Funcion donde se baja el valor del peso del objeto persona
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO;


function cambioPeso(persona) {

	//este codigo se ejecutara TODOS LOS DIAS DEL AÑO
	for(var i = 1; i <= DIAS_DEL_ANIO ; i++) {
		var ramdom = Math.random();
		//una variable guarda un numero aleatorio entre 0 y 1
		//este codigo se ejecutara el 25% de las veces
		if( ramdom <= 0.25) {
			//aumenta de peso
			aumentarDePeso(persona)
		}
		else if (ramdom <= 0.50 ) {
			//baja de peso
			bajarDePeso(persona)
		}

	}

}



/*Consola y consultas
=========================================*/
console.log(`Al inicio del año ${osvaldo.nombre} pesa ${osvaldo.peso} kg`)

/*Ejecución de funciones
=========================================*/
cambioPeso(osvaldo)

console.log(`Al inicio del año ${osvaldo.nombre} pesa ${osvaldo.peso.toFixed(3)} kg`)

/*
IDEAS CLAVES
-------------
=>
------------------------------*/