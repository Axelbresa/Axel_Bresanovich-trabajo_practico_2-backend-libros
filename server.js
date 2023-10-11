// import cors from "cors";
// import morgan from "morgan";
// import helmet from "helmet";
import express from "express";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import "ejs";

export const app = express();

export const port = 3000;

app.use(express.json());

app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.set("port", process.env.PORT || 3100);


// Obtiene el directorio del archivo actual
const directoryPath = dirname(fileURLToPath(import.meta.url));

const publicPath = path.join(directoryPath, 'public');
console.log(publicPath)
app.use(express.static(publicPath));



