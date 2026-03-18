"use client";
import React from "react";
import "../pages.css";

export function HistoriaHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Contexto Histórico</h1>
        <p className="subtitle">
          El cruce de culturas: la fe judeocristiana en la sociedad greco-romana.
        </p>
      </header>

      <section className="content-section card">
        <h2>Un Imperio conectado</h2>
        <p>
          La expansión asombrosa del cristianismo primitivo no fue accidente, operó bajo condiciones históricas que teológicamente se ven como la preparación providencial de Dios:
        </p>
        <ul className="custom-list mt-3">
          <li><strong>Pax Romana:</strong> El imperio estaba mayormente en paz y sin las antiguas guerras fronterizas, permitiendo el viaje seguro.</li>
          <li><strong>Vías Romanas:</strong> Los modernos sistemas de carreteras de Roma conectaban eficientemente todo el imperio. Pablo cubrió aproximadamente 16,000 kilómetros.</li>
          <li><strong>Idioma Común (Koiné):</strong> Gracias a las conquistas de Alejandro Magno siglos atrás, el griego era la lengua franca, lo que permitió a Pablo predicar desde Antioquía hasta Roma en un solo idioma.</li>
        </ul>
      </section>

      <section className="content-section card bg-accent-light">
        <h2>La Situación Judía y Romana</h2>
        <p>
          En este periodo, la fe judía (<em>religio licita</em>) gozaba de un estatus legal especial de tolerancia por parte de Roma. En sus primeros años, los romanos consideraban a la iglesia cristiana simplemente como "otra secta judía más" (como los fariseos o esenios), gozando así de protección legal temporal.
        </p>
        <p>
          A medida que Hechos progresa, vemos la transición donde los judíos procuran expulsar a los cristianos de la sinagoga, forzando a los magistrados romanos a empezar a evaluarlos como una religión distinta y eventualmente proscrita, lo que provocaría terribles persecuciones en el futuro.
        </p>
      </section>
    </div>
  );
}
