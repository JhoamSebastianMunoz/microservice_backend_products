import { Request, Response } from 'express';
import StockService from '../../services/stockService';

const consultarDetalleIngreso = async (req: Request, res: Response) => {
    const { id_registro } = req.params;

    if (!id_registro || isNaN(Number(id_registro))) {
        return res.status(400).json({ message: "El id_registro debe ser un número válido" });
    }

    try {
        const detalle = await StockService.obtenerDetalleIngresoService(Number(id_registro));

        if ("error" in detalle) {
            return res.status(404).json({ message: detalle.error });
        }

        res.json(detalle);
    } catch (error) {
        console.error("Error en el controlador de detalle de ingreso:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
export default consultarDetalleIngreso;