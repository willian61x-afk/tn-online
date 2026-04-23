# Guía de Instalación - TN Online

## Requisitos Previos

- **Node.js** v14+ (descargar desde https://nodejs.org/)
- **MySQL** v5.7+ (descargar desde https://www.mysql.com/)
- **npm** o **yarn** (viene con Node.js)
- **Git** (descargar desde https://git-scm.com/)

## Instalación del Backend

### 1. Clonar el repositorio
```bash
git clone https://github.com/willian61x-afk/tn-online.git
cd tn-online/backend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Crear base de datos
```bash
# Abre MySQL en tu terminal
mysql -u root -p

# Dentro de MySQL, ejecuta:
source ../database/schema.sql
```

### 4. Configurar variables de entorno
```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita el archivo .env con tus datos:
# - DB_PASSWORD: tu contraseña de MySQL
# - JWT_SECRET: una clave secreta fuerte
# - PAYMENT_PUBLIC_KEY y PAYMENT_SECRET_KEY: si usas pasarela de pagos
```

### 5. Iniciar el servidor
```bash
# Para desarrollo (con auto-reload)
npm run dev

# O para producción
npm start
```

El servidor estará disponible en: `http://localhost:5000`

## Instalación del Frontend

### 1. Ir a la carpeta frontend
```bash
cd ../frontend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Verifica que apunte correctamente al backend:
# REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Iniciar la aplicación
```bash
npm start
```

La aplicación se abrirá en: `http://localhost:3000`

## Pruebas Iniciales

### 1. Registrar un nuevo usuario
- Ve a `/register`
- Completa el formulario
- Haz clic en "Crear Cuenta"

### 2. Iniciar sesión
- Ve a `/login`
- Usa las credenciales que acabas de crear

### 3. Explorar productos
- Ve a `/productos`
- Busca y filtra productos
- Agrega productos al carrito

### 4. Ver carrito
- Ve a `/carrito`
- Revisa los items y el total

### 5. Acceso admin (opcional)
Si necesitas una cuenta admin para pruebas:
```sql
-- En MySQL, ejecuta:
UPDATE usuarios SET role='admin' WHERE email='tu@email.com';
```

## Estructura de Carpetas

```
tn-online/
├── backend/
│   ├── config/        # Configuración de base de datos
│   ├── middleware/    # Middlewares (autenticación, etc)
│   ├── routes/        # Rutas API
│   ├── server.js      # Archivo principal
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── .env.example
├── database/
│   └── schema.sql     # Script de base de datos
└── docs/              # Documentación
```

## Troubleshooting

### Error: "Cannot find module 'mysql2'"
Solución: Ejecuta `npm install` en la carpeta backend

### Error de conexión a MySQL
- Verifica que MySQL esté corriendo
- Revisa las credenciales en `.env`
- Asegúrate de que el usuario MySQL existe

### Puerto 5000 ya en uso
Cambia el puerto en `.env`:
```
PORT=5001
```

### CORS error
Verifica que `FRONTEND_URL` en `.env` sea correcto

## Próximos Pasos

- Implementar pasarela de pagos (Stripe, Mercado Pago)
- Agregar validaciones avanzadas
- Implementar búsqueda mejorada
- Agregar sistema de notificaciones por email
- Configurar para producción

## Soporte

Para reportar problemas, abre un issue en GitHub.
