let $formulario = document.querySelector(".formulario")
console.log($formulario);


$formulario.addEventListener("submit",function(event){  

  event.preventDefault();
  
  let n = $formulario.elements[0]
  let e = $formulario.elements[1]
  let na = $formulario.elements[2]

  let nombre = n.value
  let edad = e.value
  console.log(edad);
  

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
})

let botonB = document.createElement("button")
botonB.textContent = "Eliminar invitado"
botonB.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonB);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

let lista = document.getElementById("lista-de-invitados")
console.log(lista);


let elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)



function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}