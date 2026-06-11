console.log("Centro Pokemon");
const formulario = document.getElementById("formContacto");

if (formulario) {

    formulario.addEventListener("submit", async function (e) {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const respuesta = document.getElementById("respuestaFormulario");

        if (nombre.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            return;
        }

        if (!correo.includes("@")) {
            alert("Debes ingresar un correo válido.");
            return;
        }

        if (mensaje.length < 5) {
            alert("El mensaje debe tener al menos 5 caracteres.");
            return;
        }

        try {

            const resultado = await fetch("http://localhost:3000/contacto", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre,
                    correo,
                    mensaje
                })
            });

            const datos = await resultado.json();

            respuesta.textContent = datos.mensaje;

            formulario.reset();

        } catch (error) {

            respuesta.textContent =
                "No fue posible enviar el mensaje.";

            console.error(error);
        }

    });

}