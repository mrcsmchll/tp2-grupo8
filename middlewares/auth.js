import { X_API_KEY, SECRET } from "../config/config.js"
import { verifyToken } from "../utils/jwt.js"

export const authApiKey = (req, res, next) => {
  const reqApiKey = req.headers['x-api-key']

  if (reqApiKey === X_API_KEY) {
    next()
  } else {
    res.status(401).json({ mensaje: 'Acceso no autorizado' })
  }
}

export const authToken = (req, res, next) => {
  const token = req.cookies?.payload
  if (!token) return res.status(401).send({ success: false, message: "Token inexistente" })

  try {
    const payload = verifyToken(token)
    req.user = payload
    next()
  } catch (error) {
    res.status(401).send({ success: false, message: "Token inválido" })
  }
}