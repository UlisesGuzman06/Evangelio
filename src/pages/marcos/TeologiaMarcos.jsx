import React from "react";
import "../pages.css";

export function TeologiaMarcos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Enfoque Teológico de Marcos</h1>
        <p className="subtitle">
          El Hijo de Dios como Siervo sufriente y victorioso.
        </p>
      </header>

      <section className="content-section card">
        <h2 style={{ fontSize: "1.8rem" }}>El Siervo que Actúa</h2>
        <p>
          La Cristología de Marcos es esencialmente una Cristología de acción.
          Más que definir quién es Jesús mediante discursos (como en Juan) o
          genealogías (como en Mateo), Marcos presenta la identidad de Cristo a
          través de lo que <em>hace</em>: sana, exorciza, perdona, calma
          tormentas y resucita muertos. El "Hijo de Dios" (1:1) es conocido por
          sus obras poderosas.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent bg-accent-light">
          <h2>El Hijo del Hombre</h2>
          <p>
            Marcos usa con frecuencia el título "Hijo del Hombre", la
            designación que Jesús prefería para referirse a sí mismo. Tiene
            doble resonancia: evoca a la misteriosa figura exaltada de Daniel
            7:13-14, y también subraya su solidaridad real con la humanidad en
            su sufrimiento y entrega como rescate.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>Dios en la Cruz</h2>
          <p>
            La teología de la gloria de Marcos pasa obligatoriamente por la
            teología de la cruz. Solo cuando Jesús muere, el velo del templo se
            rasga de arriba abajo (16:38) y el centurión gentil proclama su
            divinidad. Para Marcos, la cruz no es una derrota: es la máxima
            revelación del poder de Dios.
          </p>
        </section>
      </div>

      <section className="content-section card">
        <h2>El Secreto Mesiánico y la Fe</h2>
        <p>
          El "secreto mesiánico" de Marcos no es simple discreción táctica. Es
          un recurso teológico profundo: la verdadera identidad de Jesús solo
          puede comprenderse plenamente a la luz de la cruz y la resurrección.
          Quien vea solo los milagros sin entender el sufrimiento, no comprende
          al Cristo real.
        </p>
        <p>
          Marcos también es el evangelio de la fe combativa: la mujer con flujo
          de sangre que toca su manto, el padre que clama "creo, pero ayúdame en
          mi incredulidad" (9:24), Bartimeo que grita sin importar lo que le
          digan. Estos son los modelos de fe que Marcos propone al lector.
        </p>
      </section>
    </div>
  );
}
