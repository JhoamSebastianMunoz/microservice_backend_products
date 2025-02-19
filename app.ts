import express from "express";
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs"; // 
import cors from 'cors'

import register_product from './routes/productRoutes/register_product';
import get_products from './routes/productRoutes/get_products';
import get_product from './routes/productRoutes/get_product';
import delete_product from './routes/productRoutes/delete_product';
import update_product from './routes/productRoutes/update_product';

import  uploadImage from './routes/imageRoutes/upload_image_product';
import  getImage from './routes/imageRoutes/get_image';
import deleteImage from './routes/imageRoutes/delete_image';

import get_dataProduct from './routes/microservicePresaleRoutes/get_DataProduct';
import update_quantity from './routes/microservicePresaleRoutes/update_Quantity'

import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());
// Cargar archivo YAML de Swagger
const swaggerDocument = YAML.load("./swagger.yaml");

// Montar la documentación Swagger en la ruta `/api-docs`
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

// Sentencia CRUD para productos
app.use('/register-product', register_product);
app.use('/get-products', get_products);
app.use('/get-product', get_product);
app.use('/delete-product', delete_product);
app.use('/update-product', update_product);

// rutas para las imagenes usando el servicio de Azure
app.use('/upload-image', uploadImage);
app.use('/get-image', getImage);
app.use('/delete-image', deleteImage);

// rutas para peticiones del microservicio preventa
app.use('/api', get_dataProduct);
// Para actualizar la cantidad de productos
app.use('/api', update_quantity);


// Configuración del puerto por donde correrá la aplicación
const PORT = process.env.PORT || 10102;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
