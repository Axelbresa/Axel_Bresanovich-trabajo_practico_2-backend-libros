import express from 'express';

export const router = express.Router();

import {principal, form_autor, form_libro, lista_libro ,crearAutor, listadoAutores, obtenerUnAutor, editarAutor, EliminarAutor, crearAutorLibro} from "../controllers/autor.controllers.js"


  //vista
  router.get("/", principal)

  //controlador
  router.post('/autor', crearAutor);

  router.get('/autor', listadoAutores); 

  router.get("/autor/:_id", obtenerUnAutor);
 
  router.post('/autor/:autor/libro', crearAutorLibro );

 router.put('/autor/:_id', editarAutor);
 
 router.delete('/autor/:_id',EliminarAutor);

export default router;