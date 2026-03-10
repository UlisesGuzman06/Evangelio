import React from "react";
import "../pages.css";

export function IntroduccionMarcos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Introducción al Evangelio de Marcos</h1>
        <p className="subtitle">
          El evangelio de la acción: Jesús, el Siervo poderoso que actúa con
          autoridad divina.
        </p>
      </header>

      <section className="content-section card">
        <h2>¿Quién fue Marcos?</h2>
        <p>
          Juan Marcos era un joven cristiano de Jerusalén, sobrino del apóstol
          Bernabé y colaborador cercano de Pedro. Aunque comenzó acompañando a
          Pablo y Bernabé en su primer viaje misionero, abandonó la expedición a
          mitad de camino, razón por la cual Pablo en un principio no confió en
          él. Más tarde fue totalmente restaurado y el propio Pablo lo mencionó
          como compañero valioso (2 Timoteo 4:11).
        </p>
        <p>
          La tradición cristiana lo vincula estrechamente a Pedro, siendo su
          evangelio esencialmente una recopilación de los testimonios oculares
          del apóstol Pedro, transmitidos con viveza y urgencia narrativa.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2>Fecha de Composición</h2>
          <p>
            Marcos es considerado el <strong>evangelio más antiguo</strong>,
            probablemente escrito entre los años <strong>55 y 65 d.C.</strong>,
            antes de la destrucción de Jerusalén y posiblemente durante la
            persecución de Nerón en Roma.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>Audiencia y Propósito</h2>
          <p>
            Escrito principalmente para{" "}
            <strong>lectores gentiles y romanos</strong>, Marcos explica las
            costumbres judías y evita largas genealogías. Su propósito es
            mostrar a Jesús como el Siervo-Hijo de Dios que actúa con poder
            sobrenatural.
          </p>
        </section>
      </div>

      <section className="content-section card">
        <h2>Diferencias con los Otros Evangelios</h2>
        <p>
          A diferencia de Mateo y Lucas (los otros Evangelios Sinópticos),
          Marcos tiene características únicas y una voz narrativa propia:
        </p>
        <ul className="custom-list">
          <li>
            <strong>Sin Genealogía ni infancia:</strong> Marcos comienza
            directamente con el ministerio adulto de Jesús, sin detenerse en su
            linaje ni nacimiento. Empieza en el bautismo de Juan.
          </li>
          <li>
            <strong>La palabra "inmediatamente":</strong> Usa esta palabra
            griega (εὐθύς) más de 40 veces, creando una narrativa veloz y
            urgente que subraya la autoridad inmediata de Jesús sobre todo.
          </li>
          <li>
            <strong>Detalles vívidos de testigo ocular:</strong> La conexión con
            Pedro le aporta detalles particulares (las emociones de Jesús, los
            nombres de personas secundarias) que no aparecen en otros
            evangelios.
          </li>
        </ul>
      </section>

      <section className="content-section card bg-accent-light">
        <h2>El Evangelio del Siervo</h2>
        <p>
          Marcos presenta a Jesús como aquel que "no vino para ser servido, sino
          para servir y para dar su vida en rescate por muchos" (Marcos 10:45).
          Su evangelio es el más breve de los cuatro, pero el más dinámico e
          inmediato.
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <h3>La Autoridad Inmediata</h3>
            <p>
              Jesús actúa con una autoridad que asombra: sana, exorciza y calma
              tormentas con una sola palabra, sin rituales ni demoras.
            </p>
          </div>
          <div className="feature-item">
            <h3>El Secreto Mesiánico</h3>
            <p>
              Marcos relata que Jesús frecuentemente mandaba callar a quienes
              sanaba o reconocían su identidad divina, un tema teológico central
              del libro.
            </p>
          </div>
          <div className="feature-item">
            <h3>El Camino de la Cruz</h3>
            <p>
              La segunda mitad del evangelio gira en torno al camino decisivo de
              Jesús hacia Jerusalén y su muerte redentora en el Calvario.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
