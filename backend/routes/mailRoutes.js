const express = require('express');
const router = express.Router();

let ctrl = require('../controllers/mailController');

router.route('/api/contact').post(ctrl.fetch);


module.exports = router;