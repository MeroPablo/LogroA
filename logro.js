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

function editarContacto(index) {
    const contacto = contactos[index];
    document.getElementById('nombreInput').value = contacto.nombre;
    document.getElementById('telefonoInput').value = contacto.telefono;
    document.getElementById('correoInput').value = contacto.correo;
    document.getElementById('etiquetaInput').value = contacto.etiqueta;

    modoEdicion = true;
    indiceEdicion = index;
    document.querySelector('#contactForm').classList.add('edit-mode');
}

function eliminarContacto(index) {
    contactos.splice(index, 1);
    MostrarContactos();
}
function cancelarEdicion() {
    limpiarFormulario();
}
document.getElementById('searchInput').addEventListener('input', function() {
    const busqueda = this.value.toLowerCase();
    const contactosFiltrados = contactos.filter(contacto => 
        contacto.nombre.toLowerCase().includes(busqueda) || 
        contacto.etiqueta.toLowerCase().includes(busqueda)
    );
    MostrarContactos(contactosFiltrados);
});