var express = require('express');
const newsController = require("../controllers/newsController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();

router.get('/',newsController.getNewsAll);
router.get('/:idNews',newsController.getNews);
// router.post('/addArticle',articleController.addArticle);

module.exports = router;