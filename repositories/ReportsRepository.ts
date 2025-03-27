import db from '../config/config-db';
import GetProduct from "../Dto/productDto/GetProductDto";

class ReportsRepository{
    static async getAllProductsLowStock(umbral: number = 15): Promise<GetProduct[]> {
        const sql = `
            SELECT * FROM productos WHERE cantidad_ingreso < ?
        `;
        const [rows] = await db.execute(sql, [umbral]); 
        return rows as GetProduct[];
    }
}

export default ReportsRepository;