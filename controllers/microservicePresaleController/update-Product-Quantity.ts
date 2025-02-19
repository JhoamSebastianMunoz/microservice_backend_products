import { Request, Response } from 'express';
import MicroPresaleService from '../../services/MicroservicePresaleService';


const updateProductQuantity = async (req: Request, res: Response) => {
    try {
        const { id_producto } = req.params;
        const { cantidad } = req.params;
        console.log('CANTIDAdddD', cantidad);
        

        if (Number(cantidad) < 0) {
            return res.status(400).json({ error: 'La cantidad no puede ser negativa' });
        }

        const updated = await MicroPresaleService.updateQuantity(Number(id_producto), Number(cantidad));

        if (!updated) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.status(200).json({ message: 'Cantidad actualizada correctamente' });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor', message: error.message });
    }
};

export default updateProductQuantity;
