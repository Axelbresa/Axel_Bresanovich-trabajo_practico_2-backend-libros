import { Schema, model } from "mongoose";

const AutorSchema =new Schema({
    nombre:{
        type:String,
        required:true
    }, 
    apellido:{
        type:String,
        required:true 
    },
    bibliografia:{
        type:String,
        required:true 
    },
    },{
        timestamps:true,
        versionKey:false
    }
)
const autor=model("Autores", AutorSchema)

export {autor};