import express from "express";
import verifyToken from "../../middleware/verifyToken";
import checkRoleAndPermission from "../../middleware/checkRoleAndPermission";
import idCategoryValidator from "../../middleware/categoryMiddleware/idCategoryValidator";
import delete_category from "../../controllers/categoryController/delete-category-controller";


const router = express.Router();

router.delete('/:id_categoria', verifyToken, checkRoleAndPermission(["ADMINISTRADOR"]), idCategoryValidator.validatorParams, idCategoryValidator.validator, delete_category);

export default router;