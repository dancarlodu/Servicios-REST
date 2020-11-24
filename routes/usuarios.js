module.exports = (app) => {

// importar el modelo usuario
const user = require('../models/user')

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10

// Agregar un usuario
app.post('/nuevo-user', async(req, res) => {
  const body = req.body;
  body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
  try {
    const userDB = await user.create(body);
    res.status(200).json(userDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

}