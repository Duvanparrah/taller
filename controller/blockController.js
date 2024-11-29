const { listarBlockService } = require("../service/blockService");
let listarBlock = async () => {
  try {
    let respuesta = await listarBlockService();
    res.json(respuesta);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { listarBlock };
