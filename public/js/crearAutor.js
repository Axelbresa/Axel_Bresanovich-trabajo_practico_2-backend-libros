const formautor = document.querySelector("#formAutor")

formautor.addEventListener('submit', async (e) => {
    e.preventDefault

    const nombre = document.querySelector("#nombre")
    const  apellido = document.querySelector("#apellido")
    const bibliografia = document.querySelector("#bibliografia")

    const autor = {
        nombre,
        apellido,
        bibliografia
    }

    const data = await fetch('http://localhost:4000/autor', {
        method: 'POST',
        body: JSON.stringify(autor),
        headers: {
            'content-type':'aplication/json'
        }
    })

    const response = await data.json()

    alert(response.message)
})