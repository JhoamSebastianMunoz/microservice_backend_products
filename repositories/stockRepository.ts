import { RowDataPacket } from 'mysql2';
import db from '../config/config-db';
import StockDto from '../Dto/productDto/StockDto';

class StockRepository{

    static async verificarProducto(id_producto: number): Promise<boolean>{
        const producto = await db.query('SELECT * FROM productos WHERE id_producto = ?', id_producto);
        return producto.length > 0;
    };
    
    static async registrarStockDB(dataStock: StockDto, id_usuario: number){
        await db.query(
            'INSERT INTO registro_stock (id_producto, cantidad_ingresada, fecha_vencimiento, codigo_factura, costo_total, costo_unitario, porcentaje_venta, id_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [dataStock.id_producto, dataStock.cantidad_ingresada, dataStock.fecha_vencimiento, dataStock.codigo_factura, dataStock.costo_total, dataStock.costo_unitario, dataStock.porcentaje_venta, id_usuario]
        );
    };

    static async actualizarStockYPrecioDB(dataStock: StockDto){
        // Calcular el nuevo precio del producto basado en el porcentaje de ganancia
        const nuevo_precio = dataStock.costo_unitario + (dataStock.costo_unitario * (dataStock.porcentaje_venta / 100));
    
        await db.query(`
            UPDATE productos 
            SET cantidad_ingreso = cantidad_ingreso + ?, 
                precio = ? 
            WHERE id_producto = ?`,
            [dataStock.cantidad_ingresada, nuevo_precio, dataStock.id_producto]
        );
    };
    
    static async getStockHistory(){
        const [historial] = await db.query(`
            SELECT rs.fecha_ingreso, rs.id_producto, p.nombre_producto, 
                   rs.cantidad_ingresada, rs.id_usuario
            FROM registro_stock rs
            JOIN productos p ON rs.id_producto = p.id_producto
            ORDER BY rs.fecha_ingreso DESC
        `);
        return historial;
    };

    static async obtenerDetalleIngreso (id_registro: number){
        const [resultado] = await db.query<RowDataPacket[]>(`
            SELECT rs.id_registro, rs.codigo_factura, rs.fecha_vencimiento, rs.cantidad_ingresada AS cantidad_ingreso,
                   rs.costo_total, rs.costo_unitario, rs.porcentaje_venta, rs.id_producto, p.nombre_producto,
                   rs.cantidad_ingresada, rs.id_usuario
            FROM registro_stock rs
            JOIN productos p ON rs.id_producto = p.id_producto
            WHERE rs.id_registro = ?
        `, [id_registro]);

        return Array.isArray(resultado) && resultado.length > 0 ? resultado[0] : null;
    };
};

export default StockRepository;

