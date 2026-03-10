import React from "react";
import "../pages.css";

export function TemasMarcos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Temas Principales en Marcos</h1>
        <p className="subtitle">
          La autoridad, el servicio y el misterio de la identidad de Jesús.
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          Marcos escribe con urgencia y dinamismo para lectores gentiles,
          probablemente en Roma. Sus temas centrales giran en torno a la
          autoridad sobrenatural de Jesús, el llamado al sacrificio y el
          misterioso "secreto mesiánico" que recorre todo el libro.
        </p>
      </section>

      <div className="grid-2">
        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            1. La Autoridad de Jesús
          </h2>
          <p>
            Desde el primer capítulo, Jesús actúa con una autoridad que deja
            atónitos a todos. Ordena a demonios que salgan y obedecen, calma el
            mar con una palabra, y perdona pecados (algo solo Dios podía hacer).
          </p>
          <p>
            Esta autoridad no es como la de los escribas, que argumentaban con
            citas. Jesús habla y actúa con poder propio.
          </p>
        </div>

        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            2. El Secreto Mesiánico
          </h2>
          <p>
            Un tema exclusivo de Marcos: Jesús frecuentemente ordena silencio a
            quienes reconocen su identidad. Los demonios le conocen; Él los
            manda callar. Los sanados reciben la misma orden.
          </p>
          <p>
            Solo en la cruz, cuando un centurión romano exclama "¡Verdaderamente
            este hombre era el Hijo de Dios!", el secreto se revela plenamente.
          </p>
        </div>

        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            3. El Camino del Siervo
          </h2>
          <p>
            El versículo clave de Marcos es 10:45: "El Hijo del Hombre no vino
            para ser servido, sino para servir y para dar su vida en rescate por
            muchos." Este define toda la narrativa.
          </p>
          <p>
            Marcos enfatiza que los seguidores de Jesús deben abrazar el mismo
            camino de servicio, humildad y auto-entrega que su Maestro demostró.
          </p>
        </div>

        <div className="card highlight-card border-accent">
          <h2
            style={{
              color: "var(--color-accent)",
              marginBottom: "1rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
            }}
          >
            4. La Incomprensión de los Discípulos
          </h2>
          <p>
            Un tema llamativamente honesto: los doce discípulos frecuentemente
            no entienden las enseñanzas de Jesús, tienen miedo, dudan y en el
            momento decisivo, todos lo abandonan.
          </p>
          <p>
            Esta honestidad brutal muestra que la fe verdadera nace de la gracia
            de Dios, no de la capacidad humana, y da esperanza a todos los
            creyentes que luchan.
          </p>
        </div>
      </div>
    </div>
  );
}
