🎁 Amigo Invisible
Este es un sitio web simple y rápido para registrar participantes del juego Amigo Invisible.
Cada persona completa un formulario con su nombre, apellido, teléfono y gustos personales, y el sistema envía los datos a un Google Sheet para organizar el sorteo.

📌 Funcionalidades
Formulario moderno y responsive
Selección del código telefónico (Uruguay +598 / Argentina +54)
Unificación automática del número con su prefijo (ej: +59891000000)
Envío de los datos directamente a Google Sheets usando Google Apps Script
Protección contra recarga de página y doble envío
Estilo limpio y visual basado en HTML + CSS
🚀 Tecnologías utilizadas
HTML5 para la estructura del sitio
CSS3 para el diseño visual
JavaScript para manejar el envío del formulario
Google Apps Script como backend para almacenar los datos
Google Sheets como base de datos
GitHub Pages para publicar el sitio
🛠 Cómo funciona
El usuario completa el formulario
El script une el código del país con el número de teléfono
Se envía la información mediante fetch() a un Google Apps Script
Google Apps Script guarda la información en una hoja de cálculo
El formulario se resetea y confirma el envío
