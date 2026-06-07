import express from "express"
import customMorgan from "./middlewares/customMorgan.js" ;
import auth from "./middlewares/auth.js"

const app = express();
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(customMorgan())


app.get("/", (req,res) => {
    res.status(202).send("hola")
})

app.use(auth)
app.post("/user", (req, res) => {
    const user = req.body
    res.status(201).json({
        message: `Usuario ${user.id} creado`, 
        data: user})
})


app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`)
    console.log(`Accede en: http://localhost:${PORT}`)
})