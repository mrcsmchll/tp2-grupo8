const auth = (req, res, next) => {
    
  const apiKey = req.headers['x-api-key'];
  console.log(process.env.dev)
  if (apiKey === 'mi-clave-secreta') {
    next();
  } else {
    res.status(401).json({ mensaje: 'Acceso no autorizado' });
  }
};

export default auth