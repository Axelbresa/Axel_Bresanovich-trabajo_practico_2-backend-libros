// import cors from "cors";
// import morgan from "morgan";
// import helmet from "helmet";
import express from "express";
import { dirname } from "path";
import path from "path";
import "ejs";

export const app = express();

export const port = 4000;

app.use(express.json());

app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.set("port", process.env.PORT || 3100);


// Obtiene el directorio del archivo actual
const directoryPath = dirname(import.meta.url);

app.use(express.static(path.join(directoryPath, 'public')));



