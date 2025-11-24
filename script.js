window.addEventListener("load", inicio);

function inicio() {
    const form = document.querySelector("form");
    const boton = document.querySelector(".btn-primary");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Mostrar mensaje y deshabilitar botón
        boton.disabled = true;
        boton.innerText = "Enviando datos...";

        const datos = {
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            telefono_completo: "'"+document.getElementById("codigo").value + document.getElementById("telefono").value,
            descripcion: document.getElementById("descripcion").value
        };

        const url = "https://script.google.com/macros/s/AKfycbyNq3eKS90wQfhw4vive3O3VjL0Gzh4yc0wuYRZ5_fXbJ436KB5hSWFTbPZEl6MNv-FLQ/exec";

        try {
            await fetch(url, {
                method: "POST",
                body: JSON.stringify(datos)
            });

            // Mensaje de éxito
            alert("🎉 ¡Datos enviados correctamente!");

            form.reset();
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error al enviar los datos.");
        }

        // Restaurar botón
        boton.disabled = false;
        boton.innerText = "Enviar datos";
    });
}

