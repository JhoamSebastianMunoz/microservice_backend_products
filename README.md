# Microservice Backend - Productos 🛍️

Un microservicio backend robusto y escalable construido con **Express**,
**TypeScript** y **MySQL** para la gestión de productos en una
plataforma de e-commerce. Incluye autenticación con JWT, validación de
datos, almacenamiento en Azure Blob Storage y documentación interactiva
con Swagger.

------------------------------------------------------------------------

## Tabla de Contenidos

-   [Características](#características)
-   [Arquitectura](#arquitectura)
-   [Requisitos Previos](#requisitos-previos)
-   [Instalación](#instalación)
-   [Configuración](#configuración)
-   [Uso](#uso)
-   [Estructura del Proyecto](#estructura-del-proyecto)
-   [Endpoints Disponibles](#endpoints-disponibles)
-   [Documentación API](#documentación-api)
-   [Seguridad](#seguridad)
-   [Tecnologías Utilizadas](#tecnologías-utilizadas)
-   [Scripts Disponibles](#scripts-disponibles)
-   [Contribuciones](#contribuciones)
-   [Licencia](#licencia)
-   [Contacto](#contacto)

------------------------------------------------------------------------

## Características

-   API RESTful completa para gestión de productos\
-   Autenticación JWT para endpoints protegidos\
-   Validación de datos robusta con express-validator\
-   Encriptación de contraseñas con bcryptjs\
-   Almacenamiento en la nube con Azure Blob Storage\
-   CORS habilitado para múltiples orígenes\
-   Swagger UI para documentación interactiva\
-   TypeScript para tipado estático\
-   UUID para identificadores únicos\
-   Conexión a MySQL con pool de conexiones

------------------------------------------------------------------------

## Arquitectura

El proyecto sigue una arquitectura basada en el patrón **MVC
(Model-View-Controller)** adaptado para API REST:

-   Routes: Definen los endpoints y delegan la lógica.
-   Controllers: Contienen la lógica de negocio.
-   Models: Representan las entidades del dominio.
-   Middleware: Manejo de autenticación, validación y errores.
-   Database Layer: Pool de conexiones centralizado para MySQL.
-   Manejo global de errores: Middleware centralizado para respuestas
    consistentes.

------------------------------------------------------------------------

## Requisitos Previos

-   Node.js versión 20 o superior
-   npm o yarn
-   MySQL 5.7 o superior
-   Git
-   (Opcional) Cuenta de Azure

------------------------------------------------------------------------

## Instalación

### 1. Clonar el repositorio

``` bash
git clone https://github.com/JhoamSebastianMunoz/microservice_backend_products.git
cd microservice_backend_products
```

### 2. Instalar dependencias

``` bash
npm install
```

### 3. Crear archivo `.env`

``` env
# Base de Datos MySQL
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=nombre_base_datos
DB_USER=nombre_usuario
DB_PASSWORD=contraseña_usuario

# Servidor
PORT=3000
NODE_ENV=development

# JWT
JWT_SECRET=tu_clave_secreta_jwt_muy_segura
JWT_EXPIRES_IN=7d

# Azure Storage (Opcional)
AZURE_STORAGE_CONNECTION_STRING=tu_connection_string_azure
AZURE_STORAGE_CONTAINER_NAME=nombre_contenedor

# CORS
CORS_ORIGIN=http://localhost:3000
```

### 4. Compilar TypeScript

``` bash
npm run build
```

### 5. Ejecutar migraciones

``` bash
mysql -h localhost -u tu_usuario -p tu_base_datos < database/schema.sql
```

------------------------------------------------------------------------

## Configuración

### Variables de Entorno
```
  Variable                          Descripción        Obligatoria
  --------------------------------- ------------------ -------------
  DB_HOST                           Host MySQL         Sí
  DB_PORT                           Puerto MySQL       Sí
  DB_DATABASE                       Nombre BD          Sí
  DB_USER                           Usuario MySQL      Sí
  DB_PASSWORD                       Contraseña MySQL   Sí
  PORT                              Puerto servidor    No (3000)
  JWT_SECRET                        Clave JWT          Sí
  AZURE_STORAGE_CONNECTION_STRING   Azure Storage      No
```
------------------------------------------------------------------------

## Uso

### Modo Desarrollo

``` bash
npm run build -- --watch
```

``` bash
npm start
```

Servidor disponible en:
``` bash
http://localhost:3000
```
### Modo Producción

``` bash
npm run build
npm start
```

------------------------------------------------------------------------

## Estructura del Proyecto

```
microservice_backend_products/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── database/
│   ├── validators/
│   └── utils/
├── dist/
├── database/
│   └── schema.sql
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

------------------------------------------------------------------------

## Endpoints Disponibles

### Autenticación
```
  Método   Endpoint             Descripción         Auth
  -------- -------------------- ------------------- ------
  POST     /api/auth/register   Registrar usuario   No
  POST     /api/auth/login      Iniciar sesión      No
  POST     /api/auth/refresh    Refrescar token     Sí
```
### Productos
```
  Método   Endpoint                  Descripción           Auth
  -------- ------------------------- --------------------- ------
  GET      /api/products             Listar productos      No
  GET      /api/products/:id         Obtener producto      No
  POST     /api/products             Crear producto        Sí
  PUT      /api/products/:id         Actualizar producto   Sí
  DELETE   /api/products/:id         Eliminar producto     Sí
  POST     /api/products/:id/image   Subir imagen          Sí
```
------------------------------------------------------------------------

## Documentación API

Swagger UI disponible en:
``` bash
http://localhost:3000/api-docs
```
------------------------------------------------------------------------

## Seguridad

-   Autenticación JWT con expiración
-   Encriptación de contraseñas con bcryptjs
-   Validación de datos con express-validator
-   Middleware de autorización
-   Configuración CORS por entorno
-   Azure Blob Storage seguro

------------------------------------------------------------------------

## Tecnologías Utilizadas

-   Express.js
-   TypeScript
-   MySQL2
-   jsonwebtoken
-   bcryptjs
-   express-validator
-   @azure/storage-blob
-   multer
-   uuid
-   cors
-   dotenv
-   swagger-jsdoc
-   swagger-ui-express

------------------------------------------------------------------------

## Scripts Disponibles

``` bash
npm run build
tsc -w
npm start
npm test
```

------------------------------------------------------------------------

## Contribuciones

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mi-feature`)
3. Commit tus cambios (`git commit -m 'Añade mi feature'`)
4. Push a la rama (`git push origin feature/mi-feature`)
5. Abre un Pull Request

------------------------------------------------------------------------

## Licencia

Licencia ISC.

------------------------------------------------------------------------

## Contacto

- Autor: Jhoam Sebastián Muñoz\
- GitHub: https://github.com/JhoamSebastianMunoz\
- Email: jhoamsebastian68@gmail.com

