import React from "react";
import "../pages.css";

export function EstructuraLucas() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Estructura de Lucas</h1>
        <p className="subtitle">
          Un viaje narrativo desde Galilea hasta Jerusalén y más allá.
        </p>
      </header>

      <section className="content-section card">
        <p>
          A diferencia de Mateo (cinco discursos) o Marcos (narrativa urgente),
          Lucas sigue una estructura de <em>viaje progresivo</em>. Todo el
          evangelio está organizado geográficamente alrededor del camino
          decisivo de Jesús desde Galilea hacia Jerusalén, donde se cumple su
          destino redentor.
        </p>
      </section>

      <div
        className="features-grid"
        style={{ gridTemplateColumns: "1fr", gap: "2rem" }}
      >
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>1. Prólogo e Infancia (Lucas 1-2)</h2>
          <p>
            Lucas dedica dos capítulos enteros a los nacimientos de Juan el
            Bautista y de Jesús, incluyendo los cánticos de María (Magnificat),
            Zacarías (Benedictus) y Simeón (Nunc Dimittis), y la única escena
            evangélica de la niñez de Jesús: su visita al Templo a los 12 años.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Carácter:</strong> Literariamente refinado, evoca el
              estilo del Antiguo Testamento
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>2. Preparación del Ministerio (Lucas 3-4)</h2>
          <p>
            Juan bautiza, Jesús es bautizado y genealogía (hasta Adán, no hasta
            Abraham, mostrando su conexión con toda la humanidad). La tentación
            en el desierto y el primer sermón en Nazaret donde cita a Isaías:
            "El Espíritu del Señor está sobre mí..."
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Versículo clave:</strong> "Hoy se ha cumplido esta
              Escritura delante de vosotros." (4:21)
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>3. El Gran Ministerio en Galilea (Lucas 5-9)</h2>
          <p>
            Llamado de los discípulos, el Sermón del Llano (versión lucana del
            Sermón del Monte), milagros, la misión de los doce, la
            Transfiguración y el comienzo del "viaje a Jerusalén".
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Hito:</strong> La confesión de Pedro (9:20) marca el giro
              narrativo central
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>4. El Gran Viaje hacia Jerusalén (Lucas 9:51 – 19:44)</h2>
          <p>
            La sección más extensa y exclusiva de Lucas. Contiene la mayoría de
            sus parábolas únicas: el Buen Samaritano, el Hijo Pródigo, el Rico y
            Lázaro, el Fariseo y el Publicano. También la misión de los setenta,
            el episodio de Zaqueo y muchas más enseñanzas.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Tema dominante:</strong> El corazón del discipulado y la
              gracia universal
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>5. Jerusalén: Pasión y Resurrección (Lucas 19:45 – 24)</h2>
          <p>
            La entrada triunfal, enseñanza en el Templo, la Última Cena con
            palabras de institución de la Eucaristía, el huerto, la cruz, y el
            relato de Resurrección más detallado: los discípulos de Emaús y las
            apariciones del Jesús resucitado.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Final único:</strong> Lucas termina con la Ascensión de
              Jesús, que retoma en Hechos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
