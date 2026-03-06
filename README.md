# El Evangelio de Juan - Estudio Bíblico y Teológico

Una página web educativa, profunda y moderna dedicada a explorar el Cuarto Evangelio bíblico. Construida como una Single Page Application (SPA) para ofrecer una experiencia de lectura fluida y enriquecedora.

## 📖 Características Principales

- **Texto Bíblico Completo**: Los 21 capítulos del Evangelio de Juan (versión Reina Valera 1960).
- **Análisis Teológico**: Cada capítulo incluye un resumen, interpretación teológica profunda, símbolos clave y contexto histórico.
- **Secciones Temáticas**: Artículos detallados sobre la autora, contexto, estructura general, los grandes temas (Logos, Luz/Tinieblas, "Yo Soy") y pasajes clave de la obra joánica.
- **Diseño Editorial y Premium**: Creado con un enfoque en la legibilidad, utilizando una paleta de colores crema/pergamino elegante y tipografías hermosas (Playfair Display, Lora, Inter).
- **Navegación Intuitiva**: Sidebar persistente y responsivo para facilitar el paso de una sección a otra de manera inmediata sin recargar la página.

## 💻 Stack Tecnológico

- **Frontend**: React.js 18
- **Routing**: React Router DOM (v6) para navegación SPA.
- **Herramienta de Construcción**: Vite
- **Estilos**: Vanilla CSS con variables nativas para un control estricto de la tipografía y el color, libre de dependencias pesadas.
- **Iconografía**: Lucide React.
- **Fuente de Datos Bíblicos (Inicial)**: \`bible-api.deno.dev\` (Los datos fueron obtenidos y almacenados estáticamente en \`src/data/capitulos.json\`).

## 🚀 Cómo ejecutar el proyecto localmente

1.  Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
2.  Clona o descarga este repositorio.
3.  Abre una terminal en el directorio del proyecto y ejecuta la instalación de dependencias:
    \`\`\`bash
    npm install
    \`\`\`
4.  Inicia el servidor de desarrollo:
    \`\`\`bash
    npm run dev
    \`\`\`
5.  Abre tu navegador y visita la URL proporcionada (usualmente \`http://localhost:5173\`).

## 📁 Estructura del Proyecto

\`\`\`text
evangelio-de-juan/
├── public/ # Archivos estáticos
├── scripts/
│ └── fetch-bible.js # Script usado para descargar el texto bíblico
├── src/
│ ├── components/ # Componentes reusables (Layout, Sidebar, Navbar)
│ ├── data/ # Contenido estático
│ │ └── capitulos.json # Base de datos centralizada de texto bíblico y exégesis
│ ├── pages/ # Las 8 secciones/vistas principales
│ ├── App.jsx # Componente de enrutamiento principal (React Router)
│ ├── index.css # Sistema de diseño, variables y resets
│ └── main.jsx # Punto de entrada de React
└── README.md
\`\`\`

## 📚 Secciones Informativas Incluidas

1.  **Introducción**: Autor, fecha y diferencias con los evangelios sinópticos.
2.  **Estructura del Evangelio**: Prólogo, Libro de Signos, Libro de Gloria y Epílogo.
3.  **Capítulos**: Lector interactivo versículo a versículo con notas técnicas por capítulo.
4.  **Temas principales**: El Verbo, la Vida, el Amor y los "YO SOY".
5.  **Pasajes clave**: Explicación de narrativas cumbre (Nicodemo, Lázaro, Samaritana).
6.  **Por qué es más teológico**: Análisis del doble nivel simbólico y la cristología exaltada.
7.  **Datos históricos interesantes**: La comunidad efesia y crisis con el judaísmo del siglo I.
8.  **Conclusión**: Resumen espiritual.
