import React from "react";
import Link from 'next/link';
import "../pages.css";

export function ConclusionLucas() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Conclusión: La Gracia que va a Buscar</h1>
        <p className="subtitle">
          "Porque el Hijo del Hombre vino a buscar y a salvar lo que se había
          perdido." (Lucas 19:10)
        </p>
      </header>

      <section
        className="content-section card mb-5 highlight-card border-accent"
        style={{ padding: "3rem 2.5rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2rem", borderBottom: "none" }}>
          Un Dios que Sale Corriendo a Nuestro Encuentro
        </h2>
        <p style={{ fontSize: "1.2rem" }}>
          La imagen definitiva de Lucas es el padre que ve a su hijo regresar
          "cuando aún estaba lejos" y corre a abrazarlo. En Lucas, Dios no
          espera que seamos perfectos para recibirnos. Dios sale a buscarnos,
          como el pastor que deja las 99 ovejas, como la mujer que barre la casa
          por la moneda perdida, como Jesús que dice a Zaqueo:{" "}
          <em>"Hoy es necesario que pose en tu casa."</em>
        </p>
      </section>

      <div className="grid-2">
        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>Una Fe Sin Fronteras</h3>
          <p>
            El evangelio de Lucas nos desafía a ampliar nuestra comprensión de a
            quién alcanza la gracia de Dios. ¿Hay algún "Zaqueo" en nuestra vida
            a quien consideremos demasiado alejado para ser salvado? Lucas
            responde que nadie está fuera del alcance del amor de Dios.
          </p>
        </div>

        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>La Continuación en Hechos</h3>
          <p>
            Lucas es el único autor del Nuevo Testamento que continúa su relato
            en un segundo volumen: los Hechos de los Apóstoles. La historia de
            Jesús no termina en la Ascensión; continúa en su Iglesia, guiada por
            el mismo Espíritu Santo que actuó en el evangelio.
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
          href="/lucas/capitulos"
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
