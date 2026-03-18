"use client";
import React from "react";
import Link from "next/link";
import "../pages.css"; // Usa los estilos generales que ya tienes

export function IntroduccionHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large" style={{ color: "var(--color-dark)" }}>Los Hechos de los Apóstoles</h1>
        <p className="subtitle">El inicio de la Iglesia de Jesucristo movida por el Espíritu Santo.</p>
      </header>

      <section className="card highlight-card border-accent bg-accent-light" style={{ padding: "2.5rem" }}>
        <h2 style={{ color: "var(--color-accent)", marginBottom: "1.5rem" }}>
          Un nuevo capítulo en la historia
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text)" }}>
          El libro de los Hechos (escrito también por San Lucas) documenta el asombroso desarrollo del cristianismo primitivo, comenzando en Jerusalén y esparciéndose a través del Imperio Romano.
        </p>
        
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link
            href="/hechos/capitulos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--color-accent)",
              color: "white",
              padding: "15px 30px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              boxShadow: "0 4px 15px rgba(181, 152, 90, 0.3)"
            }}
          >
            Sumergirse en los capítulos
          </Link>
        </div>
      </section>
    </div>
  );
}
