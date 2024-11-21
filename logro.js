let contactos = [];
let Edicion = false;
let indiceEdicion = -1;

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('etiqueta').value = '';
    modoEdicion = false;
    document.querySelector('#contactForm').classList.remove('edit-mode');
}
function guardarContacto() {
    const nombre = document.getElementById('nombreInput').value;
    const telefono = document.getElementById('telefonoInput').value;
    const correo = document.getElementById('correoInput').value;
    const etiqueta = document.getElementById('etiquetaInput').value;

    if (!nombre || !telefono || !correo || !etiqueta) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const contacto = { nombre, telefono, correo, etiqueta };

    if (Edicion) {
        contactos[indiceEdicion] = contacto;
    } else {
        contactos.push(contacto);
    }

    actualizarTablaContactos();
    limpiarFormulario();
}