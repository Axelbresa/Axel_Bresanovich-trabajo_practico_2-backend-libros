const obtenerDatos = async () => {
    const data = await fetch('/crear_libro', {
        method: 'GET'
    });
    const reservas = await data.json();
    return reservas;
}


const mostrarReservas = (lista_libros, tablaElement) => {
    let registros = '';
    lista_libros.forEach(lista => {
        registros += `
            <tr>
                <td>${lista.codigo}</td>
                <td>${lista.nombre}</td>
                <td>${lista.apellido}</td>
                <td>${lista.precio}</td>
                <td>${lista.duracion}</td>
                <td>${lista.fecha}</td>
                <td>${lista.hora}</td>
                <td>${lista.pelicula}</td>
                <td>${lista.cantidad_personas}</td>
                <td>${lista.telefono}</td>
                <td>${lista.email}</td>
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

    tablaElement.innerHTML = registros;

}


const eliminarReserva = async (e) => {

    console.log(e)
    const id = e.target.dataset.id;

    // Se pregunta al usuario si está seguro de eliminar la reserva

 

    const response = await fetch(`/lista/${id}`, {
        method: 'DELETE',
    })

    const data = await response.json();

    alert(data.message)
    window.location.href = "/";

}


document.addEventListener('DOMContentLoaded', async () => {
    // Mostrar las reservas en la tabla
    const tbody = document.querySelector('#listadoLibro');
    const reservas = await obtenerDatos(); // undefined si no obtenerDatos no retorna nada
    mostrarReservas(reservas, tbody);

});