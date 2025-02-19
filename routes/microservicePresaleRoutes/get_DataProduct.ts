import express from 'express';

import get_dataProduct from '../../controllers/microservicePresaleController/get_dataProduct';



const router = express.Router();

router.get('/products', get_dataProduct);

export default router;