import express from 'express';
import verifyToken from '../../middleware/verifyToken';
import checkRoleAndPermission from '../../middleware/checkRoleAndPermission';
import idCategoryValidator from '../../middleware/categoryMiddleware/idCategoryValidator';
import update_category from '../../controllers/categoryController/update-category-controller';


const router = express.Router();

router.put('/:id_categoria', verifyToken, checkRoleAndPermission(["ADMINISTRADOR"]), idCategoryValidator.validatorParams, idCategoryValidator.validator , update_category);

export default router;