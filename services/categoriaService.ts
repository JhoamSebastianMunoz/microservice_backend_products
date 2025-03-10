import Categoria from "../Dto/productDto/CategoriaDto";
import CategoriaRepository from "../repositories/CategoriaRepository";

class CategoriaService {
    static async getAllCategorias() {
        return await CategoriaRepository.getAll();
    }
    
    static async getCategoriaById(id: number) {
        return await CategoriaRepository.getById(id);
    }
    
    static async createCategoria(categoria: Categoria) {
        return await CategoriaRepository.add(categoria);
    }
    
    static async updateCategoria(categoria: Categoria, id: number) {
        return await CategoriaRepository.update(id, categoria);
    }
    
    static async deleteCategoria(id: number) {
        return await CategoriaRepository.delete(id);
    }
}

export default CategoriaService;