import express from "express";
import verifyToken from "../../middleware/verifyToken";
import checkRoleAndPermission from "../../middleware/checkRoleAndPermission";
import registerCategoryValidator from "../../middleware/categoryMiddleware/registerCategoryValidator";
import register_category from "../../controllers/categoryController/register-category-controller";


const router = express.Router();


router.post('/',  verifyToken, checkRoleAndPermission(["ADMINISTRADOR"]), registerCategoryValidator.validatorParams, registerCategoryValidator.validator, register_category);


export default router;