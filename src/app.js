import {app, port} from "./server.js"
// import { conectarDB } from "./database/db.js";
// import {User} from "./model/userModel.js"; 
// import {venta} from "./model/ventaModel.js"; 
//  import {permisos} from "./model/permisoModel.js"; 
//  import {rol} from "./model/rolModel.js"; 
//  import {articulo} from "./model/articuloModel.js"; 

// Conecta a la base de datos
conectarDB();

app.post("/usuario", async (req, res) => {
    try {
        const userData = req.body;
        const user = new User(userData);
        await user.save();
        return res.json({ message: "Usuario registrado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Hubo un error al registrar al usuario" });
    }
});

app.post("/venta", async (req, res) => {
    try {
        const userData = req.body;
        const user = new venta(userData);
        await user.save();
        return res.json({ message: "venta registrado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Hubo un error al registrar al venta" });
    }
});

app.post("/permisos", async (req, res) => {
    try {
        const userData = req.body;
        const user = new permisos(userData);
        await user.save();
        return res.json({ message: "permiso registrado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Hubo un error al registrar los permisos" });
    }
});

app.post("/articulo", async (req, res) => {
    try {
        const userData = req.body;
        const user = new articulo(userData);
        await user.save();
        return res.json({ message: "articulo registrado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Hubo un error al registrar los articulos" });
    }
});

app.post("/rol", async (req, res) => {
    try {
        const userData = req.body;
        const user = new rol(userData);
        await user.save();
        return res.json({ message: "nuevo rol registrado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Hubo un error al registrar un rol" });
    }
});

app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});