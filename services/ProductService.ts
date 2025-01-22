import ProductRepository from '../repositories/ProductRepository';
import Product from '../Dto/productDto/ProductDto';
import GetProduct from '../Dto/productDto/GetProductDto';
import DeleteProduct from '../Dto/productDto/DeleteProductDto';
import UpdateProduct from '../Dto/productDto/UpdateProductDto';

class ProductService {
    
    static async register_product(product: Product) {
        return await ProductRepository.add(product);
    }
    static async getProducts(){
        return await ProductRepository.getAll();
    }
    static async getProduct(getProduct : GetProduct){
        return await ProductRepository.get(getProduct);
    }
    static async deleteProduct(deleteProduct: DeleteProduct){
        return await ProductRepository.delete(deleteProduct);
    } 
    static async updateProduct(updateProduct: UpdateProduct){
        return await ProductRepository.update(updateProduct);
        }
};

export default ProductService;