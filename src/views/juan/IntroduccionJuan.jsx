import React from "react";
import "../pages.css";

export function IntroduccionJuan() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Introducción al Evangelio de Juan</h1>
        <p className="subtitle">
          El evangelio espiritual, teológico y simbólico.
        </p>
      </header>

      <section className="content-section card">
        <h2>¿Quién fue Juan el apóstol?</h2>
        <p>
          Tradicionalmente, el Cuarto Evangelio se atribuye a Juan, hijo de
          Zebedeo, conocido como "el discípulo amado". Fue uno de los doce
          apóstoles originales y parte del círculo más íntimo de Jesús junto con
          Pedro y Santiago.
        </p>
        <p>
          Juan era un pescador de Galilea que, tras seguir a Jesús, se convirtió
          en un pilar fundamental de la iglesia primitiva. Su cercanía con
          Cristo le permitió escribir un relato deeply personal y teológico,
          enfocándose en aspectos espirituales que los otros evangelistas no
          detallaron de la misma forma.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2>Fecha de Composición</h2>
          <p>
            El Evangelio de Juan es considerado el último de los cuatro
            evangelios canónicos en ser escrito. La mayoría de los eruditos
            bíblicos ubican su composición a finales del primer siglo,
            aproximadamente entre los años <strong>90 y 100 d.C.</strong>
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>Contexto Histórico</h2>
          <p>
            Fue escrito en una época donde la iglesia naciente enfrentaba varios
            desafíos: la separación definitiva entre el judaísmo rabínico y el
            cristianismo (tras la destrucción del Templo en el 70 d.C.), y la
            aparición de primeras herejías gnósticas que negaban la humanidad o
            la divinidad completa de Cristo. Juan escribe para fortalecer la fe
            de la comunidad y establecer la verdad sobre quién es Jesús.
          </p>
        </section>
      </div>

      <section className="content-section card">
        <h2>Diferencias con los Evangelios Sinópticos</h2>
        <p>
          Mateo, Marcos y Lucas son conocidos como los "evangelios sinópticos"
          porque comparten una visión, estructura y contenido muy similar
          ("sinopsis" significa "ver juntos"). El Evangelio de Juan, sin
          embargo, es único en muchos sentidos:
        </p>
        <ul className="custom-list">
          <li>
            <strong>No describe los mismos eventos:</strong> Omite el nacimiento
            de Jesús, el bautismo por Juan (directamente), las tentaciones en el
            desierto, la Transfiguración y la institución de la Cena del Señor.
          </li>
          <li>
            <strong>Ministerio en Judea:</strong> Mientras los sinópticos se
            centran en el ministerio de Jesús en Galilea, Juan detalla
            extensivamente sus viajes a Jerusalén para las diferentes fiestas
            judías.
          </li>
          <li>
            <strong>Duración del ministerio:</strong> Juan menciona al menos
            tres Pascuas, lo que sugiere que el ministerio de Jesús duró
            aproximadamente tres años, a diferencia del enfoque cronológico más
            corto de los otros.
          </li>
        </ul>
      </section>

      <section className="content-section card bg-accent-light">
        <h2>Un Evangelio Principalmente Teológico</h2>
        <p>
          A diferencia de los sinópticos, que son más narrativos e históricos,
          el evangelio de Juan es profundamente reflexivo y teológico. Clemente
          de Alejandría (siglo II) lo llamó el{" "}
          <strong>"Evangelio espiritual"</strong>.
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Discursos Largos</h3>
            <p>
              En lugar de parábolas cortas, Juan presenta a Jesús dando extensos
              discursos teológicos sobre su identidad divina.
            </p>
          </div>
          <div className="feature-item">
            <h3>Profundo Simbolismo</h3>
            <p>
              Utiliza elementos cotidianos como el agua, la luz, el pan, y el
              pastor para revelar el misterio del Hijo de Dios.
            </p>
          </div>
          <div className="feature-item">
            <h3>Identidad Divina</h3>
            <p>
              Su propósito principal explícito es demostrar que Jesús es el
              Cristo, el Hijo de Dios, y que al creer, tengamos vida en su
              nombre (Juan 20:31).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
