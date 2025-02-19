import express from 'express';
import getProductsController from '../../controllers/productController/get-products-controller';
import verifyToken from '../../middleware/verifyToken';

const router = express.Router();

router.get('/', verifyToken, getProductsController);


export default router;