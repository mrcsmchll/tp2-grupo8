import jwt from "jsonwebtoken"
import { SECRET } from "../config/config.js"

export const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET, { expiresIn: "30m" })
  return token
}

export const verifyToken = (token) => {
  const payload = jwt.verify(token, SECRET)
  return payload
}
