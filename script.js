window.addEventListener("load", inicio);

function inicio() {
  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault(); // evitar que recargue la página
    const codigo = document.getElementById("codigo").value;
    const telefono = document.getElementById("telefono").value;

    const datos = {
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      telefono_completo:
        "'"+document.getElementById("codigo").value +
        document.getElementById("telefono").value,
      descripcion: document.getElementById("descripcion").value,
    };

    const url =
      "https://script.google.com/macros/s/AKfycbyNq3eKS90wQfhw4vive3O3VjL0Gzh4yc0wuYRZ5_fXbJ436KB5hSWFTbPZEl6MNv-FLQ/exec";

    try {
      const respuesta = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      // Mensaje de éxito
      alert("🎉 ¡Tus datos fueron registrados correctamente!");
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al enviar los datos 😕");
    }
  });
}
