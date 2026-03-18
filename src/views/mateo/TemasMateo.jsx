import React from "react";
import "../pages.css";

export function TemasMateo() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Temas Principales en Mateo</h1>
        <p className="subtitle">
          El cumplimiento de la promesa, el Reino venidero y la identidad de
          Jesús.
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          Mateo estructura su evangelio en torno a varios temas fundamentales
          dirigidos a demostrar a una audiencia judía que Jesús de Nazaret es
          verdaderamente el Mesías esperado. Su mensaje se centra en el Reino y
          en la exigencia de una justicia superior.
        </p>
      </section>

      <div className="grid-2">
        {/* El Reino de los Cielos */}
        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            1. El Reino de los Cielos
          </h2>
          <p>
            Utilizada 32 veces, esta expresión es distintiva de Mateo (otros
            usan "Reino de Dios"). El Reino describe el gobierno soberano de
            Dios instaurándose en la tierra a través de Jesús.
          </p>
          <p>
            Se trata de una realidad dual: el reino "ya está aquí" (inaugurado
            en el ministerio de Jesús) pero "todavía no" llega a su consumación
            final (esperada en el futuro con su regreso).
          </p>
        </div>

        {/* Cumplimiento Profecía */}
        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            2. Cumplimiento de la Profecía
          </h2>
          <p>
            "Todo esto aconteció para que se cumpliese lo dicho por el Señor por
            medio del profeta..." es una de las frases favoritas del autor.
          </p>
          <p>
            Mateo conecta cada paso de Jesús, desde su nacimiento hasta su
            bautismo y sufrimiento como el Siervo del Señor en Isaías, para
            probar a los judíos que Jesús no era una ruptura del judaísmo, sino
            el glorioso desenlace esperado por las Escrituras.
          </p>
        </div>

        {/* Conflicto Lideres */}
        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            3. Conflicto con Líderes Religiosos
          </h2>
          <p>
            Mateo retrata de manera muy directa la ceguera e hipocresía de los
            fariseos, escribas y saduceos, dedicando capítulos enteros como
            Mateo 23 para denunciarlos con los siete "Ayes".
          </p>
          <p>
            Este duro conflicto sirve como advertencia perenne para todas las
            generaciones: el peligro mortal de depender de rituales externos y
            tradiciones vacías, descuidando el peso de la misericordia, la
            justicia y una piedad genuina profunda.
          </p>
        </div>

        {/* Discipulado Exigente */}
        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            4. El Discipulado Exigente
          </h2>
          <p>
            Seguir a Jesús implica un estándar moral más elevado ("una justicia
            mayor") que el de los líderes religiosos convencionales. La
            verdadera obediencia nace desde el corazón.
          </p>
          <p>
            En el Sermón del Monte, Cristo revela que se espera que los
            discípulos perdonen abundantemente, renuncien a la avaricia, oren en
            el secreto de sus aposentos y construyan su vida entera sobre la
            roca inamovible de Sus enseñanzas.
          </p>
        </div>
      </div>
    </div>
  );
}
