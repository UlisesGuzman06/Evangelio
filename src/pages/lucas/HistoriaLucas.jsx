import React from "react";
import "../pages.css";

export function HistoriaLucas() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Contexto Histórico de Lucas</h1>
        <p className="subtitle">
          Un médico griego, un apóstol encarcelado y una Historia que cambia el
          mundo.
        </p>
      </header>

      <section className="content-section card mb-5 highlight-card border-accent">
        <h2 style={{ fontSize: "2rem" }}>¿Para quién fue escrito?</h2>
        <p style={{ fontSize: "1.2rem" }}>
          Lucas dedica su evangelio a{" "}
          <strong>"el excelentísimo Teófilo"</strong>
          (Lucas 1:3), un título honorífico romano que sugiere una persona de
          alto rango social, probablemente gentil. Era un patrocinador de la
          obra literaria o un funcionario romano interesado en el nuevo
          movimiento cristiano. El nombre "Teófilo" significa "amigo de Dios".
        </p>
      </section>

      <div className="grid-2">
        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>Lucas como Historiador</h3>
          <p>
            Lucas afirma en su prólogo haber investigado "con diligencia" todas
            las cosas "desde el principio" consultando a "testigos oculares".
            Este método historiográfico al estilo greco-romano le da a su
            evangelio una precisión histórica y geográfica excepcional,
            corroborada por la arqueología moderna en múltiples puntos.
          </p>
        </div>

        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>El Contexto del Imperio Romano</h3>
          <p>
            Lucas sitúa el nacimiento de Jesús bajo el reinado de Augusto y el
            ministerio de Juan durante el de Tiberio, ancla histórica precisa
            que demuestra que estos eventos ocurrieron en el mundo real de los
            imperios y las potencias, no en tiempos míticos. Jesús nació en el
            mundo de Roma y lo transformó desde adentro.
          </p>
        </div>
      </div>
    </div>
  );
}
