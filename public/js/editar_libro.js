document.addEventListener('DOMContentLoaded', () => {
    const formEditarLibro = document.getElementById('formEditarLibro');
    
    formEditarLibro.addEventListener('submit', async (event) => {
      event.preventDefault();
      const idLibro = document.getElementById('id_libro').value;
      const titulo = document.getElementById('titulo').value;
      const fecha_publicacion = document.getElementById('fecha_publicacion').value;
      const numero_pag = document.getElementById('numero_pag').value;
      const genero = document.getElementById('genero').value;
      const precio = document.getElementById('precio').value;
      const portada = document.getElementById('portada').files[0].value;
      const descripcion = document.getElementById('descripcion').value;


      document.addEventListener('DOMContentLoaded', async () => {
        const response = await fetch(`/editar_libro/${idLibro}`);
        const data = await response.json();
    
        idLibro.value = data.idLibro;
        titulo.value = data.titulo;
        fecha_publicacion.value = data.fecha_publicacion;
        numero_pag.value = data.numero_pag;
        genero.value = data.genero;
        precio.value = data.precio;
        portada.value = data.portada;
        descripcion.value = data.descripcion;
    });
  
      try {
        const response = await fetch(`/libro/${idLibro}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({titulo, fecha_publicacion, numero_pag, genero, precio, portada, descripcion})
        });
  
        if (response.ok) {
            // La edición fue exitosa, muestra un mensaje de éxito
            const respToJson = await response.json();
            Swal.fire({
              title: 'Libro actualizado',
              text: respToJson.message,
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
    
            setTimeout(() => {
              window.location.href = "/"; // Redirigir al usuario a la página principal
            }, 2000);
          } else {
            // Maneja el caso en que la edición no fue exitosa, muestra un mensaje de error
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
            text: 'Hubo un error de red al editar el libro',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }

        
      });
    });