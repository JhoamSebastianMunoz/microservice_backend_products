// controllers/reportsController/getProductsLowStock.js
import { Request, Response } from "express";
import ReportService from "../../services/ReportsService";

let getProductsLowStock = async (req: Request, res: Response) => {
    try {
        const umbral = parseInt(req.query.umbral as string) || 15;
        
        const result = await ReportService.get_productsLowStock(umbral);
        
        // Envía una sola respuesta
        if (result.length === 0) {
            return res.status(404).json({ message: "No hay productos con stock menor a " + umbral });
        } else {
            return res.status(200).json(result);
        }
        
    } catch (error: any) {
        console.error("Error al obtener productos con stock bajo:", error);
        return res.status(500).json({ 
            error: "Error interno del servidor", 
            details: error.message 
        });
    }
};

export default getProductsLowStock;