const { listarBlockService } = require("../service/blockService");

let listarBlock = async (req, res) => {  // Asegúrate de usar req y res
  try {
    let respuesta = await listarBlockService();
    res.json(respuesta);  // Responder con los datos obtenidos
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Hubo un problema al obtener los bloques' });
  }
};

module.exports = { listarBlock };
