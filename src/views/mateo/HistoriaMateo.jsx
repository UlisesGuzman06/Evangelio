import React from "react";
import "../pages.css";

export function HistoriaMateo() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Contexto Histórico</h1>
        <p className="subtitle">
          Una comunidad judeo-cristiana bajo tensión y transición tras la
          destrucción de Jerusalén.
        </p>
      </header>

      <section className="content-section card mb-5 highlight-card border-accent">
        <h2 style={{ fontSize: "2rem" }}>¿Para quién fue escrito?</h2>
        <p style={{ fontSize: "1.2rem" }}>
          Aunque fue escrito tradicionalmente en hebreo o arameo según los
          padres de la Iglesia (Papías de Hierápolis), la versión conservada y
          circulante está en un excelente griego común (koiné). La fuerte
          orientación y argumentación basada meticulosamente en profecías del
          Antiguo Pacto sugiere fuertemente que el Evangelio fue escrito para
          cristianos de <strong>origen judío</strong>.
        </p>
      </section>

      <div className="grid-2">
        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>Antioquía de Siria (Probable Origen)</h3>
          <p>
            Varios expertos ubican su redacción final en la populosa ciudad de
            Antioquía (la tercera ciudad más grande del Imperio Romano). Allí se
            formó una de las comunidades cristianas más mixtas y de rápido
            crecimiento, donde "a los discípulos se les llamó cristianos por
            primera vez" (Hechos 11:26). Esto encaja perfectamente con un
            evangelio que es simultáneamente sumamente judío en raíces, pero
            fuertemente universal en destino y alcance misionero a los gentiles.
          </p>
        </div>

        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>Crisis y Separación de la Sinagoga</h3>
          <p>
            Es probable que el Evangelio haya sido redactado en los años
            turbulentos posteriores a la caída del Templo de Jerusalén en el año
            70 d.C. En este período, el judaísmo rabínico (liderado por los
            fariseos sobrevivientes) comenzó a reorganizarse, endureciendo
            masivamente la oposición contra los cristianos judíos e incluso
            expulsándolos oficialmente de la liturgia de las sinagogas. Mateo
            escribe en medio de estas amargas divisiones para confirmar a los
            fieles que su decisión de abrazar a Jesús los coloca del lado
            verdadero del cumplimiento profético.
          </p>
        </div>
      </div>
    </div>
  );
}
