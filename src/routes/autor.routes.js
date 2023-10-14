import express from 'express';

export const router = express.Router();

import {principal, form_autor, form_libro ,crearAutor, listadoAutores, obtenerUnAutor, EliminarAutor, crearAutorLibro, listado_autor, editarForm_autor, editarAutor, obtenerTodasLasImagenes} from "../controllers/autor.controllers.js"


  //vista
  router.get("/", principal)

  router.get("/crear_autor", form_autor)

  router.get("/editar_autor/:_id", editarForm_autor)

  router.get("/crear_libro", form_libro)

  router.get('/lista_autor', listado_autor); 

  //controlador
router.post('/autor', crearAutor);

router.get('/autor', listadoAutores); 

router.get("/autor/:_id", obtenerUnAutor);
 
router.post('/autor/:autorId/libro', crearAutorLibro);

router.get('/libro_img', obtenerTodasLasImagenes);

 router.put('/autor/:_id', editarAutor);

 router.delete('/autor/:_id',EliminarAutor);

export default router;