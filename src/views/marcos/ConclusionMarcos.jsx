import React from "react";
import Link from 'next/link';
import "../pages.css";

export function ConclusionMarcos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Conclusión: El Siervo Victorioso</h1>
        <p className="subtitle">
          "El Hijo del Hombre no vino para ser servido, sino para servir, y para
          dar su vida en rescate por muchos." (Marcos 10:45)
        </p>
      </header>

      <section
        className="content-section card mb-5 highlight-card border-accent"
        style={{ padding: "3rem 2.5rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2rem", borderBottom: "none" }}>
          El Evangelio que No Se Detiene
        </h2>
        <p style={{ fontSize: "1.2rem" }}>
          Marcos es el evangelio de la acción incesante. No hay tiempo para
          detenerse: Jesús sana, enseña, viaja, confronta y avanza sin parar
          hacia Jerusalén. Y al final, la tumba vacía no clausura la historia:
          "¡Ha resucitado! No está aquí." El evangelio termina con
          <strong> asombro y misión</strong>, no con clausura.
        </p>
      </section>

      <div className="grid-2">
        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>El Llamado a Seguir al Siervo</h3>
          <p>
            Marcos nos confronta con una pregunta existencial: si Jesús, siendo
            el Hijo de Dios, eligió el camino del servicio radical y la entrega
            total, ¿qué camino elegiremos nosotros, sus seguidores? El evangelio
            no permite la fe cómoda ni el discipulado a medias.
          </p>
        </div>

        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>Fe en Medio de la Tormenta</h3>
          <p>
            Para quienes atraviesan persecución, duda o sufrimiento, el
            Evangelio de Marcos ofrece un Jesús completamente humano y
            completamente divino que no evitó el dolor sino que lo atravesó y
            venció. Su resurrección garantiza que el sufrimiento no tiene la
            última palabra.
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          paddingBottom: "3rem",
        }}
      >
        <Link
          href="/marcos/capitulos"
          style={{
            display: "inline-block",
            padding: "15px 30px",
            background: "var(--color-dark)",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontFamily: "var(--font-heading)",
            fontSize: "1.2rem",
            boxShadow: "var(--shadow-md)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
          onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
        >
          Ir a los Capítulos del Texto Bíblico
        </Link>
      </div>
    </div>
  );
}
