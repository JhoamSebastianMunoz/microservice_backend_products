import db from '../config/config-db';
import Categoria from '../Dto/productDto/CategoriaDto';

class CategoriaRepository {
    static async getAll() {
        const sql = 'SELECT * FROM categorias';
        const [categorias] = await db.query(sql);
        return categorias;
    }
    
    static async getById(id: number) {
        const sql = 'SELECT * FROM categorias WHERE id_categoria = ?';
        const [categorias] = await db.query(sql, [id]);
        return (categorias as any[]).length > 0 ? (categorias as any[])[0] : null;
    }
    
    static async add(categoria: Categoria) {
        const sql = 'INSERT INTO categorias (nombre_categoria) VALUES (?)';
        const values = [categoria.nombre_categoria];
        return db.execute(sql, values);
    }
    
    static async update(id: number, categoria: Categoria) {
        const sql = 'UPDATE categorias SET nombre_categoria = ? WHERE id_categoria = ?';
        const values = [categoria.nombre_categoria, id];
        const [result]: any = await db.execute(sql, values);
        return result.affectedRows > 0;
    }
    
    static async delete(id: number) {
        const sql = 'DELETE FROM categorias WHERE id_categoria = ?';
        const [result]: any = await db.execute(sql, [id]); 
        return result.affectedRows > 0;
    }
}

export default CategoriaRepository;