import React from "react";
import "../pages.css";

export function TemasHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Temas Principales en Hechos</h1>
        <p className="subtitle">
          El Espíritu Santo, la misión universal y la Iglesia triunfante.
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          Hechos de los Apóstoles estructura su relato en torno a grandes temas
          que explican cómo el movimiento de Jesús, rechazado por el establishment
          religioso judío, se convirtió en una fe de alcance mundial en apenas
          unas décadas.
        </p>
      </section>

      <div className="grid-2">
        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            1. El Espíritu Santo como Director
          </h2>
          <p>
            El Espíritu no es un poder abstracto sino el verdadero protagonista
            del libro. Él llena, guía, prohíbe, envía y capacita a los apóstoles
            en cada paso. A menudo se llama a este libro "Los Hechos del Espíritu
            Santo" más que de los Apóstoles.
          </p>
          <p>
            Pentecostés (Hechos 2) marca el inicio de su era: la promesa del
            Padre derramada sobre toda carne, sin distinción de género, edad o
            condición social.
          </p>
        </div>

        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            2. La Salvación Universal
          </h2>
          <p>
            El mayor cambio teológico de Hechos es la apertura radical hacia los
            gentiles (Hechos 10-15). Dios rompe el muro que separaba a judíos y
            no-judíos, declarando en el Concilio de Jerusalén que la salvación es
            por gracia únicamente, no por cumplimiento de la ley de Moisés.
          </p>
          <p>
            Esta decisión histórica cambió para siempre la naturaleza y el
            alcance del mensaje cristiano.
          </p>
        </div>

        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            3. El Poder de la Resurrección
          </h2>
          <p>
            En cada sermón del libro —de Pedro, Esteban o Pablo— el centro
            absoluto del mensaje es la resurrección de Jesús como hecho histórico
            verificable. Esto era revolucionario: predicaban a un judío crucificado
            por Roma y exaltado como Señor y Juez de toda la humanidad.
          </p>
          <p>
            Los apóstoles eran esencialmente "testigos de la resurrección", no
            solo maestros de una nueva filosofía moral.
          </p>
        </div>

        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            4. La Iglesia en Persecución
          </h2>
          <p>
            Desde el martirio de Esteban hasta el encarcelamiento de Pablo, la
            persecución acompañó a la Iglesia desde su nacimiento. Lucas demuestra
            que ningún poder —sindrios, gobernadores, reyes ni emperadores— pudo
            detener la expansión de la Palabra.
          </p>
          <p>
            De hecho, la dispersión forzada por la persecución actuó como el
            viento que esparció las semillas del evangelio hacia regiones que de
            otro modo no hubieran sido alcanzadas.
          </p>
        </div>
      </div>
    </div>
  );
}
