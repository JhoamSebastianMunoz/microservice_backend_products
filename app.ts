import express from "express";
import bodyParser from 'body-parser';

import register_product from './routes/productRoutes/register_product';
import get_products from './routes/productRoutes/get_products';
import get_product from './routes/productRoutes/get_product';
import delete_product from './routes/productRoutes/delete_product';
import update_product from './routes/productRoutes/update_product';

import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

// Sentencia CRUD para productos
app.use('/register-product', register_product);
app.use('/get-products', get_products);
app.use('/get-product', get_product);
app.use('/delete-product', delete_product);
app.use('/update-product', update_product);



// Configuración del puerto por donde correrá la aplicación
const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
