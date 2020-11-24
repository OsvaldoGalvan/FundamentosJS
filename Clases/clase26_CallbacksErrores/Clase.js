const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}



function obtenerPersonja(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, callback)
        .fail(function () { console.log(`Sucedió un error. No se puedo obtener el personaje de ${id}`) })
}

obtenerPersonja(1, function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
    obtenerPersonja(2, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)
        obtenerPersonja(3, function (persona) {
            console.log(`Hola, yo soy ${persona.name}`)
            obtenerPersonja(4, function (persona) {
                console.log(`Hola, yo soy ${persona.name}`)
                obtenerPersonja(5, function (persona) {
                    console.log(`Hola, yo soy ${persona.name}`)
                    obtenerPersonja(6, function (persona) {
                        console.log(`Hola, yo soy ${persona.name}`)
                        obtenerPersonja(7, function (persona) {
                            console.log(`Hola, yo soy ${persona.name}`)
                        })
                    })
                })
            })
        })
    })
})
