"use client";
import React from "react";
import "../pages.css";

export function EstructuraHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Estructura de Hechos</h1>
        <p className="subtitle">
          La expansión geográfica del Evangelio según el patrón ordenado por Jesús.
        </p>
      </header>

      <section className="content-section card">
        <h2>La Expansión Concéntrica (Hechos 1:8)</h2>
        <p>
          La estructura de Hechos sigue fielmente el mandato de Jesús antes de ascender: testificar desde Jerusalén hacia el exterior, cruzando fronteras culturales y geográficas en tres grandes etapas.
        </p>
        
        <div className="features-grid mt-4">
          <div className="feature-item highlight-card border-accent">
            <h3 style={{ color: "var(--color-accent)" }}>1. En Jerusalén (Caps. 1-7)</h3>
            <p>
              El derramamiento del Espíritu Santo en Pentecostés. Pedro predica valientemente. La iglesia primitiva nace, crece vertiginosamente, comparte todos sus bienes y sufre la primera gran persecución con el martirio de Esteban.
            </p>
          </div>
          
          <div className="feature-item highlight-card border-accent">
            <h3 style={{ color: "var(--color-accent)" }}>2. Judea y Samaria (Caps. 8-12)</h3>
            <p>
              La persecución dispersa a los creyentes. Felipe evangeliza Samaria y a un etíope. Saulo de Tarso, un severo perseguidor, experimenta una conversión dramática. Pedro lleva el evangelio por primera vez a gentiles (la casa de Cornelio).
            </p>
          </div>
          
          <div className="feature-item highlight-card border-accent">
            <h3 style={{ color: "var(--color-accent)" }}>3. Hasta lo último de la Tierra (Caps. 13-28)</h3>
            <p>
              Pablo y sus compañeros realizan tres extensos viajes misioneros plantando iglesias por toda Asia Menor y Grecia. Finalmente, Pablo es arrestado y apela a César, llevando el testimonio cristiano hasta la mismísima capital del Imperio: Roma.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
