import express from 'express';
import getProductValidator from '../../middleware/productMiddleware/getProductValidator';
import getProductController from '../../controllers/productController/get-product-controller';
import verifyToken from '../../middleware/verifyToken';



const router = express.Router();

router.get('/:id_producto', verifyToken, getProductValidator.validatorParams, getProductValidator.validator, getProductController);


export default router;