//libros
const obtenerDatos = async () => {
    const data = await fetch('/lista', {
        method: 'GET'
    });
    const lista_libro = await data.json();
    return lista_libro;
}


const mostrarLista = (lista_libro, tablaElement) => {
    let lista = '';
    lista_libro.forEach(lista => {
        lista += `
            <tr>
                <td>${lista.titulo}</td>
                <td>${lista.fecha_publicacion}</td>
                <td>${lista.numero_pag}</td>
                <td>${lista.precio}</td>
                <td>${lista.descripcion}</td>
                <td>${lista.portada}</td>
                <td>${lista.genero}</td>
                <td class="gap-1">               
                    <a href="/editar/${lista.id}" class="btn btn-sm btn-warning fa-regular fa-pen-to-square">
                        editar
                    </a>
                    <button class="btn btn-sm btn-danger" data-id="${lista.id}" onClick=eliminarReserva(event)>eliminar
                    </button>
                </td>
            </tr>
        `
    })

    tablaElement.innerHTML = lista;

}


const eliminarLista = async (e) => {

    console.log(e)
    const id = e.target.dataset.id;

    // Se pregunta al usuario si está seguro de eliminar la reserva

 

    const response = await fetch(`/libro/${id}`, {
        method: 'DELETE',
    })

    const data = await response.json();

    alert(data.message)
    window.location.href = "/";

}


document.addEventListener('DOMContentLoaded', async () => {
    const tbody = document.querySelector('#listadoLibro');
    const listado = await obtenerDatos(); 
    mostrarLista(listado, tbody);

});