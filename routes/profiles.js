var express = require('express');
var router = express.Router();
const profileCtrl = require('../controllers/profiles')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, profileCtrl.index)

module.exports = router;