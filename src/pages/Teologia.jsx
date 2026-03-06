import React from "react";
import "./pages.css";

export function Teologia() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">El Enfoque Teológico de Juan</h1>
        <p className="subtitle">
          "Estas se han escrito para que creáis que Jesús es el Cristo" (Juan
          20:31)
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          Si los evangelios sinópticos (Mateo, Marcos y Lucas) nos ofrecen una
          "fotografía" de la vida de Jesús, el Evangelio de Juan nos ofrece una
          "radiografía". Juan no se conforma con decirnos <em>qué</em> hizo
          Jesús, sino que su máxima prioridad es mostrarnos <em>quién</em> es
          profundamente y <em>qué significa</em> lo que hizo.
        </p>
      </section>

      <div
        className="features-grid"
        style={{ gridTemplateColumns: "1fr", gap: "2rem" }}
      >
        {/* Lenguaje Simbólico */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>1. Su Lenguaje Simbólico</h2>
          <p>
            El universo joánico es de doble nivel: lo terrenal y lo celestial,
            lo material y lo espiritual. Jesús usa eventos cotidianos o
            elementos físicos como "ventanas" para revelar verdades eternas
            supremas:
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>El agua:</strong> No solo quita la sed física (la mujer
              samaritana), representa al Espíritu Santo.
            </li>
            <li>
              <strong>El pan:</strong> No solo nutre el cuerpo (alimentación de
              los 5,000), representa a Cristo como sustento eterno.
            </li>
            <li>
              <strong>La luz:</strong> No solo permite ver con los ojos
              (curación del ciego), es la iluminación de la salvación frente a
              la mortandad del pecado.
            </li>
          </ul>
        </div>

        {/* Divinidad */}
        <div
          className="feature-item card highlight-card border-dark"
          style={{ padding: "2rem" }}
        >
          <h2>2. La Reflexión sobre la Divinidad de Cristo</h2>
          <p>
            Juan tiene lo que los teólogos llaman una "Cristología alta". Ningún
            otro evangelio hace declaraciones tan absolutas, directas e
            inequívocas sobre la deidad preexistente de Jesucristo.
          </p>
          <p>
            Desde el versículo 1 ("el Verbo era Dios") hasta la confesión de
            Tomás en el capítulo 20 ("¡Señor mío, y Dios mío!"), todo el libro
            es una apología monumental defendiendo que el humilde carpintero de
            Nazaret es eternamente co-igual al Padre. Cuando la gente pregunta a
            Jesús su identidad, Él utiliza el impronunciable nombre divino "YO
            SOY".
          </p>
        </div>

        {/* Discursos */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>3. Discursos Largos vs Parábolas Cortas</h2>
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
            páginas y páginas ininterrumpidas del Señor enseñando directamente a
            sus apóstoles los misterios más profundos del Espíritu Santo, la
            obra futura en la iglesia, la unión con Dios y el destino celestial.
          </p>
        </div>

        {/* Enfoque Espiritual */}
        <div
          className="feature-item card highlight-card border-dark"
          style={{ padding: "2rem" }}
        >
          <h2>4. El Enfoque Espiritual (Escatología Realizada)</h2>
          <p>
            En el resto del Nuevo Testamento a menudo se habla de la salvación y
            del juicio como eventos puramente <em>futuros</em> (Escatología
            final). Juan introduce un concepto teológico fascinante conocido
            como "Escatología realizada" o "inaugurada".
          </p>
          <p>
            Para Juan, <strong>el juicio y la vida eterna ocurren HOY</strong>{" "}
            en base a la respuesta del hombre frente a Cristo.
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
        </div>
      </div>
    </div>
  );
}
