const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController')

routes.get('/Products', ProductController.index);
routes.get('/Products/:id', ProductController.show);
routes.post('/Products', ProductController.store);
routes.put('/Products/:id', ProductController.update);
routes.delete('/Products/:id', ProductController.destroy);

module.exports = routes;