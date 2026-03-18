import React from "react";
import "../pages.css";

export function HistoriaMarcos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Contexto Histórico de Marcos</h1>
        <p className="subtitle">
          Un evangelio forjado en la persecución, escrito para creyentes bajo el
          Imperio Romano.
        </p>
      </header>

      <section className="content-section card mb-5 highlight-card border-accent">
        <h2 style={{ fontSize: "2rem" }}>¿Para quién fue escrito?</h2>
        <p style={{ fontSize: "1.2rem" }}>
          La tradición cristiana primitiva (Papías, Ireneo) es clara: Marcos
          escribió su evangelio en <strong>Roma</strong>, siendo en esencia las
          memorias de Pedro. Fue escrito principalmente para
          <strong> lectores gentiles de habla griega</strong>, razón por la cual
          explica las costumbres judías y traduce términos arameos para su
          audiencia.
        </p>
      </section>

      <div className="grid-2">
        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>Roma y la Persecución de Nerón</h3>
          <p>
            El contexto más probable de escritura es la Roma de los años 64-68
            d.C., durante la brutal persecución del emperador Nerón. Los
            cristianos romanos eran arrestados, torturados y ejecutados. Un
            evangelio breve, urgente y centrado en el Jesús que sufrió y venció
            sería exactamente lo que esa comunidad aterrorizada necesitaba
            escuchar.
          </p>
        </div>

        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>Pedro como Fuente y Testigo</h3>
          <p>
            El obispo Papías de Hierápolis (siglo II) testificó que "Marcos,
            habiendo sido intérprete de Pedro, escribió con exactitud todo lo
            que recuerda." Esto explica los detalles vívidos y personales del
            evangelio: Marcos narra la perspectiva de quien estuvo presente,
            incluyendo los fallos y miedos del propio Pedro.
          </p>
        </div>
      </div>
    </div>
  );
}
