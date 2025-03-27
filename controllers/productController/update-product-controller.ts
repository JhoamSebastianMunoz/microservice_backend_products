import {Request, Response} from 'express';
import UpdateProduct from '../../Dto/productDto/UpdateProductDto';
import ProductService from '../../services/ProductService';

let update_product = async(req:Request, res:Response)=>{
    try {
        const{ id_producto } =req.params;
        const {
            nombre_producto,
            precio,
            descripcion,
            id_categoria,
            id_imagen
            } = req.body;
        
            const result = await ProductService.updateProduct(new UpdateProduct(nombre_producto, precio, descripcion, id_categoria, id_imagen, id_producto));
            if (!result || result.affectedRows === 0) {
                return res.status(404).json({ error: "Producto no encontrado." });
            }
            else{ return res.status(200).json(
                {status:'Ok, Producto actualizado con éxito.'}
            ); 
            }
        }catch(error:any){
            if(error && error.code == "ER_DUP_ENTRY"){
                return res.status(500).json({errorInfo: error.sqlMessage})
            }else{
                return res.status(500).json({error: "Internal Server Error", details: error.message })
            }
        }
};

export default update_product;