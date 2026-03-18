import React from "react";
import "../pages.css";

export function TeologiaHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Enfoque Teológico de Hechos</h1>
        <p className="subtitle">
          Una teología de la historia de la salvación en movimiento constante.
        </p>
      </header>

      <section className="content-section card">
        <h2 style={{ fontSize: "1.8rem" }}>La Continuidad del Pueblo de Dios</h2>
        <p>
          Lucas se esfuerza por demostrar que el Cristianismo no es una religión
          nueva que "cancela" al Antiguo Testamento. Es el cumplimiento preciso
          de las promesas que Dios hizo a Israel. En cada discurso, los apóstoles
          conectan la resurrección de Jesús con las Escrituras hebreas, declarando
          que quienes rechazan la resurrección se han apartado de la verdadera
          esperanza judía.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent bg-accent-light">
          <h2>La Promesa de Abraham Cumplida</h2>
          <p>
            El sermón de Pedro en Pentecostés y el de Pablo en Antioquía de
            Pisidia (Hechos 13) presentan la resurrección de Jesús como el
            cumplimiento de la promesa hecha a Abraham: que en su descendencia
            serían benditas todas las familias de la tierra, un "todas" que ahora
            incluye explícitamente a los gentiles.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>La Apologética Cristiana</h2>
          <p>
            Hechos contiene numerosos discursos formales ante multitudes judías,
            filósofos griegos (Areópago) y gobernadores romanos. Los apóstoles
            defienden la fe apelando a las Escrituras, la argumentación lógica y
            el testimonio innegable de la resurrección, estableciendo el modelo
            de la apologética cristiana para todos los siglos.
          </p>
        </section>
      </div>

      <section className="content-section card">
        <h2>Un Reino Espiritual, No Político</h2>
        <p>
          Al principio, incluso los apóstoles esperaban que Jesús restaurara el
          reino político de Israel de inmediato (Hechos 1:6). Hechos reorienta
          esa expectativa: el "Reino" se está estableciendo ahora mismo como el
          señorío espiritual de Cristo resucitado, extendiéndose en corazones y
          culturas a través del testimonio apostólico sufriente y lleno del Espíritu.
          <br /><br />
          La geografía del libro —de Jerusalén a Roma— es una metáfora teológica:
          el evangelio viaja del centro del mundo judío al centro del poder
          romano, afirmando que ningún reino humano puede contenerlo.
        </p>
      </section>
    </div>
  );
}
