import { Request, Response } from "express";
import MicroPresaleService from "../../services/MicroservicePresaleService";

let get_DataProduct = async (req:Request, res:Response) =>{
    try {
        let { ids } = req.query; // Extraer el parámetro 'ids' de la consulta
        console.log('IDS: ', ids);

        if (typeof ids !== 'string') {
            return res.status(400).json({ message: 'IDs must be a string' });
        }

        
        const idsArray = ids.split(',').map(id => parseInt(id, 10));  // Convertir el string de IDs en un array
        console.log('IDs Array:', idsArray);
        const products = await MicroPresaleService.getDataProduct(idsArray); // Buscar productos por los IDs
        console.log('PRODUCTOS: ', products);
        
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found for the provided IDs' });
        }

        return res.status(200).json( products );
    } catch (error: any) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

export default get_DataProduct;