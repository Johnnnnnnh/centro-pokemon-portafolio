console.log("app.js cargado");

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formContacto");
    if (!formulario) {
        console.error("No se encontró #formContacto en el DOM");
        return;
    }
    console.log("Formulario encontrado");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Submit capturado");

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const mensaje = document.getElementById("mensaje").value;

        console.log("Datos a enviar:", { nombre, correo, mensaje });

        fetch("/contacto", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, correo, mensaje })
        })
        .then(async res => {
            const text = await res.text();
            console.log("Respuesta cruda del servidor:", res.status, text);
            try {
                return JSON.parse(text);
            } catch {
                return { success: false, raw: text };
            }
        })
        .then(data => {
            console.log("JSON parseado:", data);
            if (data.success) {
                alert("Solicitud de contacto enviada correctamente.");
            } else {
                alert("Hubo un problema al enviar tu mensaje.");
            }
        })
        .catch(err => {
            alert("Error de conexión con el servidor.");
            console.error("Fetch error:", err);
        });
    });
});
