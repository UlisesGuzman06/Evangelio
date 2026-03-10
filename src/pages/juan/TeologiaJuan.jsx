import React from "react";
import "../pages.css";

export function TeologiaJuan() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Enfoque Teológico de Juan</h1>
        <p className="subtitle">
          "Estas se han escrito para que creáis que Jesús es el Cristo" (Juan
          20:31)
        </p>
      </header>

      <section className="content-section card">
        <h2 style={{ fontSize: "1.8rem" }}>
          La Reflexión sobre la Divinidad de Cristo
        </h2>
        <p>
          Juan tiene lo que los teólogos llaman una "Cristología alta". Ningún
          otro evangelio hace declaraciones tan absolutas, directas e
          inequívocas sobre la deidad preexistente de Jesucristo.
        </p>
        <p>
          Desde el versículo 1 ("el Verbo era Dios") hasta la confesión de Tomás
          en el capítulo 20 ("¡Señor mío, y Dios mío!"), todo el libro es una
          apología monumental defendiendo que el humilde carpintero de Nazaret
          es eternamente co-igual al Padre. Cuando la gente pregunta a Jesús su
          identidad, Él utiliza el impronunciable nombre divino "YO SOY".
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent bg-accent-light">
          <h2>Su Lenguaje Simbólico</h2>
          <p>
            El universo joánico es de doble nivel: lo terrenal y lo celestial,
            lo material y lo espiritual. Jesús usa eventos cotidianos o
            elementos físicos como "ventanas" para revelar verdades eternas
            supremas.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>El agua:</strong> No solo quita la sed física, representa
              al Espíritu Santo.
            </li>
            <li>
              <strong>El pan:</strong> No solo nutre el cuerpo (alimentación de
              los 5,000), representa a Cristo como sustento eterno.
            </li>
            <li>
              <strong>La luz:</strong> No solo permite ver con los ojos, es la
              iluminación de la salvación frente a la mortandad del pecado.
            </li>
          </ul>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>Discursos Largos vs Parábolas Cortas</h2>
          <p>
            Los Sinópticos están llenos de parábolas morales e historias breves.
            Increíblemente,{" "}
            <strong>
              en el Evangelio de Juan no hay ni una sola parábola tradicional
            </strong>
            .
          </p>
          <p>
            En su lugar, Juan incluye largos discursos meditativos y teológicos.
            Jesús razona, debate, y expone su intimidad con el Padre de manera
            exhaustiva. Los "discursos de despedida" (capítulos 13 al 17) son
            páginas ininterrumpidas enseñando profundamente los misterios de
            Dios.
          </p>
        </section>
      </div>

      <section className="content-section card">
        <h2>El Enfoque Espiritual (Escatología Realizada)</h2>
        <p>
          En el resto del Nuevo Testamento a menudo se habla de la salvación y
          del juicio como eventos puramente <em>futuros</em> (Escatología
          final). Juan introduce un concepto teológico fascinante conocido como
          "Escatología realizada" o "inaugurada".
        </p>
        <p>
          Para Juan, <strong>el juicio y la vida eterna ocurren HOY</strong> en
          base a la respuesta del hombre frente a Cristo.
        </p>
        <ul className="custom-list mt-4">
          <li>
            <em>
              "El que oye mi palabra, y cree al que me envió, tiene vida
              eterna... ha pasado de muerte a vida"
            </em>{" "}
            (Juan 5:24).{" "}
          </li>
          <li>
            <em>
              "El que en él cree, no es condenado; pero el que no cree, ya ha
              sido condenado"
            </em>{" "}
            (Juan 3:18).
          </li>
        </ul>
      </section>
    </div>
  );
}
