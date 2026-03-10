import React from "react";
import "../pages.css";

export function PasajesMarcos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Pasajes Clave en Marcos</h1>
        <p className="subtitle">
          Momentos decisivos que revelan la identidad y misión del Siervo.
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          Aunque es el evangelio más corto, Marcos contiene escenas de un poder
          narrativo extraordinario. Cada pasaje está cargado de urgencia y
          verdad teológica sobre quién es Jesús y qué vino a hacer.
        </p>
      </section>

      <div
        className="features-grid"
        style={{ gridTemplateColumns: "1fr", gap: "2rem" }}
      >
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>1. El Bautismo y la Voz del Cielo (Marcos 1:9-11)</h2>
          <p>
            <em>
              "Y luego, cuando subía del agua, vio abrirse los cielos, y al
              Espíritu como paloma que descendía sobre él. Y vino una voz de los
              cielos que decía: Tú eres mi Hijo amado; en ti tengo
              complacencia."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> En lugar de comenzar una genealogía,
              Marcos arranca con este momento de investidura divina donde la
              Trinidad se manifiesta simultáneamente, acreditando públicamente a
              Jesús antes de que realice ningún milagro.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>2. El Exorcismo en la Sinagoga (Marcos 1:23-27)</h2>
          <p>
            <em>
              "Y en la sinagoga había un hombre con espíritu inmundo...
              ¡Cállate, y sal de él! Y el espíritu inmundo, sacudiéndole con
              violencia, y clamando a gran voz, salió de él."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> Es el primer milagro público de
              Jesús en Marcos y establece de inmediato su suprema autoridad
              sobre el mundo espiritual. Los demonios le reconocen cuando los
              humanos aún no comprenden.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>3. La Calma de la Tormenta (Marcos 4:39-41)</h2>
          <p>
            <em>
              "Y levantándose, reprendió al viento, y dijo al mar: Cállate,
              enmudece. Y cesó el viento, y se hizo grande bonanza. Y les dijo:
              ¿Por qué estáis así amedrentados? ¿Cómo no tenéis fe?"
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> Solo el Dios del Antiguo Testamento
              tiene poder sobre las aguas caóticas (Salmo 89:9, 107:29). Jesús
              ordena al mar como si fuera una persona y éste obedece al
              instante.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>4. "¿Quién decís que soy yo?" (Marcos 8:29)</h2>
          <p>
            <em>
              "Entonces Pedro respondió y le dijo: Tú eres el Cristo. Pero él
              les mandó que no dijesen esto de él a ninguno."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> Es el pivote del evangelio. Todo lo
              anterior apunta a este momento. Después de la confesión, Jesús
              comienza a revelar abiertamente su destino de sufrimiento y
              muerte.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>5. El Ransom Logion (Marcos 10:45)</h2>
          <p>
            <em>
              "Porque el Hijo del Hombre no vino para ser servido, sino para
              servir, y para dar su vida en rescate por muchos."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> Este es el versículo teológico más
              importante de Marcos. Define la misión completa de Jesús: no como
              rey triunfal, sino como Siervo que paga el rescate por la
              humanidad con su propia vida.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>6. La Exclamación del Centurión (Marcos 15:39)</h2>
          <p>
            <em>
              "Y el centurión que estaba frente a él, viendo que había expirado
              así, dijo: Verdaderamente este hombre era Hijo de Dios."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> Es el clímax del "secreto
              mesiánico". Irónicamente, es un militar romano (un gentil) quien
              primero declara públicamente y sin restricción la verdad central
              del evangelio. En la muerte, el secreto se revela.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
