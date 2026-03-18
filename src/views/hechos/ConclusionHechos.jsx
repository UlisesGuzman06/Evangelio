"use client";
import React from "react";
import "../pages.css";

export function ConclusionHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Conclusión</h1>
        <p className="subtitle">
          Una historia que se sigue escribiendo a través de la Iglesia hoy.
        </p>
      </header>

      <section className="content-section card highlight-card border-accent bg-accent-light" style={{ padding: "3rem" }}>
        <h2 style={{ textAlign: "center", color: "var(--color-accent)", fontSize: "2rem" }}>Un Final Abierto</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "1.5rem" }}>
          El libro de los Hechos de los Apóstoles termina de una forma sorprendentemente abrupta. Pablo está bajo arresto domiciliario en Roma, pero Lucas enfatiza triunfalmente que está predicando el Reino de Dios y enseñando acerca de Jesucristo con <strong>"toda libertad y sin estorbo" (Hechos 28:31).</strong>
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          ¿Por qué no nos cuenta qué le pasó a Pablo? Teológicamente, porque <em>el libro de los Hechos nunca tuvo el propósito de ser una biografía humana</em>. Fue escrito para documentar el progreso incesante del Evangelio y el ministerio del Espíritu Santo, y esa obra... <strong>¡no ha terminado!</strong> Nosotros, como la Iglesia actual que continúa expandiendo el mismo mensaje e impulsada por el mismo Espíritu en todo el mundo, somos esencialmente el "Capítulo 29" de los Hechos.
        </p>
      </section>
    </div>
  );
}
