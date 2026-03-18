import React from "react";
import "../pages.css";

export function PasajesMateo() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Pasajes Clave en Mateo</h1>
        <p className="subtitle">
          Textos fundamentales que definen el primer Evangelio.
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          El Evangelio de Mateo contiene discursos magistrales y declaraciones
          que forman la columna vertebral teológica y moral de la fe cristiana.
          A continuación, exploramos los textos más icónicos de su relato.
        </p>
      </section>

      <div
        className="features-grid"
        style={{ gridTemplateColumns: "1fr", gap: "2rem" }}
      >
        {/* 1. Emanuel */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>1. Emanuel, Dios con nosotros (Mateo 1:23)</h2>
          <p>
            <em>
              "He aquí, una virgen concebirá y dará a luz un hijo, y llamarás su
              nombre Emanuel, que traducido es: Dios con nosotros."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Este texto establece el
              tono y el marco de todo el Evangelio. Al citar a Isaías, Mateo
              revela inmediatamente la divinidad entrelazada con la humanidad
              del Mesías. Esta promesa mesiánica reaparece hermosamente en el
              último versículo del libro (28:20) completando el ciclo: Él nació
              para estar con nosotros, y estará con nosotros hasta el fin del
              mundo.
            </li>
          </ul>
        </div>

        {/* 2. Sermón del Monte */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>2. El Sermón del Monte (Mateo 5-7)</h2>
          <p>
            <em>
              "Bienaventurados los pobres en espíritu, porque de ellos es el
              reino de los cielos... Cualquiera, pues, que me oye estas
              palabras, y las hace, le compararé a un hombre prudente..."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Es sin duda el resumen más
              completo de la ética cristiana. Jesús se posiciona no como alguien
              que deroga a Moisés, sino como su cumplimiento absoluto ("no he
              venido para abrogar, sino para cumplir"), y redefine la moral
              enseñando que el corazón (no solo las acciones externas) es lo que
              Dios examina y lo que determina la rectitud.
            </li>
          </ul>
        </div>

        {/* 3. Parábolas del Reino */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>3. Las Parábolas del Reino (Mateo 13)</h2>
          <p>
            <em>
              "El reino de los cielos es semejante a un grano de mostaza... El
              reino de los cielos es semejante a la levadura..."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> A través de un lenguaje
              cotidiano y agrario, Jesús revela el misterio de que Su Reino no
              se establecería al principio con gran gloria y despliegue militar
              (como esperaban los líderes judíos), sino que iniciaría de forma
              humilde y oculta para luego crecer y transformar el mundo entero
              irreversiblemente.
            </li>
          </ul>
        </div>

        {/* 4. Confesión de Pedro */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>4. La Confesión de Pedro (Mateo 16:16-18)</h2>
          <p>
            <em>
              "Respondiendo Simón Pedro, dijo: Tú eres el Cristo, el Hijo del
              Dios viviente... Y yo también te digo, que tú eres Pedro, y sobre
              esta roca edificaré mi iglesia."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Es el momento decisivo del
              ministerio terrenal. Bajo la revelación del Padre, Pedro reconoce
              la divinidad de Jesús. Aquí, además, Cristo hace su primera
              mención explícita a "la asamblea" (<em>Ekklesia</em> en griego,
              que traducimos como iglesia), prometiendo que el inmenso poder de
              la muerte jamás prevalecerá contra ella.
            </li>
          </ul>
        </div>

        {/* 5. La Transfiguración */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>5. La Transfiguración (Mateo 17:1-8)</h2>
          <p>
            <em>
              "Y se transfiguró delante de ellos, y resplandeció su rostro como
              el sol, y sus vestidos se hicieron blancos como la luz. Y he aquí
              les aparecieron Moisés y Elías, hablando con él."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Ofrece un adelanto visible
              de la gloria celestial y divina que Jesús poseería tras su
              resurrección. Moisés (representando la Ley) y Elías (los Profetas)
              dan paso a la figura superior del Hijo amado de Dios, demostrando
              nuevamente que en Cristo toda la tradición hebrea halla su clímax.
            </li>
          </ul>
        </div>

        {/* 6. Juicio de las Naciones */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>6. El Juicio de las Naciones (Mateo 25:31-46)</h2>
          <p>
            <em>
              "De cierto os digo que en cuanto lo hicisteis a uno de estos mis
              hermanos más pequeños, a mí lo hicisteis."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Es el evento cumbre del
              discurso escatológico de Jesús. Él se describe como Rey y Juez
              absoluto de toda la humanidad separando "las ovejas de los
              cabritos". Muestra que el verdadero discipulado y el amor por Dios
              están indisolublemente ligados al cuidado y compasión radical por
              el prójimo sufriente, identificándose Él mismo con los más
              marginados.
            </li>
          </ul>
        </div>

        {/* 7. Gran Comisión */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>7. La Gran Comisión (Mateo 28:18-20)</h2>
          <p>
            <em>
              "Toda potestad me es dada en el cielo y en la tierra. Por tanto,
              id, y haced discípulos a todas las naciones... y he aquí yo estoy
              con vosotros todos los días, hasta el fin del mundo."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Con un nivel de autoridad
              incomparable y cósmica asimilada por su resurrección, Jesús
              establece la misión última y expansiva de la fe: hacer discípulos
              de todas las etnias del mundo, bautizarlos y enseñarles su marco
              ético, con la sublime garantía de Su presencia inagotable.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
