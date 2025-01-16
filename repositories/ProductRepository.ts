import db from '../config/config-db';
import Product from '../Dto/ProductDto';
import GetProduct from '../Dto/GetProductDto';
import DeleteProduct from '../Dto/DeleteProductDto';
import UpdateProduct from '../Dto/UpdateProductDto';


class ProductRepository {
    static async add(product: Product){
        const sql = 'INSERT INTO productos (nombre_producto, precio, descripcion, cantidad_ingreso) VALUES (?, ?, ?, ?)';
        const values = [product.nombre_producto, product.precio, product.descripcion, product.cantidad_ingreso];        
        return db.execute(sql, values);
    }
    static async getAll(): Promise<GetProduct[]> {
        const sql = 'SELECT * FROM productos';
        const [rows] = await db.execute(sql); 
        return rows as GetProduct[];
    }
    static async get(getProduct : GetProduct){
        const sql = 'SELECT * FROM productos WHERE id_producto= ?';
        const values = [getProduct.id_producto]; 
        const [rows] = await db.execute(sql, values);      
        return [rows]
    }
    static async delete(deleteProduct : DeleteProduct){
        const sql = 'DELETE FROM productos WHERE id_producto = ?';
        const values = [deleteProduct.id_producto];
        const [result]: any = await db.execute(sql, values);
    return result.affectedRows; // Devuelve el número de filas afectadas.
    }
    static async update(updateProduct : UpdateProduct){
        const sql = 'UPDATE productos SET nombre_producto = ?, precio = ?, descripcion = ?, cantidad_ingreso = ? WHERE id_producto = ?';
        const values = [updateProduct.nombre_producto, updateProduct.precio, updateProduct.descripcion, updateProduct.cantidad_ingreso, updateProduct.id_producto]
        return db.execute(sql,values);
    }
};

export default ProductRepository;