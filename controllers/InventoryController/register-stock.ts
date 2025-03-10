import { Request, Response } from 'express';
import StockService from '../../services/stockService';
import StockDto from '../../Dto/productDto/StockDto';

let register_stock = async (req: Request, res: Response) => {  

    const { id_producto } = req.params;
    const { cantidad_ingresada, fecha_vencimiento, codigo_factura, costo_total, costo_unitario, porcentaje_venta } = req.body;
    const id_usuario = req.body.id_usuario;

    if (!cantidad_ingresada || !codigo_factura || !costo_total || !costo_unitario || !porcentaje_venta || !id_usuario) {
        return res.status(400).json({ message: "Faltan datos requeridos" });
    }

    try {
        await StockService.registrarStockService(new StockDto(Number(id_producto), 
            cantidad_ingresada, fecha_vencimiento, codigo_factura, costo_total,
            costo_unitario, porcentaje_venta), id_usuario
        );
        res.status(201).json({ message: "Stock registrado con éxito" });
    } catch (error: any) {
        console.error("Error al registrar stock:", error);
        res.status(error.status || 500).json({ message: error.message || "Error interno del servidor" });
    }
};


export default register_stock;