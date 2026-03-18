import fs from 'fs';

const dir = 'src/views/hechos';

const introduccion = `"use client";
import React from "react";
import "../pages.css";

export function IntroduccionHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Introducción a los Hechos de los Apóstoles</h1>
        <p className="subtitle">
          La historia de la Iglesia primitiva empoderada por el Espíritu Santo.
        </p>
      </header>

      <section className="content-section card">
        <h2>¿Quién lo escribió?</h2>
        <p>
          El libro de los Hechos de los Apóstoles fue escrito por San Lucas, el mismo autor del tercer Evangelio. Como compañero de viaje del apóstol Pablo, Lucas documentó meticulosamente la rápida expansión del cristianismo desde Jerusalén hasta el corazón del Imperio Romano: Roma.
        </p>
        <p>
          Hechos es esencialmente el "Volumen 2" del Evangelio de Lucas. Inicia exactamente donde el evangelio termina: con Jesús ascendiendo al cielo y dejando a sus apóstoles la misión de llevar el mensaje de salvación al mundo entero.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2>Fecha de Composición</h2>
          <p>
            Generalmente se sitúa alrededor de los años <strong>62 y 64 d.C.</strong>, antes del martirio del apóstol Pablo y la destrucción del Templo de Jerusalén. Cierra abruptamente con Pablo bajo arresto domiciliario en Roma.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>Contexto Histórico</h2>
          <p>
            Relata una época de intensa transición histórica. El cristianismo comenzó como una pequeña secta judía en Judea y, en pocas décadas, guiados por el Espíritu Santo, cruzó barreras culturales, geográficas y religiosas para convertirse en un movimiento universal.
          </p>
        </section>
      </div>

      <section className="content-section card bg-accent-light">
        <h2>Un Libro de Transición y Acción</h2>
        <p>
          Hechos es el puente vital entre las narrativas de la vida de Jesús (Evangelios) y las cartas apostólicas (Epístolas), explicando el trasfondo de iglesias locales clave como Corinto, Éfeso y Filipos.
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <h3>El Espíritu Santo</h3>
            <p>
              A menudo llamado "Los Hechos del Espíritu Santo", porque Él es el principal agente que guía cada milagro, conversión y decisión.
            </p>
          </div>
          <div className="feature-item">
            <h3>De Pedro a Pablo</h3>
            <p>
              La primera mitad del libro se centra en el apóstol Pedro en Jerusalén; la segunda mitad sigue los viajes misioneros del apóstol Pablo hacia los gentiles.
            </p>
          </div>
          <div className="feature-item">
            <h3>Testigos en todo el mundo</h3>
            <p>
              Cumple la promesa de Hechos 1:8: "Me seréis testigos en Jerusalén, Judea, Samaria y hasta lo último de la tierra."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
`;

const estructura = `"use client";
import React from "react";
import "../pages.css";

export function EstructuraHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Estructura de Hechos</h1>
        <p className="subtitle">
          La expansión geográfica del Evangelio según el patrón ordenado por Jesús.
        </p>
      </header>

      <section className="content-section card">
        <h2>La Expansión Concéntrica (Hechos 1:8)</h2>
        <p>
          La estructura de Hechos sigue fielmente el mandato de Jesús antes de ascender: testificar desde Jerusalén hacia el exterior, cruzando fronteras culturales y geográficas en tres grandes etapas.
        </p>
        
        <div className="features-grid mt-4">
          <div className="feature-item highlight-card border-accent">
            <h3 style={{ color: "var(--color-accent)" }}>1. En Jerusalén (Caps. 1-7)</h3>
            <p>
              El derramamiento del Espíritu Santo en Pentecostés. Pedro predica valientemente. La iglesia primitiva nace, crece vertiginosamente, comparte todos sus bienes y sufre la primera gran persecución con el martirio de Esteban.
            </p>
          </div>
          
          <div className="feature-item highlight-card border-accent">
            <h3 style={{ color: "var(--color-accent)" }}>2. Judea y Samaria (Caps. 8-12)</h3>
            <p>
              La persecución dispersa a los creyentes. Felipe evangeliza Samaria y a un etíope. Saulo de Tarso, un severo perseguidor, experimenta una conversión dramática. Pedro lleva el evangelio por primera vez a gentiles (la casa de Cornelio).
            </p>
          </div>
          
          <div className="feature-item highlight-card border-accent">
            <h3 style={{ color: "var(--color-accent)" }}>3. Hasta lo último de la Tierra (Caps. 13-28)</h3>
            <p>
              Pablo y sus compañeros realizan tres extensos viajes misioneros plantando iglesias por toda Asia Menor y Grecia. Finalmente, Pablo es arrestado y apela a César, llevando el testimonio cristiano hasta la mismísima capital del Imperio: Roma.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
`;

const temas = `"use client";
import React from "react";
import "../pages.css";

export function TemasHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Temas Principales</h1>
        <p className="subtitle">
          El mensaje teológico y la misión detrás de la historia eclesiástica.
        </p>
      </header>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2 style={{ color: "var(--color-accent)" }}>El Soberano Espíritu Santo</h2>
          <p>
            El Espíritu Santo es presentado no solo como un poder, sino como el líder personal y director de la Iglesia. Él llena a los creyentes para predicar con denuedo (Hechos 2), dirige a Felipe al desierto (Hechos 8), ordena apartar a Bernabé y Saulo para las misiones (Hechos 13) y hasta les prohíbe ir a ciertas regiones de Asia (Hechos 16).
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2 style={{ color: "var(--color-accent)" }}>La Salvación de los Gentiles</h2>
          <p>
            Uno de los mayores cambios teológicos del Nuevo Testamento ocurre en Hechos: Dios rompe completamente el muro de separación entre judíos y no judíos (gentiles). El Concilio de Jerusalén (Hechos 15) concluye que los gentiles no necesitan volverse judíos ni circuncidarse para ser salvos por la gracia de Cristo.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2 style={{ color: "var(--color-accent)" }}>La Iglesia Triunfante en Persecución</h2>
          <p>
            Desde el mismo inicio, predicar la resurrección provocó arrestos, azotes y muertes. Sin embargo, Lucas demuestra sistemáticamente que ninguna fuerza política judía ni romana pudo frenar la Palabra. De hecho, la persecución actuó como el viento que esparció las semillas del evangelio por el mundo.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2 style={{ color: "var(--color-accent)" }}>El Jesucristo Resucitado</h2>
          <p>
            En cada sermón (de Pedro, Esteban o Pablo), el mensaje central es el mismo: Jesús, quien fue crucificado, ha resucitado, cumplido las Escrituras y sentado a la diestra de Dios como Señor y Juez de toda la humanidad.
          </p>
        </section>
      </div>
    </div>
  );
}
`;

const pasajes = `"use client";
import React from "react";
import "../pages.css";

export function PasajesHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Pasajes Clave</h1>
        <p className="subtitle">
          Momentos transformadores que cambiaron la historia del mundo.
        </p>
      </header>

      <section className="content-section card">
        <div className="features-grid">
          <div className="feature-item">
            <h3 style={{ color: "var(--color-accent)" }}>La promesa del Espíritu (1:8)</h3>
            <p>
              "Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos... hasta lo último de la tierra."
            </p>
          </div>
          
          <div className="feature-item">
            <h3 style={{ color: "var(--color-accent)" }}>El día de Pentecostés (2:1-4)</h3>
            <p>
              El derramamiento del Espíritu Santo sobre los discípulos, capacitándolos para hablar en las lenguas de los peregrinos de todo el mundo, naciendo así la Iglesia con 3,000 bautismos.
            </p>
          </div>
          
          <div className="feature-item">
            <h3 style={{ color: "var(--color-accent)" }}>Conversión de Saulo (9:3-5)</h3>
            <p>
              "Saulo, Saulo, ¿por qué me persigues?... Yo soy Jesús, a quien tú persigues." El encuentro dramático que transformó al mayor enemigo de la fe en el apóstol a los gentiles.
            </p>
          </div>
          
          <div className="feature-item">
            <h3 style={{ color: "var(--color-accent)" }}>El Concilio Apostólico (15:11)</h3>
            <p>
              La decisión revolucionaria de la iglesia primitiva: "Antes creemos que por la gracia del Señor Jesús seremos salvos, de igual modo que ellos (los gentiles)."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
`;

const teologia = `"use client";
import React from "react";
import "../pages.css";

export function TeologiaHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Enfoque Teológico</h1>
        <p className="subtitle">
          Una teología de la historia de la salvación en movimiento.
        </p>
      </header>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent bg-accent-light">
          <h2>La Continuidad del Pueblo de Dios</h2>
          <p>
            Lucas se esfuerza por demostrar teológicamente que el Cristianismo no es una nueva religión inventada que cancela el Antiguo Testamento. Al contrario, es el cumplimiento preciso y glorioso de las promesas que Dios hizo a Israel. Aquellos que rechazan a Jesús y su resurrección, argumenta Lucas, son los que se han apartado de la verdadera esperanza judía.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>La Apologética Cristiana</h2>
          <p>
            Hechos contiene una gran cantidad de discursos formales (aproximadamente un 20% del libro). Frente a multitudes judías, cortes filosóficas griegas (Areópago de Atenas) o gobernadores y reyes romanos, los apóstoles defienden vehementemente la fe apelando a las Escrituras, la lógica y el testimonio innegable de la resurrección.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>El Reino Espiritual</h2>
          <p>
            Al principio, los discípulos aún esperaban que Jesús estableciera un imperio político en Israel de inmediato (Hechos 1:6). Hechos reorienta esa escatología demostrando que el "Reino" ahora mismo es el señorío espiritual de Jesús extendiéndose en corazones y culturas a través del testimonio apostólico paciente y sufriente.
          </p>
        </section>
      </div>
    </div>
  );
}
`;

const historia = `"use client";
import React from "react";
import "../pages.css";

export function HistoriaHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Contexto Histórico</h1>
        <p className="subtitle">
          El cruce de culturas: la fe judeocristiana en la sociedad greco-romana.
        </p>
      </header>

      <section className="content-section card">
        <h2>Un Imperio conectado</h2>
        <p>
          La expansión asombrosa del cristianismo primitivo no fue accidente, operó bajo condiciones históricas que teológicamente se ven como la preparación providencial de Dios:
        </p>
        <ul className="custom-list mt-3">
          <li><strong>Pax Romana:</strong> El imperio estaba mayormente en paz y sin las antiguas guerras fronterizas, permitiendo el viaje seguro.</li>
          <li><strong>Vías Romanas:</strong> Los modernos sistemas de carreteras de Roma conectaban eficientemente todo el imperio. Pablo cubrió aproximadamente 16,000 kilómetros.</li>
          <li><strong>Idioma Común (Koiné):</strong> Gracias a las conquistas de Alejandro Magno siglos atrás, el griego era la lengua franca, lo que permitió a Pablo predicar desde Antioquía hasta Roma en un solo idioma.</li>
        </ul>
      </section>

      <section className="content-section card bg-accent-light">
        <h2>La Situación Judía y Romana</h2>
        <p>
          En este periodo, la fe judía (<em>religio licita</em>) gozaba de un estatus legal especial de tolerancia por parte de Roma. En sus primeros años, los romanos consideraban a la iglesia cristiana simplemente como "otra secta judía más" (como los fariseos o esenios), gozando así de protección legal temporal.
        </p>
        <p>
          A medida que Hechos progresa, vemos la transición donde los judíos procuran expulsar a los cristianos de la sinagoga, forzando a los magistrados romanos a empezar a evaluarlos como una religión distinta y eventualmente proscrita, lo que provocaría terribles persecuciones en el futuro.
        </p>
      </section>
    </div>
  );
}
`;

const conclusion = `"use client";
import React from "react";
import "../pages.css";

export function ConclusionHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Conclusión</h1>
        <p className="subtitle">
          Una historia que se sigue escribiendo a través de la Iglesia hoy.
        </p>
      </header>

      <section className="content-section card highlight-card border-accent bg-accent-light" style={{ padding: "3rem" }}>
        <h2 style={{ textAlign: "center", color: "var(--color-accent)", fontSize: "2rem" }}>Un Final Abierto</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "1.5rem" }}>
          El libro de los Hechos de los Apóstoles termina de una forma sorprendentemente abrupta. Pablo está bajo arresto domiciliario en Roma, pero Lucas enfatiza triunfalmente que está predicando el Reino de Dios y enseñando acerca de Jesucristo con <strong>"toda libertad y sin estorbo" (Hechos 28:31).</strong>
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          ¿Por qué no nos cuenta qué le pasó a Pablo? Teológicamente, porque <em>el libro de los Hechos nunca tuvo el propósito de ser una biografía humana</em>. Fue escrito para documentar el progreso incesante del Evangelio y el ministerio del Espíritu Santo, y esa obra... <strong>¡no ha terminado!</strong> Nosotros, como la Iglesia actual que continúa expandiendo el mismo mensaje e impulsada por el mismo Espíritu en todo el mundo, somos esencialmente el "Capítulo 29" de los Hechos.
        </p>
      </section>
    </div>
  );
}
`;

fs.writeFileSync(dir + '/IntroduccionHechos.jsx', introduccion);
fs.writeFileSync(dir + '/EstructuraHechos.jsx', estructura);
fs.writeFileSync(dir + '/TemasHechos.jsx', temas);
fs.writeFileSync(dir + '/PasajesHechos.jsx', pasajes);
fs.writeFileSync(dir + '/TeologiaHechos.jsx', teologia);
fs.writeFileSync(dir + '/HistoriaHechos.jsx', historia);
fs.writeFileSync(dir + '/ConclusionHechos.jsx', conclusion);

console.log("Written deeply informative components for Hechos!");
