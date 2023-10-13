//autor
const formAutor = document.querySelector("#formAutor");

formAutor.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const bibliografia = document.querySelector("#biliografia").value;

  const autorr = {
    nombre,
    apellido,
    bibliografia,
  };

  const data = await fetch('/autor', {
    method: 'POST',
    body: JSON.stringify(autorr),
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
document.addEventListener("DOMContentLoaded", () => {
  const formLibro = document.querySelector("#formLibro");
  const autorId = "6525801ccd2f32c58c8bd6a9"; // ID del autor en formato de cadena

  formLibro.addEventListener("submit", async (e) => {
    e.preventDefault();

    const titulo = document.querySelector("#titulo").value;
    const fecha_publicacion = document.querySelector("#fecha_publicacion").value;
    const numero_paginas = document.querySelector("#numero_paginas").value;
    const genero = document.querySelector("#genero").value;
    const precio = document.querySelector("#precio").value;
    const portada = document.querySelector("#portada").files[0];
    const descripcion = document.querySelector("#descripcion").value;

    const libro = {
      titulo,
      fecha_publicacion,
      numero_paginas,
      genero,
      portada,
      precio,
      descripcion
    };

    const data = await fetch(`/autor/${autorId}/libro`, {
      method: "POST",
      body: JSON.stringify(libro),
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
})
});