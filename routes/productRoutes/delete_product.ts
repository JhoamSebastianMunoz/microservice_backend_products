import express from "express";
import deleteProductValidator from '../../middleware/productMiddleware/deleteProductValidator';
import deleteProductController from '../../controllers/productController/delete-product-controller';


const router = express.Router();

router.delete('/:id_producto',deleteProductValidator.validatorParams, deleteProductValidator.validator,deleteProductController);

export default router;