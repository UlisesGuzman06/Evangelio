import React from "react";
import "../pages.css";

export function IntroduccionMateo() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Introducción al Evangelio de Mateo</h1>
        <p className="subtitle">
          El evangelio real: Jesús, el Mesías judío y el cumplimiento de la ley.
        </p>
      </header>

      <section className="content-section card">
        <h2>¿Quién fue Mateo?</h2>
        <p>
          Mateo, también llamado Leví, era un recaudador de impuestos judío
          (publicano) que trabajaba para el Imperio Romano antes de ser llamado
          por Jesús. Su profesión le hizo impopular entre sus compatriotas, pero
          le proporcionó habilidades clave, como la toma detallada de notas y el
          dominio de idiomas, permitiéndole registrar con precisión largos
          discursos, como el Sermón del Monte.
        </p>
        <p>
          Su evangelio es el primero en el canon del Nuevo Testamento, sirviendo
          como el puente perfecto entre las antiguas profecías y el nuevo pacto
          inaugurado por Jesús.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2>Fecha de Composición</h2>
          <p>
            Aunque debatiendo, muchos eruditos conservadores creen que Mateo fue
            escrito antes de la caída de Jerusalén en el año 70 d.C.,
            probablemente en la década de los <strong>50 o 60 d.C.</strong>
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>Contexto Histórico</h2>
          <p>
            Dirigido principalmente a una audiencia greco-judía, Mateo busca
            demostrar sistemáticamente que Jesús es la consumación soñada de
            toda la historia de patriarcas y profetas, combatiendo dudas frente
            al rechazo de gran parte del liderazgo religioso de la época.
          </p>
        </section>
      </div>

      <section className="content-section card">
        <h2>Diferencias con los Otros Evangelios</h2>
        <p>
          Aunque Mateo comparte gran parte de su narrativa básica con Marcos y
          Lucas (los otros Evangelios Sinópticos), posee características y
          enfoques únicos que lo distinguen claramente:
        </p>
        <ul className="custom-list">
          <li>
            <strong>Genealogía Real:</strong> A diferencia de Marcos (que no
            tiene genealogía) o Lucas (que la traza hasta Adán para mostrar la
            humanidad universal de Cristo), Mateo abre su evangelio trazando el
            linaje de Jesús meticulosamente hasta Abraham y el Rey David,
            legitimando su derecho al trono de Israel.
          </li>
          <li>
            <strong>Enfoque en los Cielos:</strong> Utiliza exclusivamente la
            frase "Reino de los Cielos" en lugar de "Reino de Dios" por profunda
            reverencia a las costumbres judías para no pronunciar el nombre de
            Dios en vano.
          </li>
          <li>
            <strong>Discursos Detallados:</strong> Contiene las enseñanzas
            orales de Jesús de la forma más extensa y estructurada. Gran parte
            del vasto material de enseñanza presente en Mateo (como el Sermón
            del Monte completo) no se halla en Marcos ni en la misma agrupación
            en Lucas.
          </li>
        </ul>
      </section>

      <section className="content-section card bg-accent-light">
        <h2>Un Evangelio Profundamente Judío</h2>
        <p>
          Mateo conecta a Jesús irrevocablemente a las raíces de Israel,
          trazando su genealogía hasta Abraham y David, utilizando extensamente
          "formulas de cumplimiento".
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <h3>El Reino de los Cielos</h3>
            <p>
              Por reverencia judía, Mateo evita decir "Reino de Dios" y prefiere
              "Reino de los Cielos".
            </p>
          </div>
          <div className="feature-item">
            <h3>Los 5 Discursos</h3>
            <p>
              Mateo agrupa la enseñanza de Jesús en 5 grandes bloques,
              presentándolo como "un nuevo y mayor Moisés" trayendo la Ley
              defiitiva a su pueblo.
            </p>
          </div>
          <div className="feature-item">
            <h3>Rey de los Judíos</h3>
            <p>
              Desde la visita de los magos en el capítulo 2, la realeza y
              herencia davídica de Jesús se destaca a lo largo del libro.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
