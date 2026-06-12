// server.js
const express = require("express");
const path = require("path");
const app = express();
const db = require("./db"); // tu db.js

app.use(express.json());

// Logger simple para todas las peticiones
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Servir carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta explícita para index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint POST para formulario de contacto
app.post("/contacto", (req, res) => {
    console.log("Body recibido:", req.body); // <-- log del body
    const { nombre, correo, mensaje } = req.body;

    const sql = "INSERT INTO contactos (nombre, correo, mensaje) VALUES (?, ?, ?)";
    db.query(sql, [nombre, correo, mensaje], (err, result) => {
        if (err) {
            console.error("Error al guardar en MySQL:", err);
            return res.status(500).json({ success: false });
        }
        console.log("Insert ID:", result.insertId);
        res.json({ success: true });
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});