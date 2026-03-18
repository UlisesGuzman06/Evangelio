import React from "react";
import "../pages.css";

export function TemasLucas() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Temas Principales en Lucas</h1>
        <p className="subtitle">
          La gracia universal, el Espíritu Santo y la compasión radical de
          Jesús.
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          Lucas escribe con una sensibilidad socialy espiritual excepcional. Sus
          temas fundamentales giran en torno a la universalidad de la salvación,
          la obra del Espíritu, el lugar privilegiado de los pobres y
          marginados, y la centralidad de la oración en la vida de Jesús.
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
            1. Salvación Universal
          </h2>
          <p>
            Lucas extiende la salvación más allá de Israel. Su genealogía llega
            hasta Adán (no Abraham), incluyendo a toda la humanidad. Jesús alaba
            la fe del centurión romano (7:9), sana al leproso samaritano
            (17:16), y promete el paraíso al ladrón en la cruz (23:43).
          </p>
          <p>
            La Gran Comisión en Lucas incluye explícitamente "a todas las
            naciones" (24:47), anticipando Hechos y la misión global.
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
            2. El Espíritu Santo
          </h2>
          <p>
            Ningún evangelio menciona al Espíritu Santo tanto como Lucas. Está
            presente desde el anuncio a María, llena a Elisabet y Zacarías,
            descansa sobre Simeón, ungió a Jesús en su bautismo y lo guió al
            desierto.
          </p>
          <p>
            Jesús mismo fue "lleno del Espíritu Santo" y ejerció su ministerio
            "en el poder del Espíritu". Lucas prepara al lector para Pentecostés
            en Hechos donde el Espíritu se derrama sobre todos.
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
            3. Los Marginados y los Pobres
          </h2>
          <p>
            El Magnificat de María ya anticipa el tema: Dios "exaltó a los
            humildes" y "a los hambrientos llenó de bienes" (1:52-53). Jesús
            declara en Nazaret que su misión es anunciar buenas noticias a{" "}
            <em>los pobres</em> (4:18).
          </p>
          <p>
            Las parábolas del Rico y Lázaro y del Fariseo y Publicano desafían
            radicalmente las suposiciones sobre quién está del lado de Dios.
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
            4. La Oración y el Gozo
          </h2>
          <p>
            Jesús ora en momentos críticos en Lucas como en ningún otro
            evangelio: en su bautismo, antes de elegir a los doce, en la
            Transfiguración, en Getsemaní, y en la cruz misma.
          </p>
          <p>
            El gozo también permea todo el libro: hay regocijo en el nacimiento
            de Jesús (2:10), en el retorno de los setenta (10:21), en las
            parábolas de lo perdido-encontrado (15:7) y en la resurrección
            (24:52).
          </p>
        </div>
      </div>
    </div>
  );
}
