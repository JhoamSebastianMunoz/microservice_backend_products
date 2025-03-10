import { Request, Response } from "express";
import CategoriaService from "../../services/categoriaService";

let getAll_category = async (_req: Request, res: Response) => {  
    try {
        const result = await CategoriaService.getAllCategorias();
        return res.status(200).json(result);
        } catch (error: any) {    
            if (error && error.code == "ER_DUP_ENTRY") {
                return res.status(500).json({ errorInfo: error.sqlMessage });
            } else {
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }
        }
    };
    export default getAll_category;