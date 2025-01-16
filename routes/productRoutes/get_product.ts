import express from 'express';
import getProductValidator from '../../middleware/productMiddleware/getProductValidator';
import getProductController from '../../controllers/productController/get-product-controller';



const router = express.Router();

router.get('/:id_producto',getProductValidator.validatorParams, getProductValidator.validator, getProductController);


export default router;