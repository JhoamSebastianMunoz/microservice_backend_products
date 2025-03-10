import express from 'express';
import verifyToken from '../../middleware/verifyToken';
import get_historicalStock from '../../controllers/InventoryController/get- historicalStockCrontroller';
import checkRoleAndPermission from '../../middleware/checkRoleAndPermission';

const router = express.Router();

router.get('/', verifyToken, checkRoleAndPermission(["ADMINISTRADOR"]), get_historicalStock);


export default router;