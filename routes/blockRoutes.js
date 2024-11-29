const express = require('express');
const router = express.Router();
const { listarBlock } = require('../controller/blockController');

router.get('/block', listarBlock);

module.exports = router;
