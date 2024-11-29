const { miblock } = require('../models');

let listarBlockService = async () => {
  try {
    let resp = await miblock.findAll();  // Aquí es donde se realiza la consulta
    return resp;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { listarBlockService };
