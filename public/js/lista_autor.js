//libros
const obtenerDatos = async () => {
    const data = await fetch('/autor', {
        method: 'GET'
    });
    const lista_autor = await data.json();
    return lista_autor;
}


const mostrarLista = (lista_autor, tablaElement) => {
    let lista = '';
    lista_autor.forEach(lista => {
        lista += `
            <tr>
                <td>${lista.nombre}</td>
                <td>${lista.apellido}</td>
                <td>${lista.bibliografia}</td>
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

console.log(mostrarLista)

const eliminarLista = async (e) => {

    console.log(e)
    const id = e.target.dataset.id;

    const response = await fetch(`/libro/${id}`, {
        method: 'DELETE',
    })

    const data = await response.json();

    alert(data.message)
    window.location.href = "/";

}


document.addEventListener('DOMContentLoaded', async () => {
    const tbody = document.querySelector('#listadoautor');
    const listado = await obtenerDatos(); 
    mostrarLista(listado, tbody);

});