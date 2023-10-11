import express from 'express';

export const router = express.Router();
import {listadoLibros, obtenerUnLibro, editarLibro, EliminarLibro} from "../controllers/libro.controllers.js"

router.get('/libro', listadoLibros); 

router.get("/libro/:_id", obtenerUnLibro);

router.put('/libro/:_id', editarLibro);
 
 router.delete('/libro/:_id',EliminarLibro);

 export default router;
 