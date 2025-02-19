-- --------------Microservice product--------------------------------------------
CREATE DATABASE microservice_product;
use microservice_product;

drop table if exists productos;

CREATE TABLE productos(
id_producto INT AUTO_INCREMENT PRIMARY KEY,
nombre_producto VARCHAR(120) NOT NULL,
precio DECIMAL(10,2) NOT NULL, 
descripcion VARCHAR(255),
cantidad_ingreso INT UNSIGNED,
id_imagen VARCHAR(120) NOT NULL
);
select * from productos;
-- inventario INT UNSIGNED Podríamos calcularlo con un procedimiento almacenado  
