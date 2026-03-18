import React from "react";
import "../pages.css";

export function EstructuraJuan() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Estructura del Evangelio</h1>
        <p className="subtitle">Una división cuidadosamente diseñada.</p>
      </header>

      <section className="content-section card">
        <p>
          El Evangelio de Juan tiene una estructura literaria y teológica muy
          clara. En lugar de seguir un orden estrictamente cronológico y
          biográfico completo de la vida de Jesús, el autor ha seleccionado y
          organizado cuidadosamente los eventos para lograr su propósito
          teológico.
        </p>
        <p>
          Generalmente, los exégetas y teólogos dividen este evangelio en cuatro
          grandes secciones:
        </p>
      </section>

      <div
        className="features-grid"
        style={{ gridTemplateColumns: "1fr", gap: "2rem" }}
      >
        {/* 1. Prologo */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>1. El Prólogo (Juan 1:1-18)</h2>
          <p>
            Es un poema teológico profundo que funciona como una "obertura" de
            todo el libro. Introduce los temas principales que se desarrollarán
            más adelante: el Verbo (Logos), la vida, la luz, el rechazo de las
            tinieblas, el testimonio de Juan el Bautista, la gracia, y la
            verdad.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Tema central:</strong> El Verbo eterno se hace carne para
              habitar entre nosotros y revelar al Padre.
            </li>
          </ul>
        </div>

        {/* 2. Libro de los Signos */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>2. El Libro de los Signos (Juan 1:19 – 12:50)</h2>
          <p>
            Constituye la primera mitad del ministerio público de Jesús. Se
            llama "Libro de los Signos" porque se estructura alrededor de{" "}
            <strong>siete milagros clave</strong> que Juan llama "signos"
            (semeia). Estos signos no son solo actos maravillosos, sino señales
            que apuntan a la identidad mesiánica y divina de Jesús.
          </p>
          <p>
            Cada signo suele ir acompañado de un largo discurso explicativo o un
            debate con los líderes religiosos.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Ejemplos:</strong> Bodas de Caná (agua en vino),
              alimentación de los cinco mil, sanidad del ciego de nacimiento,
              resurrección de Lázaro.
            </li>
            <li>
              <strong>Tema central:</strong> La revelación de Jesús al mundo y
              la creciente división y rechazo por parte de las autoridades
              judías.
            </li>
          </ul>
        </div>

        {/* 3. Libro de la Gloria */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>3. El Libro de la Gloria (Juan 13:1 – 20:31)</h2>
          <p>
            Esta sección describe la última semana de Jesús en Jerusalén (La
            Pasión), pero a diferencia de los sinópticos, la cruz no se ve solo
            como sufrimiento o derrota, sino como{" "}
            <strong>la hora de su glorificación</strong> ("ha llegado la hora de
            que el Hijo del Hombre sea glorificado").
          </p>
          <p>
            Comienza con el lavatorio de los pies en la Última Cena y contiene
            el "Discurso de Despedida" (capítulos 14-17), donde Jesús consuela y
            prepara a sus discípulos, y ora por ellos (la Oración Sacerdotal).
            Continúa con el arresto, juicio, crucifixión y resurrección.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Tema central:</strong> Jesús completa la obra que el Padre
              le dio, retornando a Él a través de la cruz y la resurrección,
              dejando amor, paz y la promesa del Espíritu Santo.
            </li>
          </ul>
        </div>

        {/* 4. Epilogo */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>4. El Epílogo (Juan 21)</h2>
          <p>
            Un capítulo final que parece haber sido añadido después de la
            conclusión formal en 20:30-31. Relata la aparición de Jesús
            resucitado a sus discípulos en el Mar de Galilea (o Tiberíades).
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Tema central:</strong> La pesca milagrosa, la restauración
              de Pedro tras sus tres negaciones ("¿Me amas?"), y palabras acerca
              del futuro del Apóstol Juan.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
