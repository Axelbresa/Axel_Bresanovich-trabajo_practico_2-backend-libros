const formautor = document.querySelector("#formAutor")

formautor.addEventListener('submit', async (e) => {
    e.preventDefault

    const titulo = document.querySelector("#titulo").value;
    const fecha_pulicacion = document.querySelector("#fecha_publicacion").value;
    const numero_paginas = document.querySelector("#numero_paginas").value;
    const genero = document.querySelector("#genero").value;
    const precio = document.querySelector("#precio").value;
    const portada = document.querySelector("#portada").value;
    const descripcion = document.querySelector("#descripcion").value;

    const autor = {
        titulo,
        fecha_pulicacion,
        numero_paginas,
        genero,
        precio,
        portada,
        descripcion
    }

    const data = await fetch('/crear_libro', {
        method: 'POST',
        body: JSON.stringify(autor),
        headers: {
            'content-type':'application/json'
        }
    })

    const response = await data.json()

    alert(response.message);
    window.location.href = "/";

})