let contactos = [];
let modoEdicion = false;
let indiceEdicion = -1;

function limpiarFormulario() {
    document.getElementById('nombreInput').value = '';
    document.getElementById('telefonoInput').value = '';
    document.getElementById('correoInput').value = '';
    document.getElementById('etiquetaInput').value = '';
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

    if (modoEdicion) {
        contactos[indiceEdicion] = contacto;
    } else {
        contactos.push(contacto);
    }

    MostrarContactos();
    limpiarFormulario();
}

function MostrarContactos(contactosFiltrados = contactos) {
    const tbody = document.getElementById('contactTableBody');
    tbody.innerHTML = '';

    contactosFiltrados.forEach((contacto, index) => {
        const fila = tbody.insertRow();
        fila.innerHTML = `
            <td>${contacto.nombre}</td>
            <td>${contacto.telefono}</td>
            <td>${contacto.correo}</td>
            <td>${contacto.etiqueta}</td>
            <td class="actions">
                <button onclick="editarContacto(${index})">Editar</button>
                <button onclick="eliminarContacto(${index})">Eliminar</button>
            </td>
        `;
    });
}

