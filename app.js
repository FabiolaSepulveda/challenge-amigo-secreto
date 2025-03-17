// Lista para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista.
 * Se valida que el nombre no esté vacío y que solo contenga letras y espacios.
 */
function agregarAmigo() {
    // Obtiene el valor del input y elimina espacios en blanco al inicio y al final
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Verifica que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Valida que el nombre solo contenga letras (incluye tildes y espacios)
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) {
        alert('Por favor, ingresa solo nombres válidos, no números.');
        return;
    }

    // Agrega el nombre a la lista de amigos
    amigos.push(nombre);

    // Actualiza la lista visible de amigos
    actualizarLista();

    // Limpia el campo de entrada y le devuelve el foco
    input.value = '';
    input.focus();
}
// Permite agregar un amigo presionando la tecla "Enter"
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

/**
 * Función para actualizar la lista visible de amigos en el DOM.
 * Recorre el array "amigos" y crea un elemento <li> para cada nombre.
 */
function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpia el contenido previo de la lista
    listaAmigos.innerHTML = '';

    // Crea un elemento <li> por cada amigo en la lista y lo agrega al DOM
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

/**
 * Función para realizar el sorteo de un amigo secreto.
 * Se elige un amigo al azar de la lista y se muestra el resultado.
 */
function sortearAmigo() {
    // Verifica que la lista no esté vacía antes de sortear
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear.');
        return;
    }
    // Selecciona un índice al azar y elimina al amigo seleccionado de la lista
    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos.splice(indiceGanador, 1)[0];

    // Muestra el resultado del sorteo en el DOM
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    // Actualiza la lista visible después del sorteo
    actualizarLista();  
}


















