import React from "react";
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
