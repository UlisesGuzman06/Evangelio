import React from "react";
import "../pages.css";

export function HistoriaJuan() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Contexto Histórico</h1>
        <p className="subtitle">El mundo detrás del Cuarto Evangelio.</p>
      </header>

      <section className="content-section card mb-5">
        <p>
          Para comprender a fondo el Evangelio de Juan, es vital conocer el
          ambiente histórico, social y religioso en el que fue escrito. Este
          evangelio no fue redactado en un vacío, sino en medio de una comunidad
          viva que enfrentaba profundas crisis de identidad y persecución.
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
            La Comunidad Joánica
          </h2>
          <p>
            Los eruditos hablan frecuentemente de la{" "}
            <strong>"Comunidad Joánica"</strong>: un grupo de cristianos
            primitivos, probablemente en o alrededor de Éfeso (Asia Menor,
            actual Turquía), bajo el liderazgo espiritual y apostólico del
            anciano apóstol Juan.
          </p>
          <p>
            Esta comunidad estaba compuesta por judíos cristianos, conversos
            samaritanos y también gentiles. Se caracterizaban por su profunda
            meditación teológica sobre la preexistencia de Cristo, un alto
            énfasis en el amor fraternal y una intensa devoción espiritual hacia
            la guía del Espíritu Santo (Paráclito).
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
            El Conflicto con la Sinagoga
          </h2>
          <p>
            El Evangelio refleja una profunda herida histórica. Tras la
            destrucción del Templo en el año 70 d.C. por los romanos, el
            judaísmo rabínico se reagrupó. En este proceso (probablemente en el
            Concilio de Jamnia, c. 85-90 d.C.), se formuló la{" "}
            <em>Birkhat ha-Minim</em>, una maldición litúrgica contra los
            herejes (incluyendo a los cristianos).
          </p>
          <p>
            Esto significó la{" "}
            <strong>
              expulsión oficial definitiva de los cristianos judíos de las
              grandes sinagogas
            </strong>
            . Confesar a Jesús como Señor implicaba ser desheredado social,
            económica y religiosamente, un "trauma" que Juan refleja
            frecuentemente (ej. los padres del ciego en Juan 9).
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
            El Cristianismo Primitivo a Finales del Siglo I
          </h2>
          <p>
            A finales del siglo I, los apóstoles originales ya habían fallecido
            en su mayoría, martirizados. Juan, como el último sobreviviente,
            escribe este evangelio mirando en retrospectiva hacia casi 60 años
            de meditación sobre la vida de Jesús.
          </p>
          <p>
            La iglesia ya no era simplemente una "secta judía" en Jerusalén,
            sino un movimiento dinámico multinacional extendido por todo el
            Imperio Romano, enfrentando los temores de la muerte de sus
            fundadores originales.
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
            Frentes de Batalla Teológica
          </h2>
          <p>
            Juan no solo escribió para narrar, sino para corregir errores
            emergentes en la Iglesia Antigua:
          </p>
          <ul className="custom-list">
            <li>
              <strong>Contra el Docetismo / Gnosticismo incipiente:</strong>{" "}
              Movimientos que creían que la materia era "mala" y negaban que el
              Verbo se hizo verdaderamente "carne". Creían que Jesús solo
              parecía tener un cuerpo real. Juan insiste fuertemente en su
              encarnación y humanidad (lloró, tuvo sed, sangró).
            </li>
            <li>
              <strong>Contra los seguidores de Juan el Bautista:</strong>{" "}
              Algunos seguían adorando a Juan el Bautista como el Mesías supremo
              supremo. Juan enfatiza reiteradamente que el Bautista no era la
              Luz, sino un sencillo "testigo" que debía "menguar".
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
