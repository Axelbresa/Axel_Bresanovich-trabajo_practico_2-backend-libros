import { conectarDB } from "./src/database/db.js";
import { app, port } from "./server.js";
import autorRuta from "./src/routes/autor.routes.js"
import libroRuta from "./src/routes/libro.routes.js"

// Conecta a la base de datos
conectarDB();

 app.use("/api", autorRuta)
 app.use("/api", libroRuta)



app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});
