import express from "express"

const app = express();
const PORT = 8080

app.get("/", (req,res) => {
    res.status(200).send("hola")
})

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`)
    console.log(`Accede en: http://localhost:${PORT}`)
})