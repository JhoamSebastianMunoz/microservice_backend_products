CREATE DATABASE sena;
USE sena;


CREATE TABLE directores_de_grupo(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
cc VARCHAR(12) NOT NULL ,
primer_nombre VARCHAR(30) NOT NULL,
segundo_nombre VARCHAR(30) NULL,
primer_apellido VARCHAR(30) NOT NULL,
segundo_apellido VARCHAR(30) NULL,
email VARCHAR(50) NOT NULL,
contraseña VARCHAR(100) NOT NULL
);

CREATE TABLE aprendices(
id_aprendiz INTEGER AUTO_INCREMENT PRIMARY KEY,
cc VARCHAR(12) NOT NULL ,
primer_nombre VARCHAR(30) NOT NULL,
segundo_nombre VARCHAR(30) NULL,
primer_apellido VARCHAR(30) NOT NULL,
segundo_apellido VARCHAR(30) NULL,
telefono VARCHAR(15) NULL,
ficha VARCHAR(15) NOT NULL,
id INTEGER,
FOREIGN KEY (id) REFERENCES directores_de_grupo(id)
);
select * from directores_de_grupo;
select * from  aprendices;

select * 
from directores_de_grupo
inner join aprendices using(id_instructor);

