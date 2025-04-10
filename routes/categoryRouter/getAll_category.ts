import express from 'express';
import verifyToken from '../../middleware/verifyToken';
import checkRoleAndPermission from '../../middleware/checkRoleAndPermission';
import getAll_category from '../../controllers/categoryController/getAll-category-controller';

const router = express.Router();

router.get('/', verifyToken, checkRoleAndPermission(["ADMINISTRADOR","COLABORADOR"]), getAll_category);


export default router;