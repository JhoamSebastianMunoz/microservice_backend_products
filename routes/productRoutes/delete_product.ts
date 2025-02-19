import express from "express";
import deleteProductValidator from '../../middleware/productMiddleware/deleteProductValidator';
import deleteProductController from '../../controllers/productController/delete-product-controller';
import verifyToken from "../../middleware/verifyToken";
import checkRoleAndPermission from "../../middleware/checkRoleAndPermission";


const router = express.Router();

router.delete('/:id_producto', verifyToken, checkRoleAndPermission(["ADMINISTRADOR"]),deleteProductValidator.validatorParams, deleteProductValidator.validator,deleteProductController);

export default router;