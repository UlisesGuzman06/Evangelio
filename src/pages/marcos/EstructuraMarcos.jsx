import React from "react";
import "../pages.css";

export function EstructuraMarcos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Estructura de Marcos</h1>
        <p className="subtitle">
          El evangelio más breve y dinámico, dividido en dos grandes actos.
        </p>
      </header>

      <section className="content-section card">
        <p>
          El Evangelio de Marcos sigue una estructura bipartita
          sorprendentemente clara, que gira en torno a la confesión central de
          Pedro en Cesarea de Filipo (Marcos 8:29). La primera mitad muestra{" "}
          <em>quién es Jesús</em> a través de sus milagros y enseñanzas; la
          segunda mitad explica
          <em> qué vino a hacer</em>, con el camino hacia la cruz como centro
          narrativo.
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
          <h2>1. Prólogo: El Comienzo del Evangelio (Marcos 1:1-13)</h2>
          <p>
            Sin genealogía ni relato de infancia, Marcos abre con tres eventos
            que presentan a Jesús: el ministerio de Juan el Bautista, el
            bautismo de Jesús donde Dios lo proclama su Hijo, y la tentación en
            el desierto.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Versículo clave:</strong> "El principio del evangelio de
              Jesucristo, Hijo de Dios." (1:1)
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>2. El Ministerio en Galilea (Marcos 1:14 – 7:23)</h2>
          <p>
            Jesús proclama el Reino con extraordinario poder. Llama a sus
            discípulos, sana enfermos, expulsa demonios, calma tormentas y
            perdona pecados. Las multitudes quedan asombradas, mientras los
            fariseos comienzan a oponerse a Él.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Tema central:</strong> ¿Quién es este hombre que tiene tal
              autoridad?
            </li>
            <li>
              <strong>Palabra clave:</strong> "Inmediatamente" (εὐθύς) – más de
              40 veces
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>3. El Ministerio fuera de Galilea (Marcos 7:24 – 10:52)</h2>
          <p>
            Comienza con la confesión de Pedro y el primer anuncio de la pasión.
            Jesús abre sus viajes hacia Jerusalén, enseñando sobre el servicio,
            el sacrificio y el verdadero discipulado. La Transfiguración
            confirma su identidad ante Pedro, Jacobo y Juan.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Giro narrativo:</strong> "Tú eres el Cristo." (8:29)
            </li>
            <li>
              <strong>Tema central:</strong> El Mesías no viene a reinar, sino a
              servir y sufrir
            </li>
          </ul>
        </div>

        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>4. La Pasión y la Resurrección (Marcos 11 – 16)</h2>
          <p>
            La entrada triunfal, la purificación del Templo, los debates con
            líderes religiosos, la Última Cena, la agonía en Getsemaní, el
            arresto, el juicio ante Pilato, la crucifixión y la gloriosa
            resurrección.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Clímax:</strong> "¡Ha resucitado! No está aquí." (16:6)
            </li>
            <li>
              <strong>Dato único:</strong> El final original de Marcos (16:8) es
              abrupto y sorprendente
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
