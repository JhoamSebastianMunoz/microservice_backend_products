import axios from 'axios';
import dotenv from 'dotenv';
import ReportsRepository from '../repositories/ReportsRepository';

dotenv.config();


class ReportsService{

    static async get_productsLowStock(umbral: number = 15){
        return await ReportsRepository.getAllProductsLowStock(umbral);
    }

}
export default ReportsService;