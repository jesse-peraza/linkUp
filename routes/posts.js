var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');
const profileCtrl = require('../controllers/profiles');
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
router.get('/', postsCtrl.index);
router.get('/new', ensureLoggedIn, postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.delete('/:id', ensureLoggedIn, profileCtrl.delete)
router.post('/', ensureLoggedIn, postsCtrl.create);

module.exports = router;
