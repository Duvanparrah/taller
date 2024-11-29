const express = require('express');
const dotenv = require('dotenv');
const blockRoute = require('./routes/blockRoutes')

dotenv.config();
const App = express();
const port = process.env.NUBE;

App.use(express.json());
App.use('/api', blockRoute);
const startDB = async () => {
    try {
     
      App.listen(port, () => {
        console.log(`El servidor se está ejecutando en el puerto ${port}`);
      });
    } catch (e) {
      console.error('Error al conectar la base de datos:', e.message);
      process.exit(1); // Finaliza la ejecución si falla la conexión
    }
  };
  
  startDB();






























