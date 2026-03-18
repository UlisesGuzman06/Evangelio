import React from "react";
import "../pages.css";

export function ConclusionHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Conclusión de Hechos</h1>
        <p className="subtitle">
          Una historia que se sigue escribiendo a través de la Iglesia hoy.
        </p>
      </header>

      <section className="content-section card">
        <h2 style={{ fontSize: "1.8rem" }}>Un Final Abierto e Intencional</h2>
        <p>
          El libro de los Hechos termina de una manera sorprendentemente abrupta.
          Pablo está bajo arresto domiciliario en Roma, y el libro cierra sin
          decirnos qué le sucedió finalmente. Sin embargo, Lucas enfatiza con
          fuerza que Pablo predica "con toda libertad y sin estorbo" (Hch 28:31).
        </p>
        <p>
          ¿Por qué no nos narra el desenlace de Pablo? Porque Hechos nunca fue
          una biografía humana. Fue escrito para documentar el progreso
          imparable del Evangelio. Y ese progreso... <strong>no ha terminado.</strong>
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent bg-accent-light">
          <h2>El Capítulo 29... Somos Nosotros</h2>
          <p>
            La Iglesia actual que continúa predicando el mismo mensaje,
            impulsada por el mismo Espíritu, en todos los rincones del mundo,
            es esencialmente el "Capítulo 29" de los Hechos de los Apóstoles.
            Lucas dejó el libro abierto porque la historia del avance del
            Evangelio no termina en el siglo I.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>La Palabra que no puede ser atada</h2>
          <p>
            A lo largo de Hechos, por más que se encarcela a los predicadores,
            se les azota o incluso se les mata, la Palabra de Dios siempre
            "crecía y se multiplicaba" (Hch 6:7; 12:24; 19:20). El verdadero
            protagonista no puede ser detenido por ningún poder humano.
          </p>
        </section>
      </div>
    </div>
  );
}
