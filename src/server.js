import express from "express";

export const app = express();
export const port = 4000;

// Configura Express para que pueda manejar datos JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.use(express.urlencoded({extended:false}))

app.set("port", process.env.PORT || 3100);
