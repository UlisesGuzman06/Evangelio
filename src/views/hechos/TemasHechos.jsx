"use client";
import React from "react";
import "../pages.css";

export function TemasHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Temas Principales</h1>
        <p className="subtitle">
          El mensaje teológico y la misión detrás de la historia eclesiástica.
        </p>
      </header>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2 style={{ color: "var(--color-accent)" }}>El Soberano Espíritu Santo</h2>
          <p>
            El Espíritu Santo es presentado no solo como un poder, sino como el líder personal y director de la Iglesia. Él llena a los creyentes para predicar con denuedo (Hechos 2), dirige a Felipe al desierto (Hechos 8), ordena apartar a Bernabé y Saulo para las misiones (Hechos 13) y hasta les prohíbe ir a ciertas regiones de Asia (Hechos 16).
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2 style={{ color: "var(--color-accent)" }}>La Salvación de los Gentiles</h2>
          <p>
            Uno de los mayores cambios teológicos del Nuevo Testamento ocurre en Hechos: Dios rompe completamente el muro de separación entre judíos y no judíos (gentiles). El Concilio de Jerusalén (Hechos 15) concluye que los gentiles no necesitan volverse judíos ni circuncidarse para ser salvos por la gracia de Cristo.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2 style={{ color: "var(--color-accent)" }}>La Iglesia Triunfante en Persecución</h2>
          <p>
            Desde el mismo inicio, predicar la resurrección provocó arrestos, azotes y muertes. Sin embargo, Lucas demuestra sistemáticamente que ninguna fuerza política judía ni romana pudo frenar la Palabra. De hecho, la persecución actuó como el viento que esparció las semillas del evangelio por el mundo.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2 style={{ color: "var(--color-accent)" }}>El Jesucristo Resucitado</h2>
          <p>
            En cada sermón (de Pedro, Esteban o Pablo), el mensaje central es el mismo: Jesús, quien fue crucificado, ha resucitado, cumplido las Escrituras y sentado a la diestra de Dios como Señor y Juez de toda la humanidad.
          </p>
        </section>
      </div>
    </div>
  );
}
