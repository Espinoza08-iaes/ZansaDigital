# HTML

A modern HTML project utilizing Tailwind CSS for building responsive web applications with minimal setup.

## 🚀 Features

- **HTML5** - Modern HTML structure with best practices
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Custom Components** - Pre-built component classes for buttons and containers
- **NPM Scripts** - Easy-to-use commands for development and building
- **Responsive Design** - Mobile-first approach for all screen sizes

## 📋 Prerequisites

- Node.js (v12.x or higher)
- npm or yarn

## 🛠️ Installation

# ZansaDigital

Repositorio del sitio y backend de Zansa Digital — páginas HTML estáticas con Tailwind CSS y un pequeño backend en Node.js para gestionar contactos.

Contenido principal
- Frontend: páginas estáticas en `Pages/`, archivo de entrada `index.html`, estilos en `Css/` y configuración en `tailwind.config.js`.
- Backend: carpeta `backend/` con un servidor Express (API `/api/contact`), scripts auxiliares y SQL para crear la base de datos.
- Assets: `public/` contiene imágenes y scripts de cliente (por ejemplo `public/js/i18n.js`).

Estado del repo
- Este README fue actualizado para reflejar la estructura y los scripts presentes en el repositorio local.

Índice
- Requisitos
- Instalación y ejecución (Frontend)
- Instalación y ejecución (Backend)
- Scripts útiles
- Base de datos
- Estructura de carpetas
- Buenas prácticas y seguridad

Requisitos
- Node.js v14+ (recomendado) y npm
- MySQL (o MariaDB) si quieres usar el backend con persistencia local

Instalación y ejecución (Frontend)

1. Desde la raíz del repositorio instala dependencias de frontend (solo si deseas compilar CSS con Tailwind):

```powershell
npm install
```

2. Para desarrollar y compilar CSS con Tailwind (comandos definidos en `package.json`):

```powershell
npm run dev        # Observa cambios y recompila CSS
npm run build:css  # Compila CSS listo para producción
```

3. Abrir `index.html` o servir el directorio con un servidor estático (ej. `npx http-server` o via Live Server en VSCode).

Instalación y ejecución (Backend)

1. Ir a la carpeta `backend` e instalar dependencias:

```powershell
cd backend
npm install
```

2. Crear un archivo `backend/.env` a partir de `backend/.env.example` y configurar las credenciales de MySQL:

```text
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASS=tu_password
DB_NAME=zansadb
```

3. Ejecutar el servidor:

```powershell
npm start
```

El backend expone:
- GET / => mensaje de estado
- POST /api/contact => guarda los datos del formulario en la tabla `contactos` (ver `backend/controllers/contactController.js`).

Scripts útiles (en `backend/scripts`)
- `run_create_table.js` — Ejecuta `backend/sql/create_table.sql` desde Node.js para crear la base de datos y la tabla `contactos`.
	- Uso desde la raíz:
		```powershell
		cd backend
		node scripts/run_create_table.js
		```
- `insert_test_contact.js` — Inserta un contacto de prueba usando las credenciales del `.env`.
	- Uso:
		```powershell
		cd backend
		node scripts/insert_test_contact.js
		```
- `check_contactos.js` — Muestra los últimos contactos guardados (limit 10).

Base de datos

El archivo SQL principal es `backend/sql/create_table.sql`. Crea la base de datos `zansadb` y la tabla `contactos` con las columnas:

- id (BIGINT AUTO_INCREMENT PRIMARY KEY)
- name, company, email, phone, project_type, budget, timeline (varios VARCHAR)
- description (TEXT)
- comm_prefs (VARCHAR) — preferencias de comunicación
- created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)

Estructura de carpetas (resumen)

```
.
├── backend/
│   ├── controllers/       # Lógica para guardar contactos
│   ├── db/                # Pool MySQL (mysqlPool.js)
│   ├── routes/            # Rutas Express (contact.js)
│   ├── scripts/           # Scripts: run_create_table, insert_test_contact, check_contactos
│   ├── sql/               # create_table.sql
│   ├── .env.example
	 │   └── index.js        # Servidor Express
├── Css/                   # Estilos (tailwind input + compilado)
├── Pages/                 # Páginas HTML
├── public/                # Imágenes y JS cliente (i18n.js)
├── index.html
├── package.json           # Scripts y dependencias del frontend (Tailwind)
└── tailwind.config.js
```

Buenas prácticas y seguridad
- Nunca subir credenciales ni `.env` al repositorio. `.gitignore` ya incluye `backend/.env`.
- Revisa que las URLs y keys públicas no estén expuestas en archivos de configuración.

Cómo contribuir o desplegar
- Para desplegar el frontend, sirve el contenido estático desde un host (Netlify, Vercel, S3 + CloudFront, GitHub Pages — si usas rutas relativas).
- Para desplegar el backend, configura variables de entorno seguras en el servicio (Heroku, Railway, Render, VPS) y la base de datos MySQL o usa un servicio gestionado.

Detalles técnicos (rápido)
- Backend usa Express, cors, dotenv y mysql2 (pool de conexiones en `backend/db/mysqlPool.js`).
- La ruta POST `/api/contact` procesa `comm_prefs` convertiendo arrays en una cadena CSV para almacenarla.

Problemas conocidos
- Si el remoto de GitHub ya tiene commits, al empujar desde la copia local puede requerir `git pull --rebase origin main` y resolver conflictos (ya ocurrió con `README.md`).

Contacto
- Repo remoto: https://github.com/Espinoza08-iaes/ZansaDigital

