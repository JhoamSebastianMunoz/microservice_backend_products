import express from "express";
import verifyToken from "../../middleware/verifyToken";
import checkRoleAndPermission from "../../middleware/checkRoleAndPermission";
import register_stock from "../../controllers/InventoryController/register-stock";
import stockValidator from '../../middleware/productMiddleware/stockValidator'


const router = express.Router();


router.post('/:id_producto',  verifyToken, checkRoleAndPermission(["ADMINISTRADOR"]), stockValidator.stockValidator, stockValidator.validarStock, register_stock);


export default router;