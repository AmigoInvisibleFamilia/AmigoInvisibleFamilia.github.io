# 🎁 Amigo Invisible

Este es un sitio web simple y rápido para registrar participantes del juego *Amigo Invisible*.  
Cada persona completa un formulario con su nombre, apellido, teléfono y gustos personales, y el sistema envía los datos a un Google Sheet para organizar el sorteo.

---

## 📌 Funcionalidades

- Formulario moderno y responsive
- Selección del código telefónico (Uruguay +598 / Argentina +54)
- Unificación automática del número con su prefijo (ej: +59891000000)
- Envío de los datos directamente a Google Sheets usando Google Apps Script
- Protección contra recarga de página y doble envío
- Estilo limpio y visual basado en HTML + CSS

---

## 🚀 Tecnologías utilizadas

- **HTML5** para la estructura del sitio
- **CSS3** para el diseño visual
- **JavaScript** para manejar el envío del formulario
- **Google Apps Script** como backend para almacenar los datos
- **Google Sheets** como base de datos
- **GitHub Pages** para publicar el sitio

---

## 🛠 Cómo funciona

1. El usuario completa el formulario
2. El script une el código del país con el número de teléfono
3. Se envía la información mediante `fetch()` a un Google Apps Script
4. Google Apps Script guarda la información en una hoja de cálculo
5. El formulario se resetea y confirma el envío

---

## 📦 Archivos del proyecto

- `index.html` → Página principal del sitio
- `styles.css` → Estilos del formulario
- `script.js` (opcional si lo usaste) → Lógica del envío del formulario
- `README.md` → Este archivo
- `_config.yml` → Configuración para GitHub Pages (tema, título, descripción)

---

## 🌐 Publicación en GitHub Pages

Este sitio está publicado usando **GitHub Pages**.  
Para ver el sitio en vivo:

👉 https://AmigoInvisibleFamilia.github.io
---

## 🔧 Configuración adicional (opcional)

Podés editar el archivo `_config.yml` para:

- Cambiar el tema visual de GitHub Pages
- Editar el título del sitio
- Definir una descripción

Ejemplo:

```yml
theme: jekyll-theme-minimal
title: Amigo Invisible
description: Formulario para registrar participantes y gustos para el sorteo.
