import React from "react";
import "../pages.css";

export function TemasJuan() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Temas Principales</h1>
        <p className="subtitle">
          Los hilos conductores de la teología joánica.
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          A diferencia de los evangelios sinópticos que se centran mayormente en
          el "Reino de Dios", el Evangelio de Juan estructura su mensaje
          alrededor de grandes conceptos teológicos abstractos que, a su vez,
          son profundamente personales y se encarnan en Jesucristo.
        </p>
      </section>

      <div className="grid-2">
        {/* El Logos */}
        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            Jesús como el Logos (Verbo)
          </h2>
          <p>
            El concepto del <strong>Logos</strong> aparece majestuosamente en el
            Prólogo (Juan 1:1-14). Para los griegos, el Logos era la razón
            universal que daba orden al cosmos; para los judíos, era la poderosa
            e irresistible Palabra de Dios que creó el mundo y habló por los
            profetas.
          </p>
          <p>
            Juan une ambos mundos revelando que este principio eterno e
            impersonal no era una simple fuerza, sino una Persona Divina que "se
            hizo carne y habitó entre nosotros". Jesús es la comunicación
            perfecta y final de Dios a la humanidad.
          </p>
        </div>

        {/* Luz y Tinieblas */}
        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            La Luz y las Tinieblas
          </h2>
          <p>
            El Evangelio de Juan presenta un marcado{" "}
            <strong>dualismo ético y espiritual</strong>. Jesús declara ser la
            "Luz del mundo" (Juan 8:12). La luz simboliza la verdad, la
            revelación divina, la pureza y la salvación.
          </p>
          <p>
            Por su parte, las tinieblas representan la ignorancia, el pecado, la
            oposición demoníaca y el mundo alejado de Dios. El evangelio narra
            el conflicto cósmico entre ambas esferas, asegurando desde el primer
            capítulo que "las tinieblas no prevalecieron contra ella" (Juan
            1:5).
          </p>
        </div>

        {/* Vida Eterna */}
        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            La Vida Eterna (Zoe)
          </h2>
          <p>
            Mientras que los otros evangelios hablan del "Reino", Juan habla de{" "}
            <strong>"La Vida"</strong> o "Vida Eterna". Juan utiliza la palabra
            griega <em>zoe</em> para referirse no simplemente a una vida que no
            termina cronológicamente, sino a una "calidad" de vida divina.
          </p>
          <p>
            Según Juan 17:3, la vida eterna consiste en <em>conocer</em> al
            único Dios verdadero y a Jesucristo. Esta vida no empieza solamente
            después de la muerte; el creyente ya ha pasado "de muerte a vida"
            (Juan 5:24) en el momento en que cree.
          </p>
        </div>

        {/* El Amor */}
        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            El Amor (Agape)
          </h2>
          <p>
            El amor es el motivo principal de la redención: "Porque de tal
            manera amó Dios al mundo..." (Juan 3:16). A la vez, es la marca
            distintiva innegociable del discípulo.
          </p>
          <p>
            Jesús eleva el mandato del Antiguo Testamento ("amarás a tu prójimo
            como a ti mismo") al dar un "Mandamiento Nuevo":{" "}
            <strong>Que os améis unos a otros como yo os he amado</strong> (Juan
            13:34). Es decir, el estándar mínimo del amor cristiano no es el
            amor propio, sino el amor sacrificial de Cristo en la cruz.
          </p>
        </div>
      </div>

      <section
        className="content-section card bg-accent-light"
        style={{ marginTop: "3rem" }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Las 7 Declaraciones "Yo Soy" (Ego Eimi)
        </h2>
        <p style={{ marginBottom: "2rem", textAlign: "center" }}>
          La frase griega <em>Ego Eimi</em> recuerda poderosamente el nombre de
          Dios revelado a Moisés en Éxodo 3:14 ("YO SOY EL QUE SOY"). Jesús
          utiliza esta fórmula siete veces unida a metáforas vitales para
          revelar diferentes aspectos de su carácter salvífico:
        </p>

        <ul
          className="custom-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            paddingLeft: "1.5rem",
          }}
        >
          <li>
            <strong>Yo soy el pan de vida</strong> (6:35): El sustento que
            satisface el hambre espiritual eterna.
          </li>
          <li>
            <strong>Yo soy la luz del mundo</strong> (8:12): La guía y verdad en
            medio de la oscuridad del pecado.
          </li>
          <li>
            <strong>Yo soy la puerta de las ovejas</strong> (10:7): El único
            punto de acceso legítimo a la salvación.
          </li>
          <li>
            <strong>Yo soy el buen pastor</strong> (10:11): Aquel que cuida,
            protege y da su vida por sus ovejas.
          </li>
          <li>
            <strong>Yo soy la resurrección y la vida</strong> (11:25): El
            vencedor definitivo sobre la muerte física y espiritual.
          </li>
          <li>
            <strong>Yo soy el camino, la verdad, y la vida</strong> (14:6): El
            acceso exclusivo y la revelación perfecta del Padre.
          </li>
          <li>
            <strong>Yo soy la vid verdadera</strong> (15:1): La única fuente de
            vitalidad para producir fruto espiritual.
          </li>
        </ul>

        <p className="mt-4" style={{ marginTop: "2rem", fontStyle: "italic" }}>
          * Adicionalmente, Jesús usa el "YO SOY" (Ego eimi) de forma absoluta,
          sin predicado, reclamando directa deidad, notablemente en Juan 8:58:
          "Antes que Abraham fuese, <strong>YO SOY</strong>".
        </p>
      </section>
    </div>
  );
}
