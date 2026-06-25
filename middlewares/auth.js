import { X_API_KEY, SECRET } from "../config/config.js"
import jwt from "jsonwebtoken"

export const authApiKey = (req, res, next) => {
  const reqApiKey = req.headers['x-api-key']

  if (reqApiKey === X_API_KEY) {
    next()
  } else {
    res.status(401).json({ mensaje: 'Acceso no autorizado' })
  }
}

export const authToken = (req, res, next) => {
  const cookies = req.cookies
  if (!cookies){res.status(401).send({success: false, message: "Token inexistente"})}

  // const payload = jwt.verify()

  next()
}