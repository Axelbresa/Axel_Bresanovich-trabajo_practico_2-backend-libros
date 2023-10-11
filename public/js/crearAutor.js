const formautor = document.querySelector("#formAutor")

formautor.addEventListener('submit', async (e) => {
    e.preventDefault

    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const bibliografia = document.querySelector("#bibliografia").value;

    const autor = {
        nombre,
        apellido,
        bibliografia
    }

    const data = await fetch('/crear_autor', {
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