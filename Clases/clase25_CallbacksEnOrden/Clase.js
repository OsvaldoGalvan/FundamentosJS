const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) { 
    // console.log(arguments)
    console.log(`Hola, yo soy ${persona.name}`)
}



function obtenerPersonja(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`


    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if (callback) {
            callback()
        }
    })
}

obtenerPersonja(1, function () {
    obtenerPersonja(2, function () {
        obtenerPersonja(3, function () {
            obtenerPersonja(4, function () {
                obtenerPersonja(5, function () {
                    obtenerPersonja(6, function () {
                        obtenerPersonja(7)
                    })
                })
            })
        })
    })
})
