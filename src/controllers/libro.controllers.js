import {libro} from "../model/libro_model.js"
import {autor} from "../model/autor_model.js"

//vista
export const lista_libro =(req, res)=>{
    res.render ("lista_libros")
}


//crud

export const listadoLibros= async (req, res)=>{
    try {
      const Libro = await libro.find().populate("autor" )
  
      return res.json(Libro);
  } catch (error) {
      console.log('Error al obtener el listado de los libros', error);
      return res.status(500).json({
          message: 'Error al obtener los libros'
      })
  }
  }


export const obtenerUnLibro= async (req, res)=>{
    try {
      const { _id } = req.params;
      const Libro = await libro.findById(_id);
      
      return res.json(Libro);
  } catch (error) {
      console.log(error);
      return res.status(500).json({
          message: 'Error al obtener el libro'
      })
  }
}

export const editarLibro=async(req, res)=>{
    try {
      const { _id } = req.params;
      const Libro = await libro.findById(_id);
      await Libro.updateOne(req.body)
      return res.json({
          message: 'libro actualizado exitosamente'
      });
  } catch (error) {
      console.log('Error al editar el libro', error);
      return res.status(error.status || 500).json({
          message: error.message
      })
  }
  }

export const EliminarLibro = async (req, res)=>{
    try {
      const {_id} = req.params;
      if(!_id){
          throw({
              status: 400,
              message: 'No se ha enviado el id del libro'
          })
      }
      const Libro = await libro.findById(_id);
      await Libro.deleteOne();
      return res.json({ message: 'el libro se eliminó correctamente' })
  } catch (error) {
      console.log('Error al eliminar el libro', error);
      return res.status(error.status || 500).json({
          message: error.message || 'Error al eliminar el libro'
      })
  }
  }
  