import express from 'express';
import updateProductValidator from '../../middleware/productMiddleware/updateProductValidator';
import updateProductController from '../../controllers/productController/update-product-controller';
import verifyToken from '../../middleware/verifyToken';
import checkRoleAndPermission from '../../middleware/checkRoleAndPermission';


const router = express.Router();

router.put('/:id_producto', verifyToken, checkRoleAndPermission(["ADMINISTRADOR"]), updateProductValidator.validatorParams, updateProductValidator.validator , updateProductController);

export default router;