import express from 'express';

export const router = express.Router();
import { obtenerUnLibro, editarLibro, EliminarLibro, listadoLibros, lista_libro, editarForm_libro} from "../controllers/libro.controllers.js"

//vista
router.get("/lista", lista_libro)

router.get("/editar_libro/:_id", editarForm_libro)


//crud

router.get('/libro', listadoLibros); 

router.get("/libro/:_id", obtenerUnLibro);

router.put('/libro/:_id', editarLibro);
 
 router.delete('/libro/:_id',EliminarLibro);

 export default router;
 