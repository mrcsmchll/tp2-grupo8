import express from "express"
import customMorgan from "./middlewares/customMorgan.js" 
import { SERVER_PORT } from "./config/config.js"
import router from "./routes/router.js"
import sequelize from "./connection/sequelize.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(customMorgan())
app.use(cookieParser())

app.use(router)

await sequelize.sync({force: true})

app.listen(SERVER_PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${SERVER_PORT}`)
    console.log(`Acceder en: http://localhost:${SERVER_PORT}`)
})