const express = require('express')
const {handleGenerateNewShortURL} =  require('../controlles/url')
const router = express.Router();

router.post('/', handleGenerateNewShortURL);
module.exports = router;

