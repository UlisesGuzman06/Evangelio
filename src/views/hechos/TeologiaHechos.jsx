"use client";
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
