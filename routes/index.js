let express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
const jsonParser = express.json();
const homeController = require("../controllers/homeController.js");

router.get('/',homeController.getIndex);
// router.get('/',homeController.getSs);

module.exports = router;