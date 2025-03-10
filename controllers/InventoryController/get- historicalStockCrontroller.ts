import { Request, Response } from "express";
import StockService from "../../services/stockService";

let get_historicalStock = async (_req: Request, res: Response) => {  
    try {
        const historial = await StockService.obtenerHistorialStockService();

        if (!Array.isArray(historial)) {
            return res.status(404).json({ message: historial.error });
        }

        res.json(historial);
    } catch (error) {
        console.error("Error en el controlador de historial de stock:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
export default get_historicalStock;