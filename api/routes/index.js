let express = require('express');
let router = express.Router();
let productController = require("../controllers/productController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//All products
router.get('/list', productController.listProducts);

router.get('/list/search', productController.search);
//Product by id
router.get('/list/:id', productController.detailProduct);

//Create product
router.post('/list', productController.store);

//Delete product
router.delete('/list/:id', productController.delete);

module.exports = router;
