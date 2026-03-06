import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

export function Conclusion() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Conclusión: Fe y Vida Eterna</h1>
        <p className="subtitle">
          "Y para que creyendo, tengáis vida en su nombre."
        </p>
      </header>

      <section
        className="content-section card mb-5 highlight-card border-accent"
        style={{ padding: "3rem 2.5rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2rem", borderBottom: "none" }}>
          El Mensaje de Juan Hoy
        </h2>
        <p style={{ fontSize: "1.2rem" }}>
          El Evangelio de Juan permanece tras dos milenios como el texto más
          sublime, amado y repetido del Nuevo Testamento cristiano. Su
          relevancia no ha caducado porque las preguntas que responde son
          universalmente humanas y eternas.
        </p>
      </section>

      <div className="grid-2">
        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>La Identidad de Cristo en un Mundo Relativista</h3>
          <p>
            En un mundo que frecuentemente considera a Jesús simplemente como un
            "buen maestro moral" o un profeta más, el Cuarto Evangelio no
            permite términos medios racionales. Nos confronta audazmente con los
            reclamos absolutos de Cristo de ser el único Camino, la Verdad y la
            Vida hacia el Padre Divino, exigiendo una respuesta radical de
            reverencia de fe incondicional o rechazo inminente.
          </p>
        </div>

        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>El Llamado a la Intimidad y Plenitud</h3>
          <p>
            Juan no presenta una religión basada arduamente en el esfuerzo legal
            de reglas rigurosas y meritocracia. Presenta una vibrante relación
            mística y personal suprema ('Permaneced en mí'). Nos enseña que el
            cristianismo no es principalmente una moralidad ética, sino tener la
            "Vida de Dios" latiendo eternamente en el ser humano a través de la
            misteriosa Presencia del Espíritu Consolador.
          </p>
        </div>

        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>Amor como Marca Distintiva Innegociable</h3>
          <p>
            La lección perdurable de Jesús lavando humildemente los pies de sus
            traicioneros y egocéntricos discípulos sigue siendo el manual
            absoluto del liderazgo cristiano. La iglesia moderna se mide
            auténticamente no por su teología brillante sistemática, su poder
            político, ni por eventos asombrosos, sino única y exclusivamente por
            este amor extravagante y mutuo ordenado en la noche de la cruz
            oscura.
          </p>
        </div>

        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>Paz en Medio de la Tormenta Diaria</h3>
          <p>
            "En el mundo tendréis aflicción; pero confiad, yo he vencido al
            mundo". Estas magnéticas palabras de aliento trascienden las
            persecuciones romanas originales llegando directo al cristiano
            moderno del siglo XXI de la ansiedad. Recordándonos profundamente
            que pase lo que pase hoy y mañana, la gran batalla universal trágica
            ya la ha ganado incuestionablemente el Gran Rey Soberano en el
            Calvario majestuoso.
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
          to="/capitulos"
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
