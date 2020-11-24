module.exports = (app) => {
  
  const paquete = require('../models/paquetes')

  // Crear solicitud
  app.post('/nueva-solicitud', async(req, res) => {
    const body = req.body;  
    try {
      const paqueteDB = await paquete.create(body);
      res.status(200).json(paqueteDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

// Get con parámetros
app.get('/mostrar-solicitud/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const paqueteDB = await paquete.findOne({_id});
    res.json(paqueteDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los paquete
app.get('/ver-solicitud', async(req, res) => {
  try {
    const paqueteDB = await paquete.find();
    res.json(paqueteDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Delete eliminar una paquete
app.delete('/eliminar-solicitud/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const paqueteDB = await paquete.findByIdAndDelete({_id});
    if(!paqueteDB){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(paqueteDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put calificar solicitud
app.put('/calificar-solicitud/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const paqueteDB = await paquete.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(paqueteDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put actualizar un paquete
app.put('/actualizar-solicitud/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const paqueteDB = await paquete.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(paqueteDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put cambia el estado de una solicitud
app.put('/cambiar-estado/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const paqueteDB = await paquete.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(paqueteDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

}
