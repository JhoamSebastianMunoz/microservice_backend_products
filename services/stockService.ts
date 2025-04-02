import axios from 'axios';
import StockRepository from '../repositories/stockRepository';
import dotenv from 'dotenv';
import StockDto from '../Dto/productDto/StockDto';

dotenv.config();


class StockService{

    static async registrarStockService(dataStock: StockDto, id_usuario: number){
        // Validar si el producto existe
        const productoExiste = await StockRepository.verificarProducto(dataStock.id_producto);
        if (!productoExiste) {
            throw { status: 404, message: "Producto no encontrado" };
        }
    
        // Consultar microservicio de usuarios para validar el usuario y su rol
        const response = await axios.get(`${process.env.USER_SERVICE_URL}${id_usuario}`);
        const usuario = response.data;
        console.log('USER: ', usuario);
        
    
        if (!usuario) {
            throw { status: 403, message: "Usuario no encontrado" };
        }
    
        // Registrar stock y actualizar cantidad en productos
        await StockRepository.registrarStockDB(dataStock, id_usuario);
        await StockRepository.actualizarStockYPrecioDB(dataStock);
    };

    static async obtenerHistorialStockService(){
        // Obtener historial de stock desde la base de datos
        const historial = await StockRepository.getStockHistory();
    
        if (!Array.isArray(historial) || historial.length === 0) {
            return { error: "No hay registros de stock disponibles" };
        }
    
        // Obtener los IDs únicos de usuarios para optimizar las consultas
        const usuariosIds = [...new Set(historial.map((item: any) => item.id_usuario))];
    
        // Consultar el microservicio de usuarios para obtener los nombres completos
        const usuariosData = await Promise.all(
            usuariosIds.map(async (id) => {
                try {
                    const response = await axios.get(`${process.env.USUARIOS_SERVICE_URL}${id}`);
                    console.log('USERSROCK:  ', response);
                    
                    return { id_usuario: id, nombre_completo: response.data.nombreCompleto };
                } catch (error) {
                    console.error(`Error obteniendo datos del usuario ${id}:`, error);
                    return { id_usuario: id, nombre_completo: "Desconocido" };
                }
            })
        );
    
        // Crear un diccionario para búsqueda rápida
        const usuariosMap = new Map(usuariosData.map(user => [user.id_usuario, user.nombre_completo]));
    
        // Formatear la respuesta final
        return historial.map((item: any) => ({
            fecha_ingreso: item.fecha_ingreso,
            id_producto: item.id_producto,
            nombre_producto: item.nombre_producto,
            cantidad_ingresada: item.cantidad_ingresada,
            id_usuario: item.id_usuario,
            nombre_completo: usuariosMap.get(item.id_usuario) || "Desconocido"
        }));
    };

    static async obtenerDetalleIngresoService(id_registro: number){
        const detalleIngreso = await StockRepository.obtenerDetalleIngreso(id_registro);
    
        if (!detalleIngreso) {
            return { error: "Registro no encontrado" };
        }
    
        try {
            // Obtener el nombre del usuario desde el microservicio
            const response = await axios.get(`${process.env.USUARIOS_SERVICE_URL}${detalleIngreso.id_usuario}`);
            const usuario = response.data;
    
            return {
                ...detalleIngreso,
                nombre_completo: usuario?.nombreCompleto || "Desconocido"
            };
        } catch (error) {
            console.error(`Error obteniendo datos del usuario ${detalleIngreso.id_usuario}:`, error);
            return {
                ...detalleIngreso,
                nombre_completo: "Desconocido"
            };
        }
    };
    

}
export default StockService;