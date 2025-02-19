import express from "express";
import registerProductValidator from '../../middleware/productMiddleware/registerProductValidator';
import registerProductController from '../../controllers/productController/register-product-controller';
import verifyToken from "../../middleware/verifyToken";
import checkRoleAndPermission from "../../middleware/checkRoleAndPermission";


const router = express.Router();


router.post('/',  verifyToken, checkRoleAndPermission(["ADMINISTRADOR"]), registerProductValidator.validatorParams, registerProductValidator.validator, registerProductController);


export default router;