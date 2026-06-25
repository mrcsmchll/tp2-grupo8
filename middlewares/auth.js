import { X_API_KEY } from "../config/config.js";

const auth = (req, res, next) => {
  const reqApiKey = req.headers['x-api-key'];

  if (reqApiKey === X_API_KEY) {
    next();
  } else {
    res.status(401).json({ mensaje: 'Acceso no autorizado' });
  }
};

export default auth