import express from 'express';
import getById_category from '../../controllers/categoryController/getById-category-controller';
import verifyToken from '../../middleware/verifyToken';
import checkRoleAndPermission from "../../middleware/checkRoleAndPermission";
import idCategoryValidator from '../../middleware/categoryMiddleware/idCategoryValidator';



const router = express.Router();

router.get('/:id_categoria', verifyToken, checkRoleAndPermission(["ADMINISTRADOR"]), idCategoryValidator.validatorParams, idCategoryValidator.validator, getById_category);


export default router;
