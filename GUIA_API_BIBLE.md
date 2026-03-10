# Guía de Uso de API.Bible (Scripture API)

Esta guía detalla las capacidades de **API.Bible**, la plataforma principal que estamos utilizando para extraer los textos sagrados de la **Reina Valera 1960** en este proyecto.

## 1. Configuración del Proyecto

En este proyecto, la API está configurada mediante variables de entorno en el archivo `.env`:

*   **VITE_BIBLE_API_KEY**: Tu llave personal de acceso.
*   **BIBLE_ID**: `599a2f656158401f-01` (ID específico de la versión Reina Valera 1960).

## 2. Capacidades Principales

La API permite navegar por la Biblia en múltiples niveles:

### A. Listar Biblias (`/v1/bibles`)
Permite obtener todas las versiones disponibles en el mundo (más de 2,500 versiones en 1,600 idiomas).
*   **Uso:** Filtrar por idioma (`language=spa`) para ver todas las versiones en español.

### B. Listar Libros (`/v1/bibles/{bibleId}/books`)
Obtiene la lista de los 66 libros de la Biblia (o más, según la versión).
*   **Campos útiles:** ID del libro (ej: `MAT` para Mateo, `JHN` para Juan), nombre completo y abreviatura.

### C. Obtener Capítulos (`/v1/bibles/{bibleId}/books/{bookId}/chapters`)
Lista todos los capítulos de un libro específico.
*   **Ejemplo:** `/v1/bibles/.../books/JHN/chapters` para ver los 21 capítulos de Juan.

### D. Obtener Contenido de un Capítulo (`/v1/bibles/{bibleId}/chapters/{chapterId}`)
Extrae el texto completo de un capítulo.
*   **Formatos:** Se puede pedir como HTML (ideal para la web) o texto plano.
*   **Parámetros:** Se puede incluir o quitar números de versículos, títulos de secciones y notas al pie.

### E. Pasajes Específicos (`/v1/bibles/{bibleId}/passages/{passageId}`)
Es lo que usamos para el **Evangelio del Día**. Permite pedir un rango exacto.
*   **Ejemplo:** `JHN.3.16-JHN.3.17` para obtener Juan 3:16-17.

### F. Búsqueda (`/v1/bibles/{bibleId}/search`)
Permite buscar palabras clave o frases en toda la Biblia.
*   **Uso:** `query=Jesús` devolverá todos los versículos donde aparece esa palabra.

## 3. Implementación en este Proyecto

Actualmente, el componente `EvangelioDelDia.jsx` realiza el siguiente flujo:

1.  **Consulta Litúrgica:** Llama a Evangelizo para saber qué pasaje toca hoy (ej: "Mt 18,21-35").
2.  **Traducción de Referencia:** Convierte ese formato al estándar de la API (ej: `MAT.18.21-MAT.18.35`).
3.  **Llamada a API.Bible:** Solicita el contenido exacto en la versión RVR1960.
4.  **Limpieza:** El código elimina etiquetas HTML innecesarias para mostrar un texto limpio y elegante.

## 4. Consejos Técnicos

*   **HTML Dinámico:** La API devuelve el texto con clases de CSS predefinidas (como `.v` para versículos). Puedes darles estilo en `index.css`.
*   **Límites:** Ten en cuenta los límites de tu plan (normalmente 5,000 peticiones al día en el plan gratuito).
*   **Seguridad:** Nunca compartas tu `API_KEY` públicamente. Por eso la tenemos protegida en el archivo `.env`.

---
*Documentación generada para el proyecto "La Palabra que se hizo carne".*
