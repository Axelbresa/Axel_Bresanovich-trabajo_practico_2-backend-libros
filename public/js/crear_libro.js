//autor_libro
const document = document.querySelector("#formLibro");
const autorId = "652abaeee0068ded654a7f95"; // ID del autor en formato de cadena



  const titulo = document.querySelector("#titulo").value;
  const fecha_publicacion = document.querySelector("#fecha_publicacion").value;
  const numero_pag = document.querySelector("#numero_pag").value;
  const genero = document.querySelector("#genero").value;
  const precio = document.querySelector("#precio").value;
  const portada = document.querySelector("#portada").files[0]; // Acceder al archivo de la entrada de archivo
  const descripcion = document.querySelector("#descripcion").value;

  const libro = {
    titulo,
    fecha_publicacion,
    numero_pag,
    genero,
    portada,
    precio,
    descripcion
  };

  try {
    const response = await fetch(`/autor/${autorId}/libro`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(libro)
    });

    if (response.ok) {
      // La creación fue exitosa, muestra un mensaje de éxito
      const respToJson = await response.json();
      Swal.fire({
        title: 'Libro creado',
        text: respToJson.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

      setTimeout(() => {
        window.location.href = "/"; // Redirigir al usuario a la página principal
      }, 2000);
    } else {
      // Maneja el caso en que la creación no fue exitosa, muestra un mensaje de error
      const respToJson = await response.json();
      Swal.fire({
        title: 'Error',
        text: respToJson.message,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  } catch (error) {
    // Maneja errores de red
    console.error('Error de red', error);
    Swal.fire({
      title: 'Error de red',
      text: 'Hubo un error de red al crear el libro',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
