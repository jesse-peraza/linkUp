var express = require('express');
var router = express.Router();
const profileCtrl = require('../controllers/profiles')

router.get('/', profileCtrl.index)

module.exports = router;