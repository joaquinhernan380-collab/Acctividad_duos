import { ListaProductos } from "./db.js";



function MostrarProductos(lista) {
    let div = document.querySelector(".contenedor")
    div.innerHTML = ""
    lista.forEach(i => {
        let nuevodiv = document.createElement("div")
        nuevodiv.className = "Tarjetas"
        nuevodiv.innerHTML =
        `
            <h1>${i.nombre}</h1>
            <div>
                <p>${i.descripción}</p>
                <img src${i.img}>
            </div>
            <p${i.precio}></p>
        `
        div.appendChild(nuevodiv)
    });
}

MostrarProductos(ListaProductos)


let div = document.querySelector(".contenedor")
let textoCrudo = document.getElementById("texto")
let buscar = document.querySelector("#buscar")

textoCrudo.addEventListener("keyup", function () {
    let Filtrar = ListaProductos.filter(i=>i.nombre.toLowerCase().includes(textoCrudo.value.trim().toLowerCase()))
    if (Filtrar.length > 0) {
        MostrarProductos(Filtrar)
    } else {
        div.innerHTML = `
            <p>No se encontraron coincidencias....</p>
        `
    }
})

