const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }


function obtenerPersonja(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $.get(url, opts, function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonja(1)
    .then(personaje1 => {
        console.log(`El personaje 1 es ${personaje1.name}`)
        return obtenerPersonja(2)
    })
    .then(personaje2 => {
        console.log(`El personaje 2 es ${personaje2.name}`)
        return obtenerPersonja(3)
    })
    .then(personaje3 => {
        console.log(`El personaje 3 es ${personaje3.name}`)
        return obtenerPersonja(4)
    })
    .then(personaje4 => {
        console.log(`El personaje 4 es ${personaje4.name}`)
        return obtenerPersonja(5)
    })
    .then(personaje5 => {
        console.log(`El personaje 5 es ${personaje5.name}`)
        return obtenerPersonja(6)
    })
    .then(personaje6 => {
        console.log(`El personaje 6 es ${personaje6.name}`)
        return obtenerPersonja(7)
    })
    .then(personaje7 => {
        console.log(`El personaje 7 es ${personaje7.name}`)
    })
    .catch(onError)

