//crea el arreglo "amigos" donde se almacenarán los nombres ingresados
let amigos = [];

//función para agregar amigos
function agregarAmigo(){
    //capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    //agrega trim() para evitar tomar en cuenta espacios en blanco como nombres 
    let nombre = input.value.trim();
    //validacion de la entrada
    if (nombre == "") {
        alert("Por favor, inserte un nombre.");
        //detener la funcion si el campo esta vacio
        return;
    }
//actualizar el array de amigos     
amigos.push(nombre);
//"console log" para verificar en consola 
console.log(amigos);
//limpiar el campo de entrada
input.value = "";
//-funcion para mostrar la lista de amigos en el html
actualizarListaAmigos();
}

function actualizarListaAmigos(){
    //obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    //limpiar la lista existente para evitar duplicados al actualizar
    lista.innerHTML = "";

    //recorrer el array amigos y crear <li> por cada nombre
    for (let i = 0; i < amigos.length; i ++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {
//validar que haya amigos disponibles
if (amigos.length === 0 ){
    alert("No hay amigos para sortear");
    return;
}
//generar un indice aleatorio
let indice = Math.floor(Math.random() * amigos.length);
//para obtener el amigo sorteado
let amigoSorteado = amigos[indice];
//mostrar resultado en el HTML
let resultado = document.getElementById("resultado");
resultado.innerHTML = " El amigo secreto es: " + amigoSorteado;
}