"use client";
import React from "react";
import "../pages.css";

export function PasajesHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Pasajes Clave</h1>
        <p className="subtitle">
          Momentos transformadores que cambiaron la historia del mundo.
        </p>
      </header>

      <section className="content-section card">
        <div className="features-grid">
          <div className="feature-item">
            <h3 style={{ color: "var(--color-accent)" }}>La promesa del Espíritu (1:8)</h3>
            <p>
              "Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos... hasta lo último de la tierra."
            </p>
          </div>
          
          <div className="feature-item">
            <h3 style={{ color: "var(--color-accent)" }}>El día de Pentecostés (2:1-4)</h3>
            <p>
              El derramamiento del Espíritu Santo sobre los discípulos, capacitándolos para hablar en las lenguas de los peregrinos de todo el mundo, naciendo así la Iglesia con 3,000 bautismos.
            </p>
          </div>
          
          <div className="feature-item">
            <h3 style={{ color: "var(--color-accent)" }}>Conversión de Saulo (9:3-5)</h3>
            <p>
              "Saulo, Saulo, ¿por qué me persigues?... Yo soy Jesús, a quien tú persigues." El encuentro dramático que transformó al mayor enemigo de la fe en el apóstol a los gentiles.
            </p>
          </div>
          
          <div className="feature-item">
            <h3 style={{ color: "var(--color-accent)" }}>El Concilio Apostólico (15:11)</h3>
            <p>
              La decisión revolucionaria de la iglesia primitiva: "Antes creemos que por la gracia del Señor Jesús seremos salvos, de igual modo que ellos (los gentiles)."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
