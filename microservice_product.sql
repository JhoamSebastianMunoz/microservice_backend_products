-- --------------Microservice product--------------------------------------------
CREATE DATABASE microservice_product;
USE microservice_product;

DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS registro_stock;
DROP TABLE IF EXISTS categorias;

CREATE TABLE productos(
id_producto INT AUTO_INCREMENT PRIMARY KEY,
nombre_producto VARCHAR(120) NOT NULL,
precio DECIMAL(10,2) NOT NULL, 
descripcion VARCHAR(255),
cantidad_ingreso INT,
id_categoria INT,
id_imagen VARCHAR(120) NOT NULL,
FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
ON DELETE SET NULL
ON UPDATE CASCADE;
);
SELECT * FROM productos;

CREATE TABLE registro_stock (
    id_registro INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT NOT NULL,
    cantidad_ingresada INT UNSIGNED NOT NULL,
    id_usuario INT NOT NULL,
    fecha_ingreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_vencimiento DATE NULL,
	codigo_factura VARCHAR(50) NOT NULL,
    costo_total DECIMAL(10,2) NOT NULL,
    costo_unitario DECIMAL(10,2) NOT NULL,
    porcentaje_venta DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
SELECT * FROM registro_stock;

CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(100) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM categorias;