import express from 'express';
import get_productsLowStock from '../../controllers/reportsController/getProductsLowStock';

const router = express.Router();

router.get('/', get_productsLowStock);


export default router;