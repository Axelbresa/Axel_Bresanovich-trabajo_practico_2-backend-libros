import { Schema, model } from "mongoose";

const libroSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  fecha_publicacion: {
    type: String,
    required: true,
  },
  numero_pag: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  precio: {
    type: String,
    required: true,
  },
  portada: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  Autor: {
    type: Schema.Types.ObjectId,
    ref: "Autores", // Asegúrate de que "autor" coincida con el nombre del modelo de autor.
  },
}, {
  timestamps: true,
  versionKey: false
});

const libro = model("libros", libroSchema);

export { libro };
