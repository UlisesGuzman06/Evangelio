import React from "react";
import "../pages.css";

export function PasajesLucas() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Pasajes Clave en Lucas</h1>
        <p className="subtitle">
          Las escenas y parábolas más poderosas del evangelio del Hijo del
          Hombre.
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          Lucas nos dejó algunas de las narraciones más emocionalmente
          resonantes y teológicamente ricas de toda la Biblia. Sus parábolas
          exclusivas son consideradas entre las obras literarias más influyentes
          de la historia de la humanidad.
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
          <h2>1. El Magnificat de María (Lucas 1:46-55)</h2>
          <p>
            <em>
              "Mi alma glorifica al Señor, y mi espíritu se regocija en Dios mi
              Salvador... Derribó de los tronos a los poderosos, y exaltó a los
              humildes."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> Es una de las oraciones más bellas y
              políticamente cargadas de la Biblia. María canta la inversión
              radical del orden social que trae el Mesías: los humillados serán
              exaltados y los poderosos derribados.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>2. La Declaración en Nazaret (Lucas 4:18-21)</h2>
          <p>
            <em>
              "El Espíritu del Señor está sobre mí, por cuanto me ha ungido para
              dar buenas nuevas a los pobres... Hoy se ha cumplido esta
              Escritura delante de vosotros."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> Es el "manifiesto" de Jesús en
              Lucas. Al leer Isaías 61 en la sinagoga y declarar que se cumple
              en Él, Jesús define su misión entera: liberación espiritual,
              sanidad y justicia social para los excluidos.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>3. El Buen Samaritano (Lucas 10:30-37)</h2>
          <p>
            <em>
              "¿Cuál, pues, de estos tres te parece que fue el prójimo del que
              cayó en manos de los ladrones? El que usó de misericordia con él.
              Ve, y haz tú lo mismo."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> Esta parábola demolió las fronteras
              étnicas y religiosas de quién merece amor. Jesús declara que el
              "prójimo" es cualquier ser humano en necesidad, y que la compasión
              activa supera la afiliación religiosa.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>4. El Hijo Pródigo (Lucas 15:11-32)</h2>
          <p>
            <em>
              "Aún estando él lejos, lo vio su padre, y fue movido a
              misericordia, y corrió, y se echó sobre su cuello, y le besó."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> La parábola más profunda del amor
              incondicional de Dios. El padre que corre al encuentro del hijo
              arrepentido revela el corazón de Dios: no espera que lleguemos,
              sale a nuestro encuentro. Muchos la consideran la historia más
              hermosa jamás contada.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>5. Zaqueo el Publicano (Lucas 19:1-10)</h2>
          <p>
            <em>
              "Porque el Hijo del Hombre vino a buscar y a salvar lo que se
              había perdido."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> Un jefe de publicanos (considerado
              el máximo traidor y pecador) es elegido por Jesús para hospedarse
              en su casa. La salvación llega a la persona más improbable. Es el
              evangelio de la gracia radical en acción.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>6. El Camino a Emaús (Lucas 24:13-35)</h2>
          <p>
            <em>
              "¿No ardía nuestro corazón en nosotros, mientras nos hablaba en el
              camino, y cuando nos abría las Escrituras?"
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado:</strong> El relato más emocionante de la
              Resurrección. Dos discípulos en su camino de desilusión son
              alcanzados por el Jesús resucitado. Él les explica las Escrituras,
              y solo al partir el pan le reconocen. Desaparece, pero ellos ya no
              son los mismos.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
