const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) { 
    // console.log(arguments)
    console.log(`Hola, yo soy ${persona.name}`)
}



function obtenerPersonja(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

obtenerPersonja(1)
obtenerPersonja(2)
obtenerPersonja(3)
obtenerPersonja(4)