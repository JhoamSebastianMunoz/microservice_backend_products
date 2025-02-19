import { Request, Response } from "express";
import GetProduct from "../../Dto/productDto/GetProductDto";
import ProductService from '../../services/ProductService';




let get_product = async (req: Request, res: Response) => {  
    try {
        const { id_producto } = req.params;
        const result = await ProductService.getProduct(new GetProduct (id_producto));
        if(!result) {
            return res.status(404).json({message: 'Producto no encontrado'})
        }else{
            return res.status(200).json(result);
        }
        
        } catch (error: any) {    
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
        }
    };

    export default get_product;