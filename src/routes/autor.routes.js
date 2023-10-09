import express from 'express';

export const router = express.Router();
//const  createUserSchema  =require ('../model/autor_model.js');
//const   createPostUsuarioSchema  =require ('../models/schema/post_schema');
import {crearAutor, listadoAutores, obtenerUnAutor, editarAutor, EliminarAutor} from "../controllers/autor.controllers.js"

router.post('/autor', crearAutor);

router.get("/autor/h", (req, res) => {
    res.send("Hola mundo autor");
});

  router.get('/autor', listadoAutores); 

  router.get("/autor/:_id", obtenerUnAutor);
 
// router.post('/usuario/:usuario_id/post', crearUsuarioPost);

 router.put('/autor/:_id', editarAutor);
 
 router.delete('/autor/:_id',EliminarAutor);

 export default router;
