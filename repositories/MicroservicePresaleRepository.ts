import { RowDataPacket } from 'mysql2';
import db from '../config/config-db';

class MicroPresaleRepository{
    static async getDataProduct(ids: number[]) {
        const sql = `SELECT * FROM productos WHERE id_producto IN (${ids.join(',')})`;
        const [rows] = await db.execute<RowDataPacket[]>(sql);
        console.log('Rows from DB:', rows); 
        return rows;
    }

    // Funcion para actualiza la cantidad de productos
    static async updateProductQuantity(id_producto: number, cantidad: number): Promise<boolean> {
        const sql = `UPDATE productos SET cantidad_ingreso = ? WHERE id_producto = ?`;
        const [result]: any = await db.execute(sql, [cantidad, id_producto]);

        return result.affectedRows > 0;
    }
}

export default MicroPresaleRepository;