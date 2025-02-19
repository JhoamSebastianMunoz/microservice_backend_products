import express from 'express';
import updateProductValidator from '../../middleware/productMiddleware/updateProductValidator';
import updateProductController from '../../controllers/productController/update-product-controller';


const router = express.Router();

router.put('/:id_producto',updateProductValidator.validatorParams, updateProductValidator.validator , updateProductController);

export default router;