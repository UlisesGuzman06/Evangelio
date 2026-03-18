import React from "react";
import "../pages.css";

export function EstructuraHechos() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Estructura de Hechos</h1>
        <p className="subtitle">
          La expansión geográfica del Evangelio según el mandato de Jesús.
        </p>
      </header>

      <section className="content-section card">
        <h2 style={{ fontSize: "1.8rem" }}>La Expansión Concéntrica (Hechos 1:8)</h2>
        <p>
          La estructura de Hechos sigue con precisión el mandato de Jesús antes
          de ascender: "Me seréis testigos en Jerusalén, en toda Judea, en
          Samaria, y hasta lo último de la tierra." Cada etapa corresponde a una
          sección del libro.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent">
          <h2>1. En Jerusalén (Caps. 1-7)</h2>
          <p>
            El derramamiento del Espíritu en Pentecostés. Pedro predica con
            denuedo. La iglesia primitiva nace, crece vertiginosamente y comparte
            sus bienes. La primera gran persecución culmina con el martirio de
            Esteban, el primer mártir cristiano.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>2. Judea y Samaria (Caps. 8-12)</h2>
          <p>
            La persecución dispersa a los creyentes y el Evangelio se esparce.
            Felipe evangeliza Samaria y a un etíope. Saulo de Tarso se convierte
            dramáticamente. Pedro lleva el evangelio por primera vez a los
            gentiles en casa de Cornelio.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>3. Hasta lo Último (Caps. 13-20)</h2>
          <p>
            Pablo y sus compañeros realizan tres extensos viajes misioneros
            plantando iglesias en Asia Menor, Macedonia y Grecia. Se celebra el
            Concilio de Jerusalén que abre las puertas a los gentiles sin condiciones.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>4. De Jerusalén a Roma (Caps. 21-28)</h2>
          <p>
            Pablo es arrestado en Jerusalén, apela a César y es trasladado a
            Roma. Naufragios, comparecencias ante reyes y gobernadores no pueden
            detener su testimonio. El libro cierra con Pablo predicando en el
            corazón del Imperio Romano.
          </p>
        </section>
      </div>
    </div>
  );
}
