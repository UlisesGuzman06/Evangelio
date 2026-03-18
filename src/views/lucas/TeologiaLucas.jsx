import React from "react";
import "../pages.css";

export function TeologiaLucas() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Enfoque Teológico de Lucas</h1>
        <p className="subtitle">
          La gracia que alcanza a todos: el Salvador de toda la humanidad.
        </p>
      </header>

      <section className="content-section card">
        <h2 style={{ fontSize: "1.8rem" }}>
          El Hijo del Hombre: Salvador de Todos
        </h2>
        <p>
          La Cristología de Lucas es la más inclusiva de los cuatro evangelios.
          Mientras Mateo presenta a Jesús como el Mesías de Israel y Marcos como
          el Siervo poderoso, Lucas lo presenta como el "Hijo del Hombre" que
          vino a buscar y a salvar lo que se había perdido, sin distinción de
          raza, género o condición social. Su genealogía llega hasta Adán (no
          Abraham), declarando a Jesús hijo de toda la humanidad.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent bg-accent-light">
          <h2>Teología del Espíritu Santo</h2>
          <p>
            Lucas es el teólogo del Espíritu Santo por excelencia en los
            evangelios. El Espíritu actúa desde el principio: unge a María,
            llena a Juan desde el vientre, guía a Jesús al desierto y regresa
            con Él a Galilea en poder.
          </p>
          <p>
            Jesús promete que el Padre dará el Espíritu Santo a quien lo pida
            (11:13). Esta pneumatología de Lucas es el preludio directo de
            Pentecostés en Hechos 2.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>Teología de la Gracia y la Inversión</h2>
          <p>
            Lucas presenta una "reversión social" sistemática: los primeros
            serán los últimos, los pobres son bienaventurados, los ricos son
            advertidos, los fariseos son juzgados y los publicanos son salvados.
            La gracia de Dios opera inversamente a los méritos humanos y al
            estatus social.
          </p>
          <p>
            Esto culmina en la salvación del ladrón en la cruz (23:43): "Hoy
            estarás conmigo en el paraíso." Gracia hasta el último aliento.
          </p>
        </section>
      </div>

      <section className="content-section card">
        <h2>La Historia de la Salvación</h2>
        <p>
          Lucas tiene una visión "histórico-salvífica" única: divide la historia
          en eras. El tiempo de Israel (Ley y Profetas), el tiempo de Jesús (el
          centro de la historia), y el tiempo de la Iglesia (Hechos). Jesús no
          es un episodio aislado, sino el punto de inflexión de toda la historia
          humana: el momento en que Dios entró y cambió todo.
        </p>
        <p>
          Por eso Lucas muestra especial cuidado en vincular los acontecimientos
          del evangelio con la historia política del Imperio Romano (la
          genealogía de emperadores que abre el capítulo 2 y 3), declarando que
          Jesús es el Señor real del mundo, no César.
        </p>
      </section>
    </div>
  );
}
