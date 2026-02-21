# Microservice Backend - Productos 🛍️

Un microservicio backend robusto y escalable construido con **Express**, **TypeScript** y **MySQL** para la gestión de productos en una plataforma de e-commerce. Incluye autenticación con JWT, validación de datos, almacenamiento en Azure Blob Storage y documentación interactiva con Swagger.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Endpoints Disponibles](#endpoints-disponibles)
- [Documentación API](#documentación-api)
- [Seguridad](#seguridad)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Características

- ✅ **API RESTful** completa para gestión de productos
- ✅ **Autenticación JWT** para endpoints protegidos
- ✅ **Validación de datos** robusta con express-validator
- ✅ **Encriptación de contraseñas** con bcryptjs
- ✅ **Almacenamiento en la nube** con Azure Blob Storage
- ✅ **CORS** habilitado para acceso desde múltiples orígenes
- ✅ **Swagger UI** para documentación interactiva de la API
- ✅ **TypeScript** para tipado estático y mejor calidad de código
- ✅ **UUID** para identificadores únicos
- ✅ **Conexión a MySQL** con pool de conexiones

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:

- **Node.js** versión 20 o superior
- **npm** o **yarn** (gestor de paquetes)
- **MySQL** 5.7 o superior
- **Git** (para clonar el repositorio)
- **(Opcional) Cuenta de Azure** para almacenamiento en la nube

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/JhoamSebastianMunoz/microservice_backend_products.git
cd microservice_backend_products
```

2. Instalar dependencias
bash
npm install
3. Crear archivo de variables de entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

env
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
4. Compilar TypeScript
bash
npm run build
5. Ejecutar las migraciones de base de datos
bash
# Importa el archivo SQL de tu base de datos
mysql -h localhost -u tu_usuario -p tu_base_datos < database/schema.sql

## Configuración
Variables de Entorno
Variable	Descripción	Obligatoria
DB_HOST	Host del servidor MySQL	Sí
DB_PORT	Puerto de MySQL	Sí
DB_DATABASE	Nombre de la base de datos	Sí
DB_USER	Usuario de MySQL	Sí
DB_PASSWORD	Contraseña de MySQL	Sí
PORT	Puerto del servidor Express	No (default: 3000)
JWT_SECRET	Clave secreta para JWT	Sí
AZURE_STORAGE_CONNECTION_STRING	Conexión a Azure Storage	No
Base de Datos
Este proyecto utiliza MySQL. La estructura de tablas se define en los scripts SQL ubicados en la carpeta database/.

## Uso
Modo de Desarrollo
Terminal 1 - Compilar TypeScript en modo observador:

bash
npm run build -- --watch
O

bash
tsc -w
Terminal 2 - Ejecutar el servidor:

bash
npm start
El servidor estará disponible en http://localhost:3000

Modo de Producción
bash
npm run build
npm start

## Estructura del Proyecto
Code
microservice_backend_products/
├── src/
│   ├── app.ts                 # Configuración principal de Express
│   ├── server.ts              # Inicio del servidor
│   ├── routes/                # Rutas de la API
│   │   ├── products.routes.ts
│   │   ├── auth.routes.ts
│   │   └── ...
│   ├── controllers/           # Lógica de negocio
│   │   ├── productController.ts
│   │   ├── authController.ts
│   │   └── ...
│   ├── models/                # Modelos de datos
│   │   ├── product.ts
│   │   └── user.ts
│   ├── middleware/            # Middlewares personalizados
│   │   ├── auth.middleware.ts
│   │   ├── errorHandler.ts
│   │   └── ...
│   ├── database/              # Configuración de BD
│   │   └── connection.ts
│   ├── validators/            # Validaciones personalizadas
│   └── utils/                 # Utilidades
├── dist/                      # Código compilado (generado)
├── database/
│   └── schema.sql             # Script de estructura de BD
├── .env                       # Variables de entorno (no versionado)
├── .env.example               # Ejemplo de variables de entorno
├── .gitignore                 # Archivos ignorados por Git
├── package.json               # Dependencias del proyecto
├── tsconfig.json              # Configuración de TypeScript
├── README.md                  # Este archivo
└── .gitignore

## Endpoints Disponibles
Autenticación
Método	Endpoint	Descripción	Auth
POST	/api/auth/register	Registrar nuevo usuario	No
POST	/api/auth/login	Iniciar sesión	No
POST	/api/auth/refresh	Refrescar token JWT	Sí
Productos
Método	Endpoint	Descripción	Auth
GET	/api/products	Obtener todos los productos	No
GET	/api/products/:id	Obtener producto por ID	No
POST	/api/products	Crear nuevo producto	Sí
PUT	/api/products/:id	Actualizar producto	Sí
DELETE	/api/products/:id	Eliminar producto	Sí
POST	/api/products/:id/image	Subir imagen a Azure Storage	Sí
Ejemplo de Solicitud
bash
# Obtener todos los productos
curl -X GET http://localhost:3000/api/products

# Crear un nuevo producto (requiere autenticación)
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \ 
  -H "Authorization: Bearer tu_jwt_token" \ 
  -d '{
    "nombre": "Laptop",
    "descripcion": "Laptop de alto rendimiento",
    "precio": 1200.00,
    "stock": 10
  }'

## Documentación API
Este proyecto incluye Swagger UI para documentación interactiva.

Accede a la documentación en:

Code
http://localhost:3000/api-docs
Aquí podrás:

Ver todos los endpoints disponibles
Probar los endpoints directamente desde el navegador
Ver los esquemas de request/response

## Seguridad
Medidas de Seguridad Implementadas
Autenticación JWT

Tokens con expiración configurable
Validación en cada solicitud protegida
Encriptación de Contraseñas

Uso de bcryptjs para hashear contraseñas
Validación de contraseñas en login
Validación de Datos

express-validator para validación de inputs
Sanitización de datos de entrada
CORS

Protección contra solicitudes cross-origin no autorizadas
Configurable por variables de entorno
Azure Storage

Almacenamiento seguro de archivos en la nube
Control de acceso mediante credenciales
Mejores Prácticas Recomendadas
✅ Nunca comitear el archivo .env con credenciales reales
✅ Usar HTTPS en producción
✅ Implementar rate limiting en endpoints públicos
✅ Validar permisos en cada operación crítica
✅ Usar variables de entorno para todas las configuraciones sensibles

## Tecnologías Utilizadas

Backend Framework
Express.js ^4.19.2 - Framework web minimalista
TypeScript ^5.4.5 - Lenguaje con tipado estático

Base de Datos
MySQL2 ^3.9.6 - Driver MySQL para Node.js

Connection Pool - Para gestión eficiente de conexiones
Autenticación & Seguridad
jsonwebtoken ^9.0.2 - Implementación de JWT
bcryptjs ^2.4.3 - Encriptación de contraseñas
express-validator ^7.2.0 - Validación de datos
Almacenamiento & Archivos
@azure/storage-blob ^12.26.0 - Almacenamiento en Azure
multer ^1.4.5-lts.1 - Manejo de uploads de archivos
Utilidades
axios ^1.8.1 - Cliente HTTP
uuid ^11.0.5 - Generador de IDs únicos
cors ^2.8.5 - Habilitación de CORS
dotenv ^16.4.7 - Gestión de variables de entorno
Documentación
swagger-jsdoc ^6.2.8 - Generador de especificación Swagger
swagger-ui-express ^5.0.1 - Interfaz gráfica para Swagger
📝 Scripts Disponibles
bash
# Compilar TypeScript
npm run build

# Compilar en modo observador (desarrollo)
tsc -w

# Iniciar el servidor
npm start

# Ejecutar tests (si están configurados)
npm test

## Contribuciones
Las contribuciones son bienvenidas. Para cambios importantes:

Fork el repositorio
Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
Commit tus cambios (git commit -m 'Add some AmazingFeature')
Push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request

## Licencia
Este proyecto está bajo la licencia ISC. Ver el archivo package.json para más detalles.

📧 Contacto
Autor: Jhoam Sebastián Muñoz
GitHub: @JhoamSebastianMunoz
Email: jhoamsebastian68@gmail.com
