//const post = require("../models/post_models"
import {autor} from "../model/autor_model.js"


export const crearAutor= async (req, res) => {
    try {
        const userData = req.body;
        const Autor = new autor(userData);
        await Autor.save();
        return res.json({ message: "autor registrado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Hubo un error al registrar al autor" });
    }
}
;

export const listadoAutores= async (req, res)=>{
    try {
      const Autor = await autor.find();
  
      return res.json(Autor);
  } catch (error) {
      console.log('Error al obtener el listado de autores', error);
      return res.status(500).json({
          message: 'Error al obtener los autores'
      })
  }
  }


export const obtenerUnAutor= async (req, res)=>{
    try {
      const { _id } = req.params;
      const Autor = await autor.findById(_id);
      
      return res.json(Autor);
  } catch (error) {
      console.log(error);
      return res.status(500).json({
          message: 'Error al obtener el autor'
      })
  }
}

export const editarAutor=async(req, res)=>{
    try {
      const { _id } = req.params;
      const Autor = await autor.findById(_id);
      await Autor.updateOne(req.body)
      return res.json({
          message: 'autor actualizada exitosamente'
      });
  } catch (error) {
      console.log('Error al editar el autor', error);
      return res.status(error.status || 500).json({
          message: error.message
      })
  }
  }

export const EliminarAutor = async (req, res)=>{
    try {
      const {_id} = req.params;
      if(!_id){
          throw({
              status: 400,
              message: 'No se ha enviado el id de autor'
          })
      }
      const Autor = await autor.findById(_id);
      await Autor.deleteOne();
      return res.json({ message: 'el autor se eliminó correctamente' })
  } catch (error) {
      console.log('Error al eliminar el autor', error);
      return res.status(error.status || 500).json({
          message: error.message || 'Error al eliminar autor'
      })
  }
  }
  

