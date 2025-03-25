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
ON UPDATE CASCADE
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

-- ---------------Microservice areas/clients ------------------------------------------

create database microservice_area_client;
use microservice_area_client;

drop table if exists zonas_de_trabajo;
drop table if exists clientes;
drop table if exists usuario_zona;

create table zonas_de_trabajo(
id_zona_de_trabajo int auto_increment primary key,
nombre_zona_trabajo varchar(45),
descripcion varchar(255)
);

create table clientes(
id_cliente int auto_increment primary key,
cedula varchar(15) not null ,
nombre_completo_cliente varchar(200) not null,
direccion varchar(255) not null, 
telefono varchar(15) not null,
rut_nit varchar(30) null,
razon_social varchar(120) null,
fecha_registro DATE NOT NULL DEFAULT (CURRENT_DATE),
estado enum('Activo', 'Inactivo') not null default 'Activo',
id_zona_de_trabajo int,
foreign key (id_zona_de_trabajo) references zonas_de_trabajo(id_zona_de_trabajo)
on delete set null on update cascade
);

CREATE TABLE usuario_zona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_zona_de_trabajo INT NOT NULL,
    FOREIGN KEY (id_zona_de_trabajo) REFERENCES zonas_de_trabajo(id_zona_de_trabajo) ON DELETE CASCADE,
    UNIQUE (id_usuario, id_zona_de_trabajo) -- Evitar asignaciones duplicadas
);

select* from zonas_de_trabajo;
select * from clientes;
select * from zonas_de_trabajo
join clientes using(id_zona_de_trabajo);

SELECT * FROM zonas_de_trabajo WHERE id_zona_de_trabajo = 2;
INSERT IGNORE INTO usuario_zona (id_usuario, id_zona_de_trabajo) VALUES (1,1);

