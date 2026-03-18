import React from "react";
import Link from 'next/link';
import "../pages.css";

export function ConclusionMateo() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Conclusión: Haced Discípulos</h1>
        <p className="subtitle">
          "Y he aquí yo estoy con vosotros todos los días, hasta el fin del
          mundo." (Mateo 28:20)
        </p>
      </header>

      <section
        className="content-section card mb-5 highlight-card border-accent"
        style={{ padding: "3rem 2.5rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2rem", borderBottom: "none" }}>
          El Llamado Universal a Hacer Discípulos
        </h2>
        <p style={{ fontSize: "1.2rem" }}>
          Mateo es el único Evangelio que concluye situando a los discípulos
          asombrados en una montaña de Galilea, escuchando la Gran Comisión
          final de Cristo antes de ascender a la gloria del Padre. No les deja
          el misterioso mandato de ir simplemente a hacer "conversos
          religiosos", sino <strong>"discípulos"</strong>, aprendices moldeables
          capaces de guardar todas las estrictas enseñanzas morales, el Sermón y
          la Ley compasiva del Reino que han recibido a lo largo del libro.
        </p>
      </section>

      <div className="grid-2">
        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>La Verdadera Obediencia del Corazón</h3>
          <p>
            Hoy, en sociedades fuertemente secularizadas y rituales religiosos
            vacíos o meramente costumbristas, el Evangelio de Mateo nos juzga y
            expone con la misma exigencia revolucionaria y pureza ética
            requerida en el Monte de las Bienaventuranzas. Es una permanente
            sacudida a la hipocresía contemporánea de los modernos "fariseos".
          </p>
        </div>

        <div
          className="feature-item card bg-accent-light"
          style={{ padding: "2rem" }}
        >
          <h3>La Promesa Irrevocable</h3>
          <p>
            Al emprender esta tarea sobrehumana y titánica de globalizar
            espiritualmente el Reino a base del simple Amor, el Evangelio ofrece
            el ancla metafísica más formidable de la literatura cósmica y las
            promesas cristianas: Su Presencia Continua Activa. Emanuel, "Dios
            con Nosotros", liderará majestuosamente Su propia Ekklesía hasta
            consumar soberanamente la historia humana final.
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          paddingBottom: "3rem",
        }}
      >
        <Link
          href="/mateo/capitulos"
          style={{
            display: "inline-block",
            padding: "15px 30px",
            background: "var(--color-dark)",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontFamily: "var(--font-heading)",
            fontSize: "1.2rem",
            boxShadow: "var(--shadow-md)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
          onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
        >
          Ir a los Capítulos del Texto Bíblico
        </Link>
      </div>
    </div>
  );
}
