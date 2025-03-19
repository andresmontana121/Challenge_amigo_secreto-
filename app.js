// Array para almacenar los nombres de los amigos
let amigos = [];

// Elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado");

// Función para agregar un amigo
function agregarAmigo() {
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el input no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el amigo al array
    amigos.push(nombreAmigo);

    // Actualizar la lista visualmente
    actualizarLista();

    // Limpiar el input
    inputAmigo.value = "";
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista() {
    // Limpiar la lista actual
    listaAmigos.innerHTML = "";

    // Añadir cada amigo como un elemento de lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigos() {
    // Validar que haya suficientes amigos
    if (amigos.length < 2) {
        alert("Debes tener al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Mostrar el resultado
    const amigoSorteado = amigos[indiceAleatorio];
    resultadoSorteo.textContent = `El amigo secreto es: ${amigoSorteado}`;
}
