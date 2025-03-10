import { Request, Response } from "express";
import Product from '../../Dto/productDto/ProductDto';
import ProductService from '../../services/ProductService';

let register_product = async (req: Request, res: Response) => {  
  try {
    const {
      nombre_producto,
      precio,
      descripcion,
      cantidad_ingreso,
      id_imagen,
      id_categoria
    } = req.body;
    const result = await ProductService.register_product(new Product(nombre_producto, precio, descripcion, cantidad_ingreso, id_imagen, id_categoria))
    
    return res.status(201).json(
      { status: 'Producto registrado con éxito'}
    );
  } catch (error: any) {    
    if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage });
    } else {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  }
};


export default register_product;