const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",   
    user: "root",        
    password: "", 
    database: "portafolio"
});

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar a MySQL:", err);
        return;
    }
    console.log("Conexión a MySQL establecida correctamente.");
});

module.exports = connection;
