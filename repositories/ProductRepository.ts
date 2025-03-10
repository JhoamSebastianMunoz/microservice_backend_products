import db from '../config/config-db';
import Product from '../Dto/productDto/ProductDto';
import GetProduct from '../Dto/productDto/GetProductDto';
import DeleteProduct from '../Dto/productDto/DeleteProductDto';
import UpdateProduct from '../Dto/productDto/UpdateProductDto';


class ProductRepository {
    static async add(product: Product){
        const sql = 'INSERT INTO productos (nombre_producto, precio, descripcion, cantidad_ingreso, id_imagen, id_categoria) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [
            product.nombre_producto, 
            product.precio, 
            product.descripcion, 
            product.cantidad_ingreso, 
            product.id_imagen,
            product.id_categoria
        ];        
        return db.execute(sql, values);
    }
    static async getAll(): Promise<GetProduct[]> {
        const sql =  `
            SELECT p.*, c.nombre_categoria 
            FROM productos p
            LEFT JOIN categorias c ON p.id_categoria = c.id_categoria
        `;

        const [rows] = await db.execute(sql); 
        return rows as GetProduct[];
    }
    static async get(getProduct : GetProduct){
        const sql = `
            SELECT p.*, c.nombre_categoria 
            FROM productos p
            LEFT JOIN categorias c ON p.id_categoria = c.id_categoria
            WHERE p.id_producto = ?
        `;
        const values = [getProduct.id_producto]; 
        const [rows] = await db.execute(sql, values);      
        return rows as GetProduct[];
    }
    static async delete(deleteProduct : DeleteProduct){
        const sql = 'DELETE FROM productos WHERE id_producto = ?';
        const values = [deleteProduct.id_producto];
        const [result]: any = await db.execute(sql, values);
    return result.affectedRows; // Devuelve el número de filas afectadas.
    }
    static async update(updateProduct : UpdateProduct){
        const sql = 'UPDATE productos SET nombre_producto = ?, precio = ?, descripcion = ?, cantidad_ingreso = ?, id_imagen = ? WHERE id_producto = ?';
        const values = [updateProduct.nombre_producto, updateProduct.precio, 
            updateProduct.descripcion, updateProduct.cantidad_ingreso,
            updateProduct.id_imagen,updateProduct.id_producto
        ]
        const result: any = await db.execute(sql,values);
        return result.affectedRows;
    }
};

export default ProductRepository;