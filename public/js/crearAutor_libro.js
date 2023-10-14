//autor
document.addEventListener("DOMContentLoaded", () => {

const formAutor = document.querySelector("#formAutor");

formAutor.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const bibliografia = document.querySelector("#bibliografia").value

  const autorr = {
    nombre,
    apellido,
    bibliografia,
  };

  try {
    const response = await fetch(`/autor/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(autorr)
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
})
