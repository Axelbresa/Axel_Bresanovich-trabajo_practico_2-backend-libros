document.addEventListener('DOMContentLoaded', async () => {
    const listaAutores = await obtenerDatosAutores();

    const tbody = document.querySelector('#listadoAutor');

    mostrarListaAutores(listaAutores, tbody);
});

async function obtenerDatosAutores() {
    const response = await fetch('/autor', {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error('Error al obtener datos de autores');
        return [];
    }
}

function mostrarListaAutores(autores, tablaElement) {
    let lista = '';

    autores.forEach(autor => {
        lista += `
            <tr>
                <td>${autor.nombre}</td>
                <td>${autor.apellido}</td>
                <td>${autor.bibliografia}</td>
                <td class="gap-1">
                    <a href="http://localhost:3000/editar_autor/${autor._id}" class="btn btn-sm btn-warning">
                        Editar
                    </a>
                    <button class="btn btn-sm btn-danger" data-id="${autor._id}" onclick="eliminarAutor(event)">Eliminar</button>
                </td>
            </tr>
        `;
    });

    tablaElement.innerHTML = lista;
}

function eliminarAutor(event) {
    const _id = event.target.dataset.id;
    
    // Confirmación para eliminar al autor
    const confirmarEliminar = confirm("¿Estás seguro de que deseas eliminar este autor?");

    if (confirmarEliminar) {
        fetch(`/autor/${_id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error al eliminar el autor', error);
        });
    }
}
