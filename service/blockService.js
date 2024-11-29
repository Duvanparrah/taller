const { Block } = require("../models"); //conex a modelo publicacion
let listarBlockService = async () => {
  try {
    let resp = await Block.findAll();
    return resp
  } catch (error) {
    console.log(error)
  }
};
module.exports = { listarBlockService };
