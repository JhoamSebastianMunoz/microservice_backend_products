import express from "express";
import registerProductValidator from '../../middleware/productMiddleware/registerProductValidator';
import registerProductController from '../../controllers/productController/register-product-controller';


const router = express.Router();


router.post('/', registerProductValidator.validatorParams, registerProductValidator.validator, registerProductController);


export default router;