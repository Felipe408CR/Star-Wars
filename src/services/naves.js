// Consumiendo Apis

// 1. Para donde voy

const URI='https://swapi.dev/api/starships'

// 2. Configurar la petición

const PETICION={
    method: "GET"
}

// 3. Arranca pues
// Consumo del Api

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta.results)

    // // let fila=document.getElementById('fila')


    // // respuesta.results.forEach(function(naves){

    //     // let columna = document.createElement('div')
    //     // columna.classList.add('col')

    //     // let tarjeta = document.createElement('div')
    //     // tarjeta.classList.add('card','shadow','p-3','h-100')

    //     // let nombre=document.createElement('h3')
    //     // nombre.classList.add('fw-bold','text-center')
    //     // nombre.textContent=naves.name

    //     // let modelo=document.createElement('h3')
    //     // modelo.classList.add('fw-bold','text-center')
    //     // modelo.textContent=naves.model

    //     // let piloto=document.createElement('h3')
    //     // piloto.classList.add('fw-bold','text-center')
    //     // piloto.textContent=naves.pilot

    //     // tarjeta.appendChild(nombre)
    //     // tarjeta.appendChild(modelo)
    //     // tarjeta.appendChild(piloto)
    //     // columna.appendChild(tarjeta)
    //     // fila.appendChild(columna)

    // })

    let tabla = document.getElementById('tabla')

    respuesta.results.forEach(function(nave){

        let fila=document.createElement('tr')

        let nombre=document.createElement('td')
        // nombre.classList.add('fw-bold','text-center')
        nombre.textContent=nave.name

        let modelo=document.createElement('td')
        // modelo.classList.add('fw-bold','text-center')
        modelo.textContent=nave.model

        let piloto=document.createElement('td')
        // piloto.classList.add('fw-bold','text-center')
        piloto.textContent=nave.starship_class

        fila.appendChild(nombre)
        fila.appendChild(modelo)
        fila.appendChild(piloto)
        tabla.appendChild(fila)

    })
    

})

.catch(function(respuesta){
    console.log(respuesta)
})

