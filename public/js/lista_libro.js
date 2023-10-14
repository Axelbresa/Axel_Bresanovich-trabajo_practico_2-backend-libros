document.addEventListener('DOMContentLoaded', async () => {
    const listaLibros = await obtenerDatosLibros();

    const tbody = document.querySelector('#listadoLibro');

    mostrarListaLibros(listaLibros, tbody);
});

async function obtenerDatosLibros() {
    const response = await fetch('/libro', {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error('Error al obtener datos de libros');
        return [];
    }
}

function mostrarListaLibros(libros, tablaElement) {
    let lista = '';

    libros.forEach(libro => {
        lista += `
            <tr>
                <td>${libro.titulo}</td>
                <td>${libro.fecha_publicacion}</td>
                <td>${libro.numero_pag}</td>
                <td>${libro.precio}</td>
                <td>${libro.genero}</td>
                <td>${libro.portada}</td>
                <td>${libro.descripcion}</td>
                <td class="gap-1">
                    <a href="http://localhost:3000/editar_libro/${libro._id}" class="btn btn-sm btn-warning">
                        Editar
                    </a>
                    <button class="btn btn-sm btn-danger" data-id="${libro._id}" onclick="eliminarLibro(event)">Eliminar</button>
                </td>
            </tr>
        `;
    });

    tablaElement.innerHTML = lista;
}

function eliminarLibro(event) {
    const _id = event.target.dataset.id;
    
    // Confirmación para eliminar el libro
    const confirmarEliminar = confirm("¿Estás seguro de que deseas eliminar este libro?");

    if (confirmarEliminar) {
        fetch(`/libro/${_id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error al eliminar el libro', error);
        });
    }
}
