# Guía de Uso de API Evangelizo (Liturgia Diaria)

Esta guía explica cómo extraer información del calendario litúrgico utilizando la API de **Evangelizo**, la cual estamos usando en este proyecto para determinar qué pasaje de la Biblia corresponde al día de hoy.

## 1. Endpoint Principal
El acceso se realiza a través del siguiente URL base:
`https://feed.evangelizo.org/v2/reader.php`

## 2. Parámetros de Consulta (Query Params)

Para obtener información específica, se deben combinar los siguientes parámetros:

### A. Idioma (`lang`)
Define el idioma de la respuesta.
*   **SP**: Español (el que usamos nosotros)
*   **EN**: Inglés
*   **FR**: Francés
*   **IT**: Italiano
*   **PT**: Portugués
*   **DE**: Alemán

### B. Fecha (`date`)
Formato: `YYYYMMDD` (Año, Mes, Día).
*   Si no se envía, la API devuelve la información del día actual.
*   **Ejemplo:** `20260310` para el 10 de marzo de 2026.

### C. Tipo de Información (`type`)
Define qué categoría de datos deseas recibir:
*   **`reading`**: Lecturas de la misa (Gospel, lecturas, salmos).
*   **`saint`**: Información sobre el santo del día (Nombre y biografía).
*   **`feast`**: Festividades o celebraciones especiales.
*   **`commentary`**: Comentarios espirituales sobre el evangelio.
*   **`all`**: Devuelve TODO el contenido litúrgico del día en un solo bloque.

### D. Contenido Específico (`content`)
Se usa principalmente cuando `type=reading`. Los valores más comunes son:
*   **`GSP`**: El Evangelio del día.
*   **`RD1`**: Primera lectura.
*   **`PSL`**: El Salmo responsorial (si este parámetro falla, se puede encontrar dentro de `type=reading` general o `type=all`).

## 3. Ejemplo de Uso en este Proyecto

### Obtener el Evangelio:
`https://feed.evangelizo.org/v2/reader.php?lang=SP&type=reading&content=GSP`

### Obtener el Santo del Día:
`https://feed.evangelizo.org/v2/reader.php?lang=SP&type=saint`

### Obtener el Salmo del Día:
`https://feed.evangelizo.org/v2/reader.php?lang=SP&type=reading` (y buscar la sección del Salmo).

**Lo que devuelve la API:**
1.  **Título**: "Evangelio de nuestro Señor Jesucristo según..."
2.  **Referencia**: La cita bíblica (ej: "Mt 18,21-35").
3.  **Texto**: El texto completo de la Biblia (aunque nosotros usamos este valor solo de respaldo, ya que preferimos la versión RVR1960 de la otra API).

## 4. Por qué usamos esta API
La usamos únicamente como un **"índice"**. Evangelizo nos dice qué parte de la Biblia leer hoy, y con esa información vamos a la API.Bible para traer el texto exacto en la versión Reina Valera 1960.

---
*Documentación generada para el proyecto "La Palabra que se hizo carne".*
