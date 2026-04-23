# TN Online - Documentación del Proyecto

## Descripción General

**TN Online** es una plataforma de e-commerce completa y moderna para venta online con un sistema de gestión de productos, carrito de compras, autenticación de usuarios, y procesamiento de pedidos.

## Tecnologías Utilizadas

### Frontend
- **React 18** - Librería de interfaz de usuario
- **React Router v6** - Enrutamiento de páginas
- **Axios** - Cliente HTTP para API
- **CSS3** - Estilos personalizados

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MySQL2** - Driver de base de datos
- **JWT** - Autenticación segura
- **bcryptjs** - Encriptación de contraseñas

### Base de Datos
- **MySQL** - Sistema de gestión de base de datos relacional

## Funcionalidades Principales

### 1. Autenticación y Usuarios 👤
- ✅ Registro de nuevos usuarios
- ✅ Login seguro con JWT
- ✅ Roles: usuario y admin
- ✅ Contraseñas encriptadas con bcryptjs

### 2. Catálogo de Productos 🛍️
- ✅ Listado completo de productos
- ✅ Búsqueda por nombre
- ✅ Filtrado por categoría
- ✅ Paginación
- ✅ Información detallada del producto
- ✅ Control de stock

### 3. Carrito de Compras 🛒
- ✅ Agregar productos al carrito
- ✅ Modificar cantidad de productos
- ✅ Eliminar productos del carrito
- ✅ Cálculo automático del total
- ✅ Persistencia de carrito por usuario

### 4. Gestión de Pedidos 📦
- ✅ Crear pedidos desde el carrito
- ✅ Seguimiento de pedidos
- ✅ Estados de pedido: pendiente, pagado, enviado, entregado
- ✅ Historial de compras del usuario

### 5. Sistema de Pagos 💳
- ✅ Múltiples métodos de pago
- ✅ Procesamiento de pagos
- ✅ Registro de transacciones
- ✅ Números de referencia de pago

### 6. Panel de Administración 🔧
- ✅ Gestión de productos (crear, editar)
- ✅ Gestión de usuarios
- ✅ Visualización de pedidos
- ✅ Reportes de ventas

## Estructura de Carpetas

```
tn-online/
├── backend/
│   ├── config/
│   │   └── database.js           # Configuración de MySQL
│   ├── middleware/
│   │   └── auth.js               # Middleware de autenticación JWT
│   ├── routes/
│   │   ├── usuarios.js           # Rutas de autenticación
│   │   ├── productos.js          # Rutas de productos
│   │   ├── carrito.js            # Rutas de carrito
│   │   ├── pedidos.js            # Rutas de pedidos
│   │   └── pagos.js              # Rutas de pagos
│   ├── server.js                 # Archivo principal del servidor
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js         # Barra de navegación
│   │   ├── pages/
│   │   │   ├── Home.js           # Página de inicio
│   │   │   ├── Productos.js      # Página de productos
│   │   │   ├── Carrito.js        # Página de carrito
│   │   │   ├── Login.js          # Página de login
│   │   │   ├── Registro.js       # Página de registro
│   │   │   └── MisPedidos.js     # Página de mis pedidos
│   │   ├── services/
│   │   │   └── api.js            # Servicios de API
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── Home.css
│   │   │   ├── Auth.css
│   │   │   ├── Productos.css
│   │   │   ├── Carrito.css
│   │   │   ├── Pedidos.css
│   │   │   └── App.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
├── database/
│   └── schema.sql                # Script de base de datos
└── docs/
    └── INSTALACION.md            # Guía de instalación
```

## API Endpoints

### Autenticación
- `POST /api/usuarios/registro` - Registrar nuevo usuario
- `POST /api/usuarios/login` - Iniciar sesión

### Productos
- `GET /api/productos` - Obtener todos los productos
- `GET /api/productos/:id` - Obtener un producto específico
- `POST /api/productos` - Crear producto (admin)
- `PUT /api/productos/:id` - Actualizar producto (admin)

### Carrito
- `GET /api/carrito` - Obtener carrito del usuario
- `POST /api/carrito/agregar` - Agregar producto al carrito
- `DELETE /api/carrito/:id` - Eliminar producto del carrito

### Pedidos
- `POST /api/pedidos` - Crear un pedido
- `GET /api/pedidos` - Obtener mis pedidos
- `GET /api/pedidos/admin/todos` - Obtener todos los pedidos (admin)

### Pagos
- `POST /api/pagos/procesar` - Procesar pago

## Variables de Entorno

### Backend (.env)
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=contraseña
DB_NAME=tn_online
DB_PORT=3306
PORT=5000
NODE_ENV=development
JWT_SECRET=tu_clave_secreta
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_APP_NAME=TN Online
```

## Flujo de Compra

1. **Registro/Login** - El usuario se crea una cuenta o inicia sesión
2. **Explorar productos** - Navega por el catálogo y busca productos
3. **Agregar al carrito** - Selecciona cantidad y agrega al carrito
4. **Revisar carrito** - Verifica los items y el total
5. **Checkout** - Proporciona dirección y método de pago
6. **Pagar** - Completa el pago
7. **Confirmación** - Recibe número de pedido y referencia

## Seguridad

- ✅ Contraseñas encriptadas con bcryptjs
- ✅ Autenticación con JWT
- ✅ Tokens con expiración de 7 días
- ✅ Validación de entrada en el backend
- ✅ CORS configurado
- ✅ Middleware de autenticación en rutas protegidas
- ✅ Roles de usuario (admin/usuario)

## Mejoras Futuras

- [ ] Integración con pasarela de pagos real (Stripe, Mercado Pago)
- [ ] Sistema de notificaciones por email
- [ ] Carrito persistente en localStorage
- [ ] Historial de búsqueda
- [ ] Sistema de valoraciones y comentarios
- [ ] Cupones de descuento
- [ ] Envíos y tracking
- [ ] Sistema de recomendaciones
- [ ] Integración con redes sociales
- [ ] App móvil

## Troubleshooting

### No conecta a la base de datos
- Verifica que MySQL esté corriendo
- Revisa las credenciales en `.env`
- Verifica que la base de datos `tn_online` existe

### Error CORS
- Asegúrate que `FRONTEND_URL` sea correcto en el backend
- Verifica que el frontend esté en la URL especificada

### Token inválido
- Limpia localStorage en el navegador
- Vuelve a hacer login
- Verifica que `JWT_SECRET` sea igual en ambos lados

## Soporte y Contribuciones

Para reportar problemas o contribuir, abre un issue en GitHub.

---

**Última actualización:** 2026-04-23
