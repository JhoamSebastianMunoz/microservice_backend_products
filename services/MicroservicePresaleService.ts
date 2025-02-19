import MicroPresaleRepository from "../repositories/MicroservicePresaleRepository";

class MicroPresaleService{
    // Funcion para buscar nombre_producto, precio para el microservicio preventa
    static async getDataProduct(ids: number[]) {
        console.log('IDs passed to repository:', ids);  // Log de los IDs
        const rows: any[] = await MicroPresaleRepository.getDataProduct(ids);
        console.log('Rows from DB:', rows);  // Verifica lo que devuelve la base de datos
        if (rows.length === 0) {
            throw new Error(`Producto con IDs ${ids.join(', ')} no encontrado`);
        }
        return rows;
    }

    // Funcion para actualizar la cantidad de productos
    static async updateQuantity(id_producto: number, cantidad: number): Promise<boolean> {
        return await MicroPresaleRepository.updateProductQuantity(id_producto, cantidad);
    }
}

export default MicroPresaleService;