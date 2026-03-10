import React from "react";
import "../pages.css";

export function EstructuraMateo() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Estructura de Mateo</h1>
        <p className="subtitle">
          Diseñado alrededor de cinco grandes discursos.
        </p>
      </header>

      <section className="content-section card">
        <p>
          Mateo estructuró cuidadosamente su Evangelio para destacar a Jesús
          como el nuevo Moisés. Así como el Antiguo Testamento tiene cinco
          libros fundacionales (el Pentateuco o la Torá), Mateo organiza las
          enseñanzas de Jesús en cinco bloques temáticos principales, separados
          por relatos narrativos de sus milagros y ministerio.
        </p>
        <p>
          Además de los cinco discursos centrales, el evangelio comienza con un
          Prólogo sobre su nacimiento y termina con el clímax de su Pasión y
          Resurrección.
        </p>
      </section>

      <div
        className="features-grid"
        style={{ gridTemplateColumns: "1fr", gap: "2rem" }}
      >
        {/* 1. Sermón del Monte */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>1. El Sermón del Monte (Mateo 5-7)</h2>
          <p>
            Jesús expone la ética radical y el corazón de la verdadera justicia
            esperada de sus discípulos, sentando las bases del comportamiento de
            un creyente.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Tema central:</strong> Las leyes del Reino de los Cielos
              (incluyendo las Bienaventuranzas y el Padre Nuestro).
            </li>
          </ul>
        </div>

        {/* 2. Discurso de Misión */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>2. Discurso de Misión (Mateo 10)</h2>
          <p>
            Instrucciones dadas a los Doce Discípulos antes de enviarlos a
            predicar. Les advierte de las futuras persecuciones y les insta a no
            temer a los hombres.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Tema central:</strong> Envío exclusivo a "las ovejas
              perdidas de la casa de Israel" y el costo del discipulado
              verdadero.
            </li>
          </ul>
        </div>

        {/* 3. Discurso en Parábolas */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>3. Discurso en Parábolas (Mateo 13)</h2>
          <p>
            Jesús utiliza una serie de parábolas agrícolas y caseras, revelando
            los misterios del Reino de los Cielos a sus seguidores más cercanos,
            mientras oculta el significado a las multitudes y a los líderes
            incrédulos.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Ejemplos:</strong> Parábola del sembrador, la cizaña, la
              semilla de mostaza y el tesoro escondido.
            </li>
            <li>
              <strong>Tema central:</strong> El Reino crece de forma oculta pero
              soberana e imparable.
            </li>
          </ul>
        </div>

        {/* 4. Discurso sobre la Comunidad */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>4. Discurso sobre la Comunidad (Mateo 18)</h2>
          <p>
            También llamado discurso Eclesiástico, trata sobre cómo deben
            relacionarse los creyentes entre sí dentro de la asamblea
            (ekklesia). Enfatiza la humildad haciéndose como niños.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Tema central:</strong> El perdón inagotable (setenta veces
              siete), la corrección fraterna, y el cuidado de los más pequeños.
            </li>
          </ul>
        </div>

        {/* 5. Discurso Escatológico */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>5. Discurso Escatológico (Mateo 24-25)</h2>
          <p>
            Pronunciado en el Monte de los Olivos. Ofrece predicciones sobre la
            inminente destrucción del Templo de Jerusalén y enseñanzas sobre el
            regreso definitivo de Jesús al final de los tiempos.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Ejemplos:</strong> Parábolas de las diez vírgenes, los
              talentos, y las ovejas y los cabritos.
            </li>
            <li>
              <strong>Tema central:</strong> Estar preparados y ser siervos
              fieles, trabajando diligentemente mientras se espera que vuelva el
              Rey.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
