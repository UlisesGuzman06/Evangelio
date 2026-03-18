"use client";
import React from "react";
import "../pages.css";

export function IntroduccionHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Introducción a los Hechos de los Apóstoles</h1>
        <p className="subtitle">
          La historia de la Iglesia primitiva empoderada por el Espíritu Santo.
        </p>
      </header>

      <section className="content-section card">
        <h2>¿Quién lo escribió?</h2>
        <p>
          El libro de los Hechos de los Apóstoles fue escrito por San Lucas, el mismo autor del tercer Evangelio. Como compañero de viaje del apóstol Pablo, Lucas documentó meticulosamente la rápida expansión del cristianismo desde Jerusalén hasta el corazón del Imperio Romano: Roma.
        </p>
        <p>
          Hechos es esencialmente el "Volumen 2" del Evangelio de Lucas. Inicia exactamente donde el evangelio termina: con Jesús ascendiendo al cielo y dejando a sus apóstoles la misión de llevar el mensaje de salvación al mundo entero.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2>Fecha de Composición</h2>
          <p>
            Generalmente se sitúa alrededor de los años <strong>62 y 64 d.C.</strong>, antes del martirio del apóstol Pablo y la destrucción del Templo de Jerusalén. Cierra abruptamente con Pablo bajo arresto domiciliario en Roma.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>Contexto Histórico</h2>
          <p>
            Relata una época de intensa transición histórica. El cristianismo comenzó como una pequeña secta judía en Judea y, en pocas décadas, guiados por el Espíritu Santo, cruzó barreras culturales, geográficas y religiosas para convertirse en un movimiento universal.
          </p>
        </section>
      </div>

      <section className="content-section card bg-accent-light">
        <h2>Un Libro de Transición y Acción</h2>
        <p>
          Hechos es el puente vital entre las narrativas de la vida de Jesús (Evangelios) y las cartas apostólicas (Epístolas), explicando el trasfondo de iglesias locales clave como Corinto, Éfeso y Filipos.
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <h3>El Espíritu Santo</h3>
            <p>
              A menudo llamado "Los Hechos del Espíritu Santo", porque Él es el principal agente que guía cada milagro, conversión y decisión.
            </p>
          </div>
          <div className="feature-item">
            <h3>De Pedro a Pablo</h3>
            <p>
              La primera mitad del libro se centra en el apóstol Pedro en Jerusalén; la segunda mitad sigue los viajes misioneros del apóstol Pablo hacia los gentiles.
            </p>
          </div>
          <div className="feature-item">
            <h3>Testigos en todo el mundo</h3>
            <p>
              Cumple la promesa de Hechos 1:8: "Me seréis testigos en Jerusalén, Judea, Samaria y hasta lo último de la tierra."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
