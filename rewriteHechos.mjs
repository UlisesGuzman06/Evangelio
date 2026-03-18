import fs from 'fs';

const dir = 'src/views/hechos';

// ===================== TEMAS =====================
const temas = `import React from "react";
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
`;

// ===================== PASAJES =====================
const pasajes = `import React from "react";
import "../pages.css";

export function PasajesHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Pasajes Clave en Hechos</h1>
        <p className="subtitle">
          Momentos transformadores que cambiaron la historia del mundo.
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          El libro de los Hechos de los Apóstoles está repleto de momentos
          decisivos: discursos que fundaron la Iglesia, milagros que abrieron
          ciudades enteras al Evangelio y decisiones que reorientaron el curso
          de la historia religiosa de la humanidad.
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
          <h2>1. La promesa del Espíritu (Hechos 1:8)</h2>
          <p>
            <em>
              "Pero recibiréis poder, cuando haya venido sobre vosotros el
              Espíritu Santo, y me seréis testigos en Jerusalén, en toda
              Judea, en Samaria, y hasta lo último de la tierra."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Este versículo funciona
              como el índice temático y geográfico de todo el libro. Cada sección
              de Hechos corresponde a uno de los círculos concéntricos de la
              misión: Jerusalén (caps. 1-7), Judea y Samaria (caps. 8-12) y los
              confines de la tierra (caps. 13-28).
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>2. Pentecostés (Hechos 2:1-4)</h2>
          <p>
            <em>
              "Y de repente vino del cielo un estruendo como de un viento
              recio que soplaba... y fueron todos llenos del Espíritu Santo,
              y comenzaron a hablar en otras lenguas, según el Espíritu les
              daba que hablasen."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Es el nacimiento oficial de
              la Iglesia. Donde la Torre de Babel dispersó a la humanidad
              confundiendo los idiomas, Pentecostés revierte ese juicio: el
              Espíritu une a personas de toda nación bajo el mismo mensaje de
              salvación. Tres mil personas se bautizan en un solo día.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>3. La conversión de Saulo (Hechos 9:3-5)</h2>
          <p>
            <em>
              "Mas yendo por el camino, aconteció que al llegar cerca de
              Damasco, repentinamente le rodeó un resplandor de luz del cielo;
              y cayendo en tierra, oyó una voz que le decía: Saulo, Saulo,
              ¿por qué me persigues?"
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> El mayor enemigo de la fe
              se convierte en su defensor más brillante. Esta conversión dramática
              demuestra la soberanía absoluta de Dios y fue el punto de inflexión
              que permitió la evangelización del mundo gentil greco-romano.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>4. El Concilio de Jerusalén (Hechos 15:11)</h2>
          <p>
            <em>
              "Antes creemos que por la gracia del Señor Jesús seremos salvos,
              de igual modo que ellos."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> El primer concilio oficial
              de la Iglesia resuelve la crisis más grande de su historia: si los
              gentiles deben circuncidarse y guardar la ley para ser salvos. La
              respuesta unánime es no. La gracia de Cristo es completamente
              suficiente para todos.
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>5. Pablo en el Areópago de Atenas (Hechos 17:22-23)</h2>
          <p>
            <em>
              "Varones atenienses, en todo observo que sois muy religiosos;
              porque pasando y mirando vuestros santuarios, hallé también un
              altar en el cual estaba esta inscripción: Al Dios no conocido.
              Al que vosotros adoráis, pues, sin conocerle, es a quien yo os
              anuncio."
            </em>
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Es el ejemplo más brillante
              de apologética cristiana contextualizada. Pablo no rechaza la
              cultura griega sino que la usa como puente: cita a sus propios
              poetas y filósofos para presentarles al Dios vivo que ellos ya
              intuían sin conocer.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
`;

// ===================== TEOLOGIA =====================
const teologia = `import React from "react";
import "../pages.css";

export function TeologiaHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Enfoque Teológico de Hechos</h1>
        <p className="subtitle">
          Una teología de la historia de la salvación en movimiento constante.
        </p>
      </header>

      <section className="content-section card">
        <h2 style={{ fontSize: "1.8rem" }}>La Continuidad del Pueblo de Dios</h2>
        <p>
          Lucas se esfuerza por demostrar que el Cristianismo no es una religión
          nueva que "cancela" al Antiguo Testamento. Es el cumplimiento preciso
          de las promesas que Dios hizo a Israel. En cada discurso, los apóstoles
          conectan la resurrección de Jesús con las Escrituras hebreas, declarando
          que quienes rechazan la resurrección se han apartado de la verdadera
          esperanza judía.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent bg-accent-light">
          <h2>La Promesa de Abraham Cumplida</h2>
          <p>
            El sermón de Pedro en Pentecostés y el de Pablo en Antioquía de
            Pisidia (Hechos 13) presentan la resurrección de Jesús como el
            cumplimiento de la promesa hecha a Abraham: que en su descendencia
            serían benditas todas las familias de la tierra, un "todas" que ahora
            incluye explícitamente a los gentiles.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>La Apologética Cristiana</h2>
          <p>
            Hechos contiene numerosos discursos formales ante multitudes judías,
            filósofos griegos (Areópago) y gobernadores romanos. Los apóstoles
            defienden la fe apelando a las Escrituras, la argumentación lógica y
            el testimonio innegable de la resurrección, estableciendo el modelo
            de la apologética cristiana para todos los siglos.
          </p>
        </section>
      </div>

      <section className="content-section card">
        <h2>Un Reino Espiritual, No Político</h2>
        <p>
          Al principio, incluso los apóstoles esperaban que Jesús restaurara el
          reino político de Israel de inmediato (Hechos 1:6). Hechos reorienta
          esa expectativa: el "Reino" se está estableciendo ahora mismo como el
          señorío espiritual de Cristo resucitado, extendiéndose en corazones y
          culturas a través del testimonio apostólico sufriente y lleno del Espíritu.
          <br /><br />
          La geografía del libro —de Jerusalén a Roma— es una metáfora teológica:
          el evangelio viaja del centro del mundo judío al centro del poder
          romano, afirmando que ningún reino humano puede contenerlo.
        </p>
      </section>
    </div>
  );
}
`;

// ===================== HISTORIA =====================
const historia = `import React from "react";
import "../pages.css";

export function HistoriaHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Contexto Histórico de Hechos</h1>
        <p className="subtitle">
          El cruce providencial de culturas: la fe judeocristiana en el Imperio Romano.
        </p>
      </header>

      <section className="content-section card">
        <h2>Un Imperio providencialmente preparado</h2>
        <p>
          La expansión meteórica del cristianismo primitivo no fue accidente.
          Dios usó las condiciones históricas del Imperio Romano como escenario
          perfecto para la misión apostólica. Tres factores fueron determinantes:
        </p>
        <ul className="custom-list mt-4">
          <li>
            <strong>Pax Romana:</strong> El Imperio gozaba de una paz relativa
            que permitía el viaje seguro por tierra y mar. Pablo pudo moverse
            entre provincias sin las antiguas barreras de las guerras tribales.
          </li>
          <li>
            <strong>Las Vías Romanas:</strong> Una red de carreteras sin
            precedentes conectaba todo el Imperio. Se calcula que Pablo recorrió
            más de 16,000 kilómetros en sus tres viajes misioneros.
          </li>
          <li>
            <strong>El Griego Koiné:</strong> Gracias a las conquistas de
            Alejandro Magno siglos antes, el griego era la lengua franca del
            Mediterráneo. Pablo podía predicar el mismo sermón desde Antioquía
            hasta Roma sin necesitar intérprete.
          </li>
        </ul>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2>El Status Legal del Judaísmo</h2>
          <p>
            En el mundo romano, el judaísmo era una <em>religio licita</em>:
            una religión oficialmente tolerada y protegida. En sus primeros años,
            los romanos trataban a los cristianos como una secta más del judaísmo,
            otorgándoles protección legal indirecta, lo que explica por qué los
            apóstoles siempre iban primero a la sinagoga local.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>La Separación con el Judaísmo</h2>
          <p>
            A medida que Hechos avanza, los líderes judíos procuran expulsar a
            los creyentes de las sinagogas. Esto obliga a los magistrados romanos
            a empezar a ver al cristianismo como una religión distinta y
            eventualmente proscrita, preparando el camino para las grandes
            persecuciones de los siglos I y II.
          </p>
        </section>
      </div>
    </div>
  );
}
`;

// ===================== CONCLUSION =====================
const conclusion = `import React from "react";
import "../pages.css";

export function ConclusionHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Conclusión de Hechos</h1>
        <p className="subtitle">
          Una historia que se sigue escribiendo a través de la Iglesia hoy.
        </p>
      </header>

      <section className="content-section card">
        <h2 style={{ fontSize: "1.8rem" }}>Un Final Abierto e Intencional</h2>
        <p>
          El libro de los Hechos termina de una manera sorprendentemente abrupta.
          Pablo está bajo arresto domiciliario en Roma, y el libro cierra sin
          decirnos qué le sucedió finalmente. Sin embargo, Lucas enfatiza con
          fuerza que Pablo predica "con toda libertad y sin estorbo" (Hch 28:31).
        </p>
        <p>
          ¿Por qué no nos narra el desenlace de Pablo? Porque Hechos nunca fue
          una biografía humana. Fue escrito para documentar el progreso
          imparable del Evangelio. Y ese progreso... <strong>no ha terminado.</strong>
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent bg-accent-light">
          <h2>El Capítulo 29... Somos Nosotros</h2>
          <p>
            La Iglesia actual que continúa predicando el mismo mensaje,
            impulsada por el mismo Espíritu, en todos los rincones del mundo,
            es esencialmente el "Capítulo 29" de los Hechos de los Apóstoles.
            Lucas dejó el libro abierto porque la historia del avance del
            Evangelio no termina en el siglo I.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>La Palabra que no puede ser atada</h2>
          <p>
            A lo largo de Hechos, por más que se encarcela a los predicadores,
            se les azota o incluso se les mata, la Palabra de Dios siempre
            "crecía y se multiplicaba" (Hch 6:7; 12:24; 19:20). El verdadero
            protagonista no puede ser detenido por ningún poder humano.
          </p>
        </section>
      </div>
    </div>
  );
}
`;

// ===================== ESTRUCTURA =====================
const estructura = `import React from "react";
import "../pages.css";

export function EstructuraHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Estructura de Hechos</h1>
        <p className="subtitle">
          La expansión geográfica del Evangelio según el mandato de Jesús.
        </p>
      </header>

      <section className="content-section card">
        <h2 style={{ fontSize: "1.8rem" }}>La Expansión Concéntrica (Hechos 1:8)</h2>
        <p>
          La estructura de Hechos sigue con precisión el mandato de Jesús antes
          de ascender: "Me seréis testigos en Jerusalén, en toda Judea, en
          Samaria, y hasta lo último de la tierra." Cada etapa corresponde a una
          sección del libro.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2>1. En Jerusalén (Caps. 1-7)</h2>
          <p>
            El derramamiento del Espíritu en Pentecostés. Pedro predica con
            denuedo. La iglesia primitiva nace, crece vertiginosamente y comparte
            sus bienes. La primera gran persecución culmina con el martirio de
            Esteban, el primer mártir cristiano.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>2. Judea y Samaria (Caps. 8-12)</h2>
          <p>
            La persecución dispersa a los creyentes y el Evangelio se esparce.
            Felipe evangeliza Samaria y a un etíope. Saulo de Tarso se convierte
            dramáticamente. Pedro lleva el evangelio por primera vez a los
            gentiles en casa de Cornelio.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>3. Hasta lo Último (Caps. 13-20)</h2>
          <p>
            Pablo y sus compañeros realizan tres extensos viajes misioneros
            plantando iglesias en Asia Menor, Macedonia y Grecia. Se celebra el
            Concilio de Jerusalén que abre las puertas a los gentiles sin condiciones.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>4. De Jerusalén a Roma (Caps. 21-28)</h2>
          <p>
            Pablo es arrestado en Jerusalén, apela a César y es trasladado a
            Roma. Naufragios, comparecencias ante reyes y gobernadores no pueden
            detener su testimonio. El libro cierra con Pablo predicando en el
            corazón del Imperio Romano.
          </p>
        </section>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(dir + '/TemasHechos.jsx', temas);
fs.writeFileSync(dir + '/PasajesHechos.jsx', pasajes);
fs.writeFileSync(dir + '/TeologiaHechos.jsx', teologia);
fs.writeFileSync(dir + '/HistoriaHechos.jsx', historia);
fs.writeFileSync(dir + '/ConclusionHechos.jsx', conclusion);
fs.writeFileSync(dir + '/EstructuraHechos.jsx', estructura);

console.log("All Hechos pages rewritten matching Mateo/Marcos/Lucas/Juan structure exactly!");
