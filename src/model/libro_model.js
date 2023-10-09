import { Schema, model } from "mongoose";

const libroSchema =new Schema({
    titulo:{
        type:String,
        required:true
    }, 
    autor:{
        type:String,
        required:true 
    },
    fecha_publicacion:{
        type:String,
        required:true 
    },
    numero_pag:{
        type:String,
        required:true 
    },
    genero:{
        type:String,
        required:true 
    },
    precio:{
        type:String,
        required:true 
    },
    portada:{
        type:String,
        required:true 
    },
    descripcion:{
        type:String,
        required:true 
    },
    },{
        timestamps:true,
        versionKey:false
    }
)
const libro=model("libros", libroSchema)

export {libro};