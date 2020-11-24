const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

// Conexion a DB
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
//const uri = 'mongodb://localhost:27017/paquetes'
const uri = 'mongodb+srv://ingeniero:hola1234@cluster0.pipe6.mongodb.net/serviciorest?retryWrites=true&w=majority'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
// Parse requests of content-type - "application/json"
app.use(bodyParser.json())
// Activate the CORS access on all routes
app.use(cors())
// Listening server port
var port = process.env.PORT || 3000;


require('./routes/paquetes')(app);
require('./routes/usuarios')(app);
require('./routes/login')(app);

app.get('/', (req, res) => {
  res.json({
  "message": "This is a JSON response to a HTTP GET request."
  });
 });

const options = {
  useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true
}
mongoose.connect(uri, options).then(
  () => { console.log('Conectado a mongoDB'); },
  err => { err }
);


app.listen(port, () => {
  console.log("Server is listening on port " + port);
 });