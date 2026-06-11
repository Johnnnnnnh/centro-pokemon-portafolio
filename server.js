const express=require("express");const app=express();app.listen(3000);
app.post("/contacto", (req, res) => {

    const { nombre, correo, mensaje } = req.body;

    // Guardar en MySQL

    res.json({
        mensaje: "Mensaje enviado correctamente."
    });

});