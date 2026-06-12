# Centro Pokémon - Portafolio Académico

Portafolio web con temática Pokémon que presenta contenido multimedia,
un catálogo de Pokémon destacados y un formulario de contacto conectado
a una base de datos MySQL.

## Tecnologías
- HTML, CSS, JavaScript
- Node.js + Express
- MySQL

## Estructura del proyecto
proyecto/

├── public/

│   ├── index.html

│   ├── css/estilos.css

│   └── js/app.js

├── img/

├── videos/

├── server.js

└── db.js

## Requisitos previos
- Node.js instalado
- MySQL / XAMPP corriendo

## Instalación
1. Clonar el repositorio
2. `npm install`
3. Crear la base de datos y tabla:
```sql
   CREATE DATABASE centro_pokemon;
   USE centro_pokemon;
   CREATE TABLE contactos (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nombre VARCHAR(100),
     correo VARCHAR(100),
     mensaje TEXT
   );
```
4. Editar `db.js` con tus credenciales de MySQL
5. `node server.js`
6. Abrir `http://localhost:3000`

## Funcionalidades
- Catálogo de Pokémon destacados con imágenes
- Sección de videos
- Formulario de contacto con guardado en MySQL

## Autor
John Tapia — [GitHub](https://github.com/Johnnnnnnh/centro-pokemon-portafolio)
