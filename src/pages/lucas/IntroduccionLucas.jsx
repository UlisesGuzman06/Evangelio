import React from "react";
import "../pages.css";

export function IntroduccionLucas() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Introducción al Evangelio de Lucas</h1>
        <p className="subtitle">
          El evangelio del Hijo del Hombre: Jesús, el Salvador de todos los
          pueblos.
        </p>
      </header>

      <section className="content-section card">
        <h2>¿Quién fue Lucas?</h2>
        <p>
          Lucas fue un médico griego, compañero fiel del apóstol Pablo en sus
          viajes misioneros (Colosenses 4:14, 2 Timoteo 4:11). Es el único autor
          gentil del Nuevo Testamento, y como médico, muestra una sensibilidad
          especial hacia el sufrimiento y la sanidad en su relato.
        </p>
        <p>
          Escribió también el libro de los Hechos de los Apóstoles, formando
          juntos una obra de dos volúmenes dedicada a un personaje llamado
          Teófilo. Su evangelio es el más extenso del Nuevo Testamento y el más
          literariamente refinado, escrito en un griego de alta calidad.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2>Fecha de Composición</h2>
          <p>
            Escrito probablemente entre los años <strong>60 y 80 d.C.</strong>,
            posiblemente mientras Pablo estaba en prisión en Cesarea o Roma. El
            acceso directo a testigos oculares y la consulta de documentos
            previos enriquecen su narrativa detallada.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>Audiencia y Propósito</h2>
          <p>
            Escrito para{" "}
            <strong>lectores greco-romanos de buena educación</strong>, Lucas
            presenta a Jesús como el Salvador universal que alcanza a mujeres,
            pobres, samaritanos, gentiles y marginados de todo tipo. La
            salvación en Lucas no tiene fronteras étnicas ni sociales.
          </p>
        </section>
      </div>

      <section className="content-section card">
        <h2>Diferencias con los Otros Evangelios</h2>
        <p>
          Lucas contiene material único que no aparece en ningún otro evangelio:
        </p>
        <ul className="custom-list">
          <li>
            <strong>Infancia de Jesús más detallada:</strong> Narra el anuncio
            del ángel a María (la Anunciación), el Magnificat de María, el canto
            de Zacarías, y el episodio de Jesús en el Templo a los 12 años.
          </li>
          <li>
            <strong>Parábolas exclusivas:</strong> El Buen Samaritano, el Hijo
            Pródigo, el Rico y Lázaro, la Viuda Persistente, el Fariseo y el
            Publicano. Son las parábolas más influyentes de la literatura
            universal.
          </li>
          <li>
            <strong>Énfasis en el Espíritu Santo:</strong> Más mencionado que en
            cualquier otro evangelio sinóptico. El Espíritu desciende sobre
            María, Juan, Elisabet, Zacarías, Simeón y Jesús antes del ministerio
            público.
          </li>
        </ul>
      </section>

      <section className="content-section card bg-accent-light">
        <h2>El Evangelio de los Marginados</h2>
        <p>
          Lucas es el evangelio de los excluidos. Jesús en Lucas come con
          publicanos (Zaqueo), habla con mujeres en público, sana a gentiles y
          samaritanos, y proclama buenas noticias a los pobres en su primer
          discurso público (Lucas 4:18).
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Las Mujeres</h3>
            <p>
              Lucas menciona por su nombre a María Magdalena, Juana, Susana y
              otras que seguían a Jesús y lo sostenían económicamente.
            </p>
          </div>
          <div className="feature-item">
            <h3>Los Pobres</h3>
            <p>
              "Bienaventurados los pobres" en Lucas (6:20) es sin matices: la
              pobreza material es parte del cuadro de la bienaventuranza.
            </p>
          </div>
          <div className="feature-item">
            <h3>Los Gentiles</h3>
            <p>
              El Espíritu Santo guiará el evangelio hacia "los confines de la
              tierra" (Hechos 1:8), y Lucas anticipa esta misión universal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
