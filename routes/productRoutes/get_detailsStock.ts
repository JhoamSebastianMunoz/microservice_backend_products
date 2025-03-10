import express from 'express';
import get_detailsStock from '../../controllers/InventoryController/get-Stock';
import verifyToken from '../../middleware/verifyToken';

const router = express.Router();

router.get('/:id_registro', get_detailsStock);


export default router;