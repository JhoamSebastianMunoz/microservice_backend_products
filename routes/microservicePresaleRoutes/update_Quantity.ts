import express from 'express';
import updateProductQuantity from '../../controllers/microservicePresaleController/update-Product-Quantity';



const router = express.Router();

router.put('/products/actualizar-cantidad/:id_producto/:cantidad', updateProductQuantity);

export default router;