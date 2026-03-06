import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import capitulosData from "../data/capitulos.json";
import "./pages.css";

function CapituloMenu() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">El Evangelio de Juan</h1>
        <p className="subtitle">
          Selecciona un capítulo para leer el texto y su análisis teológico.
        </p>
      </header>

      <div className="features-grid">
        {capitulosData.map((cap) => (
          <Link
            to={`/capitulos/${cap.capitulo}`}
            key={cap.capitulo}
            className="card feature-item hover-card"
            style={{ textDecoration: "none" }}
          >
            <h3 className="mb-2" style={{ color: "var(--color-accent)" }}>
              Capítulo {cap.capitulo}
            </h3>
            <p style={{ color: "var(--color-dark)", fontWeight: "500" }}>
              {cap.titulo}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CapituloDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const capNum = parseInt(id);

  const capitulo = capitulosData.find((c) => c.capitulo === capNum);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!capitulo) {
    return (
      <div className="text-center mt-5">
        <h2>Capítulo no encontrado</h2>
        <button
          onClick={() => navigate("/capitulos")}
          style={{
            padding: "10px 20px",
            background: "var(--color-accent)",
            color: "white",
            borderRadius: "4px",
            marginTop: "20px",
          }}
        >
          Volver a Capítulos
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <button
        onClick={() => navigate("/capitulos")}
        style={{
          border: "none",
          background: "none",
          color: "var(--color-text-light)",
          cursor: "pointer",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          fontSize: "1rem",
          fontFamily: "var(--font-ui)",
        }}
      >
        ← Volver al Índice de Capítulos
      </button>

      <header
        className="page-header text-center"
        style={{ marginBottom: "2rem" }}
      >
        <h1 className="title-large">Juan {capitulo.capitulo}</h1>
        <p className="subtitle">{capitulo.titulo}</p>
      </header>

      {/* Exégesis / Análisis */}
      <div className="grid-2" style={{ marginBottom: "3rem" }}>
        <section
          className="card highlight-card border-accent bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h2
            style={{
              color: "var(--color-dark)",
              marginBottom: "1rem",
              fontSize: "1.4rem",
            }}
          >
            Resumen
          </h2>
          <p>{capitulo.explicacionSencilla}</p>
        </section>

        <section
          className="card highlight-card border-dark"
          style={{ padding: "2rem" }}
        >
          <h2
            style={{
              color: "var(--color-dark)",
              marginBottom: "1rem",
              fontSize: "1.4rem",
            }}
          >
            Interpretación Teológica
          </h2>
          <p>{capitulo.interpretacionTeologica}</p>
        </section>
      </div>

      <div
        className="features-grid"
        style={{
          gap: "1.5rem",
          marginBottom: "3rem",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div className="card" style={{ padding: "1.5rem" }}>
          <h3
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            Símbolos Importantes
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            {capitulo.simbolos}
          </p>
        </div>
        <div className="card" style={{ padding: "1.5rem" }}>
          <h3
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            Contexto Histórico
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            {capitulo.datosHistoricos}
          </p>
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--color-border)",
          margin: "4rem 0",
        }}
      />

      {/* Texto Bíblico Completo */}
      <section className="content-section card">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Texto Bíblico (RVR1960)
        </h2>
        <div
          className="biblical-text"
          style={{
            columnCount: window.innerWidth > 768 ? 2 : 1,
            columnGap: "3rem",
          }}
        >
          {capitulo.versiculos.map((v) => (
            <p
              key={v.verse}
              style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}
            >
              <sup
                style={{
                  color: "var(--color-accent)",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                {v.verse}
              </sup>
              {v.text}
            </p>
          ))}
        </div>
      </section>

      {/* Botones de Navegación del Capítulo */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "3rem",
        }}
      >
        {capNum > 1 ? (
          <button
            onClick={() => navigate(`/capitulos/${capNum - 1}`)}
            style={{
              padding: "10px 20px",
              background: "white",
              border: "1px solid var(--color-border)",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "var(--font-ui)",
              color: "var(--color-dark)",
            }}
          >
            ← Capítulo Anterior
          </button>
        ) : (
          <div />
        )}

        {capNum < 21 ? (
          <button
            onClick={() => navigate(`/capitulos/${capNum + 1}`)}
            style={{
              padding: "10px 20px",
              background: "var(--color-accent)",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "var(--font-ui)",
              border: "none",
            }}
          >
            Siguiente Capítulo →
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export function Capitulos() {
  return (
    <Routes>
      <Route path="/" element={<CapituloMenu />} />
      <Route path="/:id" element={<CapituloDetalle />} />
    </Routes>
  );
}
