import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import fileUpload from "express-fileupload";
import "ejs";

export const app = express();
export const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Corrección aquí: Invocar la función fileUpload()
app.use(fileUpload());

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Obtiene el directorio del archivo actual
const directoryPath = dirname(fileURLToPath(import.meta.url));

const publicPath = path.join(directoryPath, 'public');
console.log(publicPath);
app.use(express.static(publicPath));

app.set("port", process.env.PORT || 3100);






