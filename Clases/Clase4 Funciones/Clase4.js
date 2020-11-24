var nombre = 'Osvaldo', edad = 38


function imprimeEdad(){
    console.log(`${nombre} tiene ${edad} años`)
}

imprimeEdad()

function imprimeEdadParametros(n, e ){
    console.log(`${n} tiene ${e} años`)
}

imprimeEdadParametros(nombre, edad)
imprimeEdadParametros('Paula', 54)
imprimeEdadParametros('Carlos', 23)

 //Si una función la creamos con parametros
 //Pero no se los enviamos, no va a salir error
 //Intentará imprimir pero pondrá undefined en los
 //parametros que no ingresemos. Esto debido a
 // que js es debilmente tipado
imprimeEdadParametros('Caro')
imprimeEdad()