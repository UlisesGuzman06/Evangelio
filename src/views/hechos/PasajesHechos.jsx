import React from "react";
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
