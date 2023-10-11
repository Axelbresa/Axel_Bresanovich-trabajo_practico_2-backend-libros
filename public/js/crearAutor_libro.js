//autor
const formAutor = document.querySelector("#formAutor");

formAutor.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const bibliografia = document.querySelector("#bibliografia").value;

  const autor = {
    nombre,
    apellido,
    bibliografia,
  };

  const data = await fetch('/autor', {
    method: 'POST',
    body: JSON.stringify(autor),
    headers: {
      'content-type': 'application/json',
    },
  });

  const response = await data.json();

  if (response.success) {
    alert(response.message);
    window.location.href = '/';
  } else {
    alert(response.message);
  }
});

//autor_libro
const formLibro = document.querySelector("#formLibro")

formLibro.addEventListener('submit', async (e) => {
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

    const data = await fetch('/lista', {
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