document.addEventListener('DOMContentLoaded', () => {
    const formEditarAutor = document.getElementById('formEditarAutor');
    
    formEditarAutor.addEventListener('submit', async (event) => {
      event.preventDefault();
      const idAutor = document.getElementById('id_autor').value;
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const bibliografia = document.getElementById('bibliografia').value;

      document.addEventListener('DOMContentLoaded', async () => {
        const response = await fetch(`/editar_autor/${idAutor}`);
        const data = await response.json();
    
        idAutor.value = data.idAutor;
        nombre.value = data.nombre;
        apellido.value = data.apellido;
        bibliografia.value = data.bibliografia;
    });
  
      try {
        const response = await fetch(`/autor/${idAutor}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nombre, apellido, bibliografia })
        });
  
        if (response.ok) {
            // La edición fue exitosa, muestra un mensaje de éxito
            const respToJson = await response.json();
            Swal.fire({
              title: 'Autor actualizado',
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
            text: 'Hubo un error de red al editar el autor',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
        
      });
    });